import { Link } from '@/types'

import { Icons } from '@/components/icons'

type DevelopmentCategory = 'Fullstack' | 'Frontend' | 'Backend'

export type Project = {
  title: string
  description: string
  links: Link[]
  imagePath: `/${string}`
  date: string
  category: DevelopmentCategory
  techStack: {
    name: string
    icon: keyof typeof Icons
  }[]
}

export const projects: Project[] = [
  {
    title: 'ChatJPS',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    links: [
      {
        title: 'Live',
        href: 'https://chatjps.vercel.app',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/jjppsia/chatgpt-clone',
      },
    ],
    imagePath: '/assets/projects/chatjps.png',
    date: 'May 16, 2023',
    category: 'Fullstack',
    techStack: [
      {
        name: 'Next.js',
        icon: 'nextjs',
      },
      {
        name: 'React',
        icon: 'react',
      },
      {
        name: 'TypeScript',
        icon: 'typeScript',
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind',
      },
      {
        name: 'MongoDB',
        icon: 'mongoDB',
      },
      {
        name: 'Prisma',
        icon: 'prisma',
      },
      {
        name: 'NextAuth.js',
        icon: 'nextAuth',
      },
      {
        name: 'OpenAI',
        icon: 'openAI',
      },
    ],
  },
  {
    title: "Hunter's Hub",
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    links: [
      {
        title: 'Live',
        href: 'https://huntershub.vercel.app',
      },
      {
        title: 'Github',
        href: 'https://github.com/jjppsia/huntershub',
      },
    ],
    imagePath: '/assets/projects/huntershub.png',
    date: 'May 10, 2023',
    category: 'Frontend',
    techStack: [
      {
        name: 'Next.js',
        icon: 'nextjs',
      },
      {
        name: 'React',
        icon: 'react',
      },
      {
        name: 'TypeScript',
        icon: 'typeScript',
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind',
      },
    ],
  },
  {
    title: 'User Authentication API',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jjppsia/auth-api',
      },
    ],
    imagePath: '/assets/projects/user-auth-api.png',
    date: 'Nov 26, 2022',
    category: 'Backend',
    techStack: [
      {
        name: 'Node.js',
        icon: 'nodejs',
      },
      {
        name: 'Express.js',
        icon: 'expressjs',
      },
      {
        name: 'TypeScript',
        icon: 'typeScript',
      },
    ],
  },
  {
    title: 'Discord Bot',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jjppsia/discord-bot-v2',
      },
    ],
    imagePath: '/assets/projects/discord-bot.png',
    date: 'Nov 26, 2022',
    category: 'Backend',
    techStack: [
      {
        name: 'Discord.js',
        icon: 'discordjs',
      },
      {
        name: 'Node.js',
        icon: 'nodejs',
      },
      {
        name: 'TypeScript',
        icon: 'typeScript',
      },
    ],
  },
]
