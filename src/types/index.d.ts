import { Icons } from "@/components/icons"

export type Link = {
  title: string
  href: string
}

export type LinkWithIcon = Link & {
  icon: keyof typeof Icons
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  keywords: string[]
  authors: {
    name: string
    url: string
  }[],
  creator: string
  themeColor: {
    media: string
    color: string
  }[]
}
