This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

```markdown

 github address: https://github.com/mschwarzmueller/nextjs-course-code

 2023/10/11 branch study - 08-pr-api-routes


```

---
  components
    events
      events-search.js
    icons
      arrow-icon.js
      download-icon.js
    layout
      layout.js
      main-header.js
  pages
    _app.js
    index.js // home页面
    router1
      index.js // 一般路由
    router2
      [id2]/index.js // 一般动态路由-属性id2
    router3
      [..slug].js // 动态路由数组-属性-数组slug
    router4
      index.js // 一般路由
      [router4Inner].js // 一般动态路由-属性router4Inner
      [id4]/[...slug].js // 双层动态路由, 第一层属性id4, 第二层属性-数组slug
    events
      index.js // events页面
---