import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/globals.css'

import { DesktopNav } from '@/components/desktop-nav'
import { MobileNav } from '@/components/mobile-nav'

export const metadata = {
  title: 'Jp Sia | Software Engineer',
  description: 'My personal developer portfolio',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex flex-col items-center px-4 py-8 sm:px-8 xl:px-0'>
            <DesktopNav />
            <MobileNav />
            {children}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
