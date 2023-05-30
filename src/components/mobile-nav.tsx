'use client'

import { useOpenWithMediaQuery } from '@/hooks/use-open-with-media-query'
import { Link } from 'react-scroll'

import { navItems } from '@/config/nav-items'
import { Icons } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

export function MobileNav() {
  const [open, setOpen] = useOpenWithMediaQuery('(min-width: 640px)')

  return (
    <div className='flex max-w-fit items-center space-x-4 self-end sm:hidden sm:space-x-0'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='outline' className='space-x-2 rounded-3xl shadow-md'>
            <span className='font-medium'>Menu</span>
            <Icons.chevronDown className='h-3 w-3' />
          </Button>
        </DialogTrigger>
        <DialogContent className='mt-6 max-w-xs rounded-xl sm:max-w-xs'>
          <DialogHeader className='text-left'>
            <DialogTitle>Menu</DialogTitle>
          </DialogHeader>
          <nav>
            <ul>
              {navItems.map(({ title, href }, index) => (
                <li key={index}>
                  <Link
                    className='cursor-pointer'
                    to={href}
                    offset={-24}
                    smooth={true}
                    duration={500}
                    tabIndex={0}
                    onClick={() => setOpen(false)}
                  >
                    <span className='text-sm'>{title}</span>
                  </Link>
                  {index === navItems.length - 1 ? null : (
                    <Separator className='my-2' />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
      <ThemeToggle className='rounded-3xl shadow-md' variant='outline' />
    </div>
  )
}
