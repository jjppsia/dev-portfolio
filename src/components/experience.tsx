import { experiences } from '@/config/experiences'

export function Experience() {
  return (
    <ol>
      {experiences.map((experience, index) => (
        <li key={index} className='group flex flex-col rounded-2xl'>
          <div className='flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='h-4 w-1 shrink-0 bg-secondary group-first:bg-transparent' />
              <div className='z-10 block h-2 w-2 shrink-0 rounded-full border ring-2 ring-ring transition-all ease-in-out group-hover:scale-125' />
              <div className='block h-full w-1 bg-secondary group-last:hidden' />
            </div>
            <div className='grow space-y-3'>
              <div className='flex'>
                <div className='ease-bouncy grow transition-all group-hover:translate-x-4'>
                  <h3 className='text-lg font-semibold'>
                    {experience.company}
                  </h3>
                  <h4 className='font-medium'>{experience.jobTitle}</h4>
                </div>
                <p className='ease-bouncy hidden transition-all group-hover:translate-x-4 sm:block'>
                  {experience.startDate} &rarr; {experience.endDate}
                </p>
              </div>
              <p className='ease-bouncy opacity-80 transition-all group-hover:translate-x-4'>
                {experience.jobDescription}
              </p>
            </div>
          </div>
          <div className='flex w-2 justify-center group-last:hidden '>
            <div className='block h-7 w-1 shrink-0 bg-secondary' />
          </div>
        </li>
      ))}
    </ol>
  )
}
