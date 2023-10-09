import { useRouter } from 'next/router';

function Router3Page() {
  const router = useRouter()
  console.log(router.query)
  
  return (
    <div>
    <h2>router 3 page</h2>
    <p>router 3 query is {
      router.query.slug.map(item => <span key={item}>{item} </span>)
    }</p>
    </div>
  )
}

export default Router3Page;