---
title: OpTac - Discover tactics in your favorite chess opening
date: 2024-09-22
---

OpTac uses a chess engine and the Lichess opening database to find tactics
(sequences of forced moves that change the evaluation). Startihg from a
specified position, it crawls the most common moves from the opening book up to
some depth. Each position is checked with an engine for tactical opportunities.
The results are outputted as puzzles and can be imported into a Lichess study.

This gives you an excellent tool to discover tricks and traps and learn the
critical moves in your opening repertoire.

Below I will descibe a few things I learned during the development of OpTac.

## What is a tactic?

During the daily grind of puzzles on either [Lichess](https://lichess.org) or
[ChessTempo](https://chesstempo.com/) I never really had to think about what a
tactic actually is.
