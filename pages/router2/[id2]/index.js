import { useRouter } from 'next/router';

function Router2IdPage() {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h2>router 2 id page:</h2>
      <p>this router 2 pathname is  {router.pathname}</p>
      <p>this id2 is {router.query.id2}</p>
    </div>
  )
}

export default Router2IdPage;