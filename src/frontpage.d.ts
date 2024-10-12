declare module '*/frontpage.yaml' {
  interface Contact {
    name: string
    icon: string
    url: string
  }

  interface Scenario {
    title: string
    description: string
    image: string
  }

  interface CaseStudy {
    solution: string
    outcome: string
    image: string
  }

  interface Frontpage {
    contacts: Contact[]
    services: string[]
    scenarios: Scenario[]
    caseStudies: CaseStudy[]
    technologies: string[]
  }

  const frontpage: Frontpage
  export default frontpage
}
