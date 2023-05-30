import { projects } from '@/config/projects'
import { Experience } from '@/components/experience'
import { Header } from '@/components/header'
import { Project } from '@/components/project'

export default function RootPage() {
  return (
    <main className='mt-36 flex w-full max-w-4xl flex-col'>
      {/* About */}
      <section id='about'>
        <Header />
      </section>

      {/* Experiences */}
      <section id='experiences' className='mt-36'>
        <h2 className='text-3xl font-bold tracking-tight'>Experiences</h2>
        <div className='mt-8'>
          <Experience />
        </div>
      </section>

      {/* Projects */}
      <section id='projects' className='mt-36'>
        <h2 className='text-3xl font-bold tracking-tight'>Projects</h2>
        <div className='mt-8 space-y-20'>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
