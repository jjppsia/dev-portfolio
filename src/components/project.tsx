import Image from 'next/image'
import Link from 'next/link'

import { type Project } from '@/config/projects'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

type ProjectProps = {
  project: Project
}

export function Project({ project }: ProjectProps) {
  const dateTime = new Date(project.date).toISOString()

  return (
    <article className='relative isolate flex flex-col gap-8 md:flex-row'>
      <div className='relative aspect-[16/9] overflow-hidden rounded-2xl shadow-md sm:aspect-[2/1] md:w-72 md:shrink-0'>
        <Image
          src={project.imagePath}
          alt={project.title}
          sizes='(max-width: 767px) 100vh, 288px'
          style={{ objectFit: 'cover' }}
          quality={100}
          fill
        />
      </div>
      <div className='space-y-4'>
        <div className='flex items-center space-x-4 text-xs'>
          <time dateTime={dateTime} className='opacity-80'>
            {project.date}
          </time>
          <Badge variant='secondary' className='pointer-events-none'>
            {project.category}
          </Badge>
        </div>
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold'>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <Separator />
        <div className='flex items-center space-x-4'>
          <h4 className='self-start whitespace-nowrap text-sm font-medium'>
            Links:
          </h4>
          <div>
            <ul className='flex flex-wrap items-center gap-2'>
              {project.links.map(({ title, href }, index) => (
                <li key={index} className='flex' title={title}>
                  <Badge variant='outline' className='p-0'>
                    <Link
                      href={href}
                      target='_blank'
                      className='rounded-full px-2.5 py-0.5'
                    >
                      {title}
                    </Link>
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <h4 className='self-start whitespace-nowrap text-sm font-medium'>
            Tech stack:
          </h4>
          <div>
            <ul className='flex flex-wrap items-center gap-4'>
              {project.techStack.map(({ name, icon }, index) => {
                const Icon = Icons[icon]

                return (
                  <li key={index} className='flex' title={name}>
                    <span className='sr-only'>{name}</span>
                    <Icon className='h-6 w-6' />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
