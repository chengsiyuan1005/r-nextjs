import Head from 'next/head' // html head 同样的， head可以用在各个页面

function HomePage () {
  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="introduce" content="this is a special meta"/>
      </Head>
      <h2>home page</h2>
    </div>
  )
}

export default HomePage