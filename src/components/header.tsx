import Link from 'next/link'

import { socialLinks } from '@/config/social-links'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'

export function Header() {
  return (
    <header className='space-y-6'>
      <div className='max-w-fit'>
        <Avatar className='h-20 w-20'>
          <AvatarImage src='https://github.com/jjppsia.png' />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
      </div>
      <h1 className='text-3xl font-bold tracking-tight'>
        Software engineer 👨‍💻
      </h1>
      <p className='max-w-2xl opacity-80'>
        I&apos;m a software engineer who&apos;s passionate about building really
        cool stuff with code. I&apos;m dreaming of bringing ideas to reality and
        creating meaningful solutions that could make a difference.
      </p>
      <div>
        <ul className='flex items-center space-x-4'>
          {socialLinks.map(({ title, href, icon }, index) => {
            const Icon = Icons[icon]

            return (
              <li key={index} className='flex' title={title}>
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'w-9 px-0'
                  )}
                  target='_blank'
                >
                  <span className='sr-only'>{title}</span>
                  <Icon className='h-6 w-6' />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
