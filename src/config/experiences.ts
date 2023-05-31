export type Experience = {
  company: string
  jobTitle: string
  jobDescription: string
  startDate: string
  endDate: string
}

export const experiences: Experience[] = [
  {
    company: 'Penbrothers',
    jobTitle: 'Fullstack Developer Trainee',
    jobDescription:
      'Collaborated with co-developers to build a web based carpooling system. Built the initial project structure from front-end to back-end for the web based carpooling system. Designed and developed REST APIs for the carpooling system.',
    startDate: 'Sept. 2022',
    endDate: 'Nov. 2022',
  },
  {
    company: 'Dashlabs',
    jobTitle: 'Infrastructure Engineer Intern',
    jobDescription:
      'Developed a feature called Send Logs that allows users to easily see or read the data of a particular email send logs that comes from SendGrid. Implemented CRUD functionality in the Export CSV Config feature',
    startDate: 'Aug. 2022',
    endDate: 'Sept. 2022',
  },
  {
    company: 'Dashlabs',
    jobTitle: 'Client Success Intern',
    jobDescription:
      'Handled clients, patients, and other users on their queries and technical concerns in a timely and accurate way, via chat, call or email.',
    startDate: 'May. 2022',
    endDate: 'July. 2022',
  },
]
