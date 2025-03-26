type Image = {
  src: string
  alt: string
}

export type Service = {
  title: string
  subheader: string
  image: Image
  problem: string
  description: string
  benefits: string[]
  caseStudy?: string
  cta: string
}
