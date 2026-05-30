import type { Talk } from '~/types'

export const talks: Talk[] = [
  {
    title: 'Introducing Vite DevTools',
    description: 'Introduction to Vite DevTools',
    presentations: [
      {
        lang: 'zh',
        date: '2025-07-12',
        location: 'Shenzhen, China',
        conference: 'VueConf China',
        conferenceUrl: 'https://vueconf.cn/',
        recording: 'https://www.bilibili.com/video/BV1Nqb1zoENu/',
        pdf: 'https://talks.quangphung.site/2025-07-12/pdf',
        spa: 'https://talks.quangphung.site/2025/vueconf-china',
      },
    ],
  },
]

talks.forEach((talk) => {
  talk.presentations.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

talks.sort((a, b) => {
  return new Date(b.presentations[0].date).getTime() - new Date(a.presentations[0].date).getTime()
})
