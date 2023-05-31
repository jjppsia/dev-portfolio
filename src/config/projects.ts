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
      "Developed a ChatGPT clone. OpenAI's API allowed me to create a sophisticated conversational AI model that closely resembled ChatGPT.",
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
      'Redesigned the website of a headhunting company, revamping its user interface and applied a modernized design and improved user experience.',
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
      'Built a user authentication API from scratch as a practical learning exercise to gain a comprehensive understanding of the underlying concepts and implementation techniques involved in creating secure user registration, login, and authorization systems for web applications.',
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
      'Developed a custom Discord bot that was used by multiple discord servers, providing various features such as custom commands, and personalized notifications.',
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
