---
title: Projects - Phùng Mạnh Quảng
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Current Focus:
    - name: 'Vite DevTools'
      link: 'https://github.com/vitejs/devtools'
      desc: 'Inspect the intermediate state of Vite bundle and pipeline'
      icon: 'i-simple-icons-vite'
    - name: 'Nuxt DevTools'
      link: 'https://github.com/nuxt/devtools'
      desc: 'Unleash Nuxt Developer Experience'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'Nuxt Playground'
      link: 'https://github.com/nuxt/learn.nuxt.com'
      desc: 'Interactive Playground for learning Nuxt'
      icon: 'i-logos-nuxt-icon saturate-0'
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects" />
