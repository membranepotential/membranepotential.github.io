// Adapted from: https://github.com/anokhee/generative-landscapes

// Equation & functionality for generating 1D Perlin Noise in HTML5 Canvas
// Taken and slightly modified from Oliver Balfour's tutorial
// titled 'Prodedural Generation Part 1 - 1D Perlin Noise
// https://codepen.io/OliverBalfour/post/procedural-generation-part-1-1d-perlin-noise

import rand from './random'

//cosine interpolation
function interpolate(pa: number, pb: number, px: number) {
  var ft = px * Math.PI,
    f = (1 - Math.cos(ft)) * 0.5
  return pa * (1 - f) + pb * f
}

//1D perlin line generator
function generate(amp: number, wl: number, length: number): number[] {
  const ys: number[] = []
  let a = rand()
  let b = rand()

  for (let i = 0; i < length; i++) {
    if (i % wl === 0) {
      a = b
      b = rand()
      ys.push(a * amp)
    } else {
      ys.push(interpolate(a, b, (i % wl) / wl) * amp)
    }
  }

  return ys
}

//octave generator
export function perlin(
  amp: number,
  wl: number,
  length: number,
  octaves: number,
  divisor: number,
) {
  if (octaves < 1) {
    throw new TypeError('Octaves must be greater than 1')
  }

  // base octave
  const line = generate(amp, wl, length)

  // overtones
  for (let i = 1; i < octaves; i++) {
    const x = generate(
      amp / Math.pow(divisor, i),
      wl / Math.pow(divisor, i),
      length,
    )

    // add overtones to base
    for (let j = 0; j < length; j++) {
      line[j] += x[j]
    }
  }

  return line
}
