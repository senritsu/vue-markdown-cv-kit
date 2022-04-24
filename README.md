# Vue+Markdown CV Kit

A collection of components to build a CV.

Built primarily to have at least some small measure of fun getting my own CV up to date, so it is quite opinionated and not (yet?) perfectly flexible for other fields or needs.

Output is currently styled to be printed on A4 paper using the default browser print functionality.

# How to use

The basic idea is to be able to write the CV as a simple readable markdown file conforming to a certain schema, and use the Vue components to assemble it into a nice-looking CV.

At the moment the required markdown structure is pretty much fixed, and usage requires checking out the source. If possible I would like to flesh it out a bit and provide it as a hosted browser app to make it actually usable by other people.

- Clone the repo
- Add your own CV at `assets/cv.md`
- `npm run dev`
- Preview and adjust
- Print using the browser

## Required Markdown structure

Generally information is pulled out of markdown blocks (headgins followed by a list and/or some text) at certain heading levels. Order of headings is unimportant.

Blocks are identified based on certain case-insensitive keywords in the heading.

### Profile

Applicant name is the top level 1 heading of the markdown file.

Contains basic profile info as a list with label prefixes.

```md
# John Johnson

- Positions: Software Developer
- GitHub: [theonlytruejohnjohnson](https://github.com/theonlytruejohnjohnson)
```

Mandatory fields: `Positions` (comma separated), `Location`, `Phone`, `Email`
Optional social links (as markdown links, see above): `Homepage`, `Linkedin`, `GitHub`, `Xing`

### Education

Level 1 or 2 heading containing `education`. Contains any number of level 3 or 4 headers for individual entries.

```md
## Here be eduational things

#### 2022 / Best degree / Greatest institution / Top city, Awesome country

Here is some info about extracurricular activities

#### 2021 - 2022 / Some degree / Some institution / Some city

- Department: Best department
- Thesis: Best thesis name ever
```

`Department` and `Thesis` are optional, as is the block for extracurricular activities.

### Work experience

Level 1 or 2 heading containing `experience`. Contains any number of level 3 or 4 headers for individual entries.

```md
## The best work experience

#### 2000 - 2010 / Employer / Awesometown, Awesomeland

Janitor

- Kept everything in tip-top shape

#### 2010 - 2020 / Other employer / Some town nobody knows

Inventor, Entrepreneur, CEO

- Made a lot of things
- Chiefed a lot of executives
```

Comma-separated roles are mandatory, bullet points are optional.

### Skills

Level 1 or 2 heading containing `skill`. Contains any number (but preferrably 3 for layout reasons) of skill groups as level 3 or 4 headers.

Each group contains a number of highlighted skills with a rating as bullet points, as well as an additional comma-separated list of less-important skills in that category.

```md
## My skills

#### Programming languages

- Rockstar: 5
- Whitespace: 4

Piet, Malbolge, Shakespeare

#### Frameworks

- Framework 1: 5
- Framework 2: 3

Other Framework, Yet another framework

#### Modes of transportation

- Bicycle: 4
- Car: 3
- Unicycle: 2

Rollerskates, Ski, Wingsuit
```

Bullet points are mandatory. Rating is optional, if you want to display it use a scale of 1-5 as that is the only scale supported right now. Additional skills are optional.

### Languages

Level 1 or 2 heading containing `language`. Contains bullet points with language name and fluency rating.

```md
## Languages

- Klingon: Native
- Sindarin: Fluent
- Valyrian: Not terrible
```

Fluency rating can be arbitrary text, use of a consistent rating system is recommended.

### Interests / Hobbies

Level 1 or 2 heading containing `interest`, `hobbies` or `hobby`. Contains a comma-separated list of interests.

```md
## Interested in

Knolling, Speedruns, Juggling, Speedpainting, Tank-driving, Parachuting
```

### Individual projects

Any number of level 1 or 2 heading containing `project`. Contains any number of level 3 or 4 headers detailing a single project.

```md
## Cool projects

#### 2020 - 2022 / Space elevator / Some company

Lead cable specialist

- Arranged unobtainium cables with highest precision
- Developed new cable arrangement to maximize load-bearing capacity
- Climbed up the cable to LEO

## Boring projects

#### 2018-2020 / Landfill redesign / Some shitty company

Ditch digger

- Dug ditches all day long
- Moved garbage around
```

Only a single project role is supported right now.

# Credit

Layout and design strongly inspired by (or in some parts directly ported from): https://github.com/posquit0/Awesome-CV
