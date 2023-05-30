'use client'

import Image from 'next/image'
import { Link } from 'react-scroll'

import { navItems } from '@/config/nav-items'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import { buttonVariants } from '@/components/ui/button'

export function DesktopNav() {
  return (
    <div className='hidden w-full max-w-4xl sm:block'>
      <nav className='flex items-center'>
        <Image
          src='/assets/skull.png'
          alt='Picture of the author'
          width={50}
          height={50}
          priority
        />
        <ul className='ml-8 flex space-x-2'>
          {navItems.map(({ title, href }, index) => (
            <li key={index}>
              <Link
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'cursor-pointer'
                )}
                to={href}
                offset={-24}
                duration={500}
                smooth={true}
                tabIndex={0}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle className='ml-auto' variant='ghost' size='sm' />
      </nav>
    </div>
  )
}
