import { useRouter } from 'next/router'

function Router4SlugPage() {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
      <h2>router 4 ...slug</h2>
      <p>...slug of Object has two keys also, but the next key(slug) is an Array is  
        [{
          router.query.slug.map(item => <span key={item}>{item}, </span>)
        }]
      </p>
    </div>
  )
}

export default Router4SlugPage