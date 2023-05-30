'use client'

import { useTheme } from 'next-themes'

import { Icons } from '@/components/icons'
import { Button, ButtonProps } from '@/components/ui/button'

type ThemeToggleProps = ButtonProps

export function ThemeToggle({ className, variant, size }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Icons.moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
