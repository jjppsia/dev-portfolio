import { Icons } from "@/components/icons"

export type Link = {
  title: string
  href: string
}

export type LinkWithIcon = Link & {
  icon: keyof typeof Icons
}
