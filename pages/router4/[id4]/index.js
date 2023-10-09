import { useRouter } from 'next/router'

function Router4IdPage() {
  const router = useRouter()
  console.log('router4 [id4] index : ', router.query)
  
  return (
    <div>
      <h2>router 4 id page</h2>
    </div>
  )
}

export default Router4IdPage