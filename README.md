---
- created project by create-next-app
---



## 0. Getting Started

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



## 1. 目录结构

```js
|-- components 
|   |-- events
|   |   |-- events-search.js
|   |   |-- events-search.module.css
|   |-- icons
|   |   |-- arrow-icon.js
|   |   |-- download-icon.js
|   |-- layout
|   |   |-- layout.js
|   |   |-- main-header.js
|   |   |-- main-header.module.css
|   |-- ui
|       |-- button.js
|       |-- button.module.css
|-- pages
|   |-- index.js // home页面
|   |-- _app.js 
|   |-- api
|   |   |-- hello.js
|   |-- events
|   |   |-- index.js // events页面
|   |   |-- index.module.css
|   |-- products
|   |   |-- index.js // getStaticProps(context)
|   |   |-- [pid].js // getStaticProps(context) 结合 getStaticPaths()
|   |-- router1 
|   |   |-- index.js // 一般路由
|   |-- router2
|   |   |-- index.js
|   |   |-- [id2]
|   |       |-- index.js // 一般动态路由-属性id2
|   |-- router3
|   |   |-- [...slug].js // 动态路由数组-属性-数组slug
|   |-- router4
|       |-- index.js
|       |-- [id4]
|           |-- index.js
|           |-- [...slug].js // 双层动态路由, 第一层属性id4, 第二层属性-数组slug
|           |-- [router4Inner].js // 双层一般动态路由-第一属性id4, 第二属性router4Inner
|-- public
|   |-- favicon.ico
|   |-- next.svg
|   |-- vercel.svg
|-- styles
|   |-- globals.css
```



## 2. 

```js
// fetch
	
fetch('https://mock.apifox.cn/m1/3421431-0-default/list-data')
    .then((response) => response.json())
    .then(data => {
      console.log('data', data)
    })
    
```





+ nextjs 默认预渲染所有没有动态数据的页面
+ []文件夹 或者 [].js 文件是动态的, 浏览器不会预先render (因为浏览器不知道要渲染多少页)
+ process.cwd() 指node工作的目录