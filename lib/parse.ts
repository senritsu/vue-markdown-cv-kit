const parseHeader = (s: string, maxDepth: number) => {
  const match = s.match(/^(?<hashes>#+)\s+(?<title>.+)$/)

  if (!match) return undefined

  const depth = match[1].length
  const title = match[2]

  if (depth > maxDepth) return undefined

  return {
    title,
    depth,
  }
}

const groupByHeader = (lines: string[], maxDepth: number) => {
  const groups = []

  for (const line of lines) {
    const header = parseHeader(line, maxDepth)

    if (header) {
      groups.push({
        ...header,
        lines: [] as string[],
      })
      continue
    }

    if (!groups.length) {
      continue
    }

    groups[groups.length - 1].lines.push(line)
  }

  return groups
}

const getByLabelRequired = (lines: string[], label: string) => {
  const text = getByLabel(lines, label)

  if (!text) throw new Error(`missing label: ${label}`)

  return text
}
const getByLabel = (lines: string[], label: string) => {
  const matchingLine = lines.find((x) => x.startsWith(`${label}: `))

  return matchingLine?.replace(`${label}: `, '')
}

const parseLink = (s: string | undefined) => {
  if (!s) return undefined

  const [full, label, href] = s.match(/\[(?<label>.+)\]\((?<href>.+)\)/) || []

  return { label, href }
}

const listRegex = /^- /
const getSummary = (group: { lines: string[] }) =>
  group.lines.find((x) => !x.match(listRegex))
const getBulletPoints = (group: { lines: string[] }) =>
  group.lines
    .filter((x) => x.match(listRegex))
    .map((x) => x.replace(listRegex, ''))

export function parseCv(markdownSource: string) {
  const lines = markdownSource.split(/\r|\n|\r\n/).filter((x) => x)

  const toplevelGroups = groupByHeader(lines, 2)

  const profileGroup = toplevelGroups.find((x) => x.depth === 1)

  if (!profileGroup) throw new Error('missing profile')

  const profileEntries = getBulletPoints(profileGroup)

  const profile = {
    summary: getSummary(profileGroup),
    name: profileGroup.title,
    positions: getByLabelRequired(profileEntries, 'Positions').split(/,\s?/),
    location: getByLabelRequired(profileEntries, 'Location'),
    phone: getByLabelRequired(profileEntries, 'Phone'),
    email: getByLabelRequired(profileEntries, 'Email'),
    homepage: parseLink(getByLabel(profileEntries, 'Homepage')),
    github: parseLink(getByLabel(profileEntries, 'GitHub')),
    xing: parseLink(getByLabel(profileEntries, 'Xing')),
    linkedin: parseLink(getByLabel(profileEntries, 'Linkedin')),
    quote: getByLabel(profileEntries, 'Quote'),
  }

  const employmentGroup = toplevelGroups.find((x) =>
    x.title.match(/experience/i)
  )

  if (!employmentGroup) throw new Error('missing employment data')

  const employmentEntries = groupByHeader(employmentGroup.lines, 4).map(
    (group) => {
      const [time, employer, location] = group.title.split(/\s*\/\s*/)
      const position = getSummary(group)

      if (!position)
        throw new Error('missing position for work experience entry')

      const responsibilities = getBulletPoints(group)

      return { time, employer, location, position, responsibilities }
    }
  )

  const educationGroup = toplevelGroups.find((x) => x.title.match(/education/i))

  if (!educationGroup) throw new Error('missing education data')

  const educationEntries = groupByHeader(educationGroup.lines, 4).map(
    (group) => {
      const [time, degree, institution, location] =
        group.title.split(/\s*\/\s*/)
      const extracurricularActivities = getSummary(group)
      const details = getBulletPoints(group)

      const department = getByLabel(details, 'Department')
      const thesis = getByLabel(details, 'Thesis')

      return {
        time,
        degree,
        institution,
        location,
        department,
        thesis,
        extracurricularActivities,
      }
    }
  )

  const skillGroup = toplevelGroups.find((x) => x.title.match(/skills/i))

  if (!skillGroup) throw new Error('missing skill data')

  const SkillsOverview = groupByHeader(skillGroup.lines, 4).map((group) => {
    const summary = getSummary(group)

    if (!summary) throw new Error('missing project summary')

    const skills = getBulletPoints(group)
      .map((x) => x.split(/:\s*/))
      .map(([name, rating]) => ({ name, rating: parseInt(rating) }))

    return {
      name: group.title,
      unrated: getSummary(group)?.split(/\s*,\s*/),
      skills,
    }
  })

  const languagesGroup = toplevelGroups.find((x) => x.title.match(/languages/i))

  if (!languagesGroup) throw new Error('missing languages data')

  const languages = getBulletPoints(languagesGroup)
    .map((x) => x.split(/\s*:\s*/))
    .map(([name, proficiency]) => ({ name, proficiency }))

  const interestsGroup = toplevelGroups.find((x) => x.title.match(/interests/i))

  if (!interestsGroup) throw new Error('missing interests section')

  const interests = getSummary(interestsGroup)?.split(/\s*,\s*/)

  if (!interests) throw new Error('missing interests content')

  const projectGroup = toplevelGroups.find((x) => x.title.match(/projects/i))

  if (!projectGroup) throw new Error('missing project data')

  const projectEntries = groupByHeader(projectGroup.lines, 4).map((group) => {
    const [time, name, customer] = group.title.split(/\s*\/\s*/)

    const summary = getSummary(group)

    if (!summary) throw new Error('missing project summary')

    const [position, description] = summary.split(/\s*,\s*/)

    const details = getBulletPoints(group)

    return {
      time,
      name,
      position,
      description,
      customer,
      details,
    }
  })

  return {
    profile,
    experience: employmentEntries,
    education: educationEntries,
    projects: projectEntries,
    SkillsOverview,
    languages,
    interests,
    date: new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
      new Date()
    ),
  }
}
