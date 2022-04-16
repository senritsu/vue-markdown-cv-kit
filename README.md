# Vue+Markdown CV Kit

A collection of components to build a CV.

Built primarily to have at least some small measure of fun getting my own CV up to date, so it is quite opinionated and not (yet?) perfectly flexible for other fields or needs.

Output is currently styled to be printed on A4 paper using the default browser print functionality.

# How to use

The basic idea is to be able to write the CV as a simple readable markdown file conforming to a certain schema, and use the Vue components to assemble it into a nice-looking CV.

At the moment the required markdown structure is pretty much fixed.

## Profile

Applicant name is the top level header of the markdown file. Directly below basic profile info is supplied as a list with simple labels prefixed

```md
# John Johnson

- Positions: Software Developer
- GitHub: [senritsu](https://github.com/senritsu)
```

Mandatory fields: `Positions` (comma separated), `Location`, `Phone`, `Email`
Optional social links (as markdown links, see above): `Homepage`, `Linkedin`, `GitHub`, `Xing`

## Education

A level 2 header somewhere in the markdown file that contains the word `education` in any casing. Contains any number of level 3 or 4 headers for individual entries.

```md
## Here be eduational things

#### 2022 / Best degree / Greatest institution / Top city, Awesome country

Here is some info about extracurricular activities

#### 2021 - 2022 / Some degree / Some institution / Some city

- Department: Best department
- Thesis: Best thesis name ever
```

`Department` and `Thesis` are optional, as is the block for extracurricular activities.

## Work experience

A level 2 header somewhere in the markdown file that contains the word `experience` in any casing. Contains any number of level 3 or 4 headers for individual entries.

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

## Skills

TODO

## Languages

TODO

## Interests / Hobbies

TODO

## Individual projects

TODO

# Credit

Layout and design strongly inspired by (or in some parts directly ported from): https://github.com/posquit0/Awesome-CV
