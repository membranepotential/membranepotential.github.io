declare module '*/frontpage.yaml' {
  import type { Service } from './types'

  interface Contact {
    title: string
    icon: string
    url: string
    obfuscated?: boolean
  }

  interface Frontpage {
    contacts: Contact[]
    services: Service[]
    technologies: string[]
  }

  const frontpage: Frontpage
  export default frontpage
}
