'use client'

import { Link } from 'react-scroll'

import { navItems } from '@/config/nav-items'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

export function Footer() {
  return (
    <footer className='mt-36 w-full max-w-4xl border-t'>
      <div className='flex  flex-col items-center justify-between py-12 sm:flex-row'>
        <p className='text-sm opacity-80'>
          &copy; 2023 Jp Sia. All rights reserved.
        </p>
        <nav className='mt-8 sm:mt-0'>
          <ul className='flex space-x-2'>
            {navItems.map(({ title, href }, index) => (
              <li key={index}>
                <Link
                  href={href}
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
        </nav>
      </div>
    </footer>
  )
}

/*  &copy; 2020 Your Company, Inc. All rights reserved. */
