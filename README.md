# Advent of Code

This repository contains my solutions for the **Advent of Code** challenges.
They are separated by year and day. 

The goal is to document my progress and to have a reference for future 
challenges. 

As of now, I mainly use javascript in my day-to-day work, so I will be using it
to solve the challenges but I also want to try to solve them in other languages 
such as Lua, Python and Java in this order of priority.

## Directory Structure

The repository is structured as follows:

```css
advent-of-code/
├── YYYY/
│   ├── YYYY_DD/
│   │   ├── solution.js
│   │   └── README.md
│   └── ...
└── README.md
```

- `YYYY/`: contains the solutions for the challenges of the year YYYY.
- `YYYY_DD/`: contains the solutions for the challenge of the day DD of the 
year YYYY.
    - `solution.js`: contains the solution for the challenge.
    - `README.md`: contains a link to the challenge and which languages passed.

## Running the Solutions

Each solution is implemented in a single file (e.g. `solution.js`). You can run
the solution by navigating to the directory of the challenge and executing the
file. 

For example, to run the solution for the challenge of day in javascript: 

```bash
cd YYYY/YYYY_DD/
node solution.js
```

> [!IMPORTANT]
> Input files are not provided to respect the author's request. You can find your specific input file for each challenge by logging in to the [Advent of Code](https://adventofcode.com/).

## About Advent of Code

[Advent of Code](https://adventofcode.com/) is an annual event created by 
Eric Wastl. It consists of a series of programming puzzles released daily during 
December. These puzzles are an excellent way to sharpen problem-solving and 
programming skills while having fun.

Credit and thanks to Eric Wastl for creating this event.
