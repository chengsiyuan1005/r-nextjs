import { useRouter } from 'next/router';

function Router4InnerPage() {
  const router = useRouter()
  console.log('router 4 page inner: ', router.query)
  
  return (
    <div>
      <h2>router 4 page inner</h2>
      <p>router 4 page inner is two layers, the first layer key is id4, the second layer is router4Inner</p>
      <p>this object has two keys, id4 & router4Inner</p>
    </div>
  )
}

export default Router4InnerPage;