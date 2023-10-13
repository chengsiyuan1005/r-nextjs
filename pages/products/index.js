import path from 'path';
import fs from 'fs/promises'
import Link from 'next/link';

function ProductPage (props) {
  const { products } = props;

  return (
    <ul>
      {products.map(product => <li key={product.id}>
        <Link href={`/products/${product.id}`}>
          <h4>{product.title}</h4>
        </Link>
        <p>{product.content}</p>
      </li>)}
    </ul>
  )
}

// getStaticProps 是运行在服务器端而非浏览器端
export async function getStaticProps (context) {
  const filePath = path.join(process.cwd(), 'data', 'product', 'demo.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  console.log('(Re-)Generating...')

  if (!data) {
    return {
      redirect: {
        destination: '/no-data' // 去往no-data路由
      }
    }
  }

  if (data.products.length === 0) {
    return { noFound: true }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 300, // 增量静态生成 时间 s 开发环境无效
    // notFound: true, // notFound 设置为 true, 显示 404 not Found
  }
}

export default ProductPage;
