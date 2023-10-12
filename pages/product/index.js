import path from 'path';
import fs from 'fs/promises'

function ProductPage(props) {
  const {products} = props;

  return (
    <ul>
      {products.map(product => <li key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.content}</p>
        </li>)}
    </ul>
  )
}

// getStaticProps 是运行在服务器端而非浏览器端
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'product', 'demo.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  console.log('(Re-)Generating...')

  return {
    props: {
      products: data.products
    },
    revalidate: 300, // 增量静态生成 时间 s 开发环境无效
  }
}

export default ProductPage;