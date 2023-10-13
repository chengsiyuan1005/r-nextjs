import { Fragment } from 'react';
import path from 'path';
import fs from 'fs/promises'

function PidPage (props) {

  const {loadProduct} = props

  // 针对 fallback === true 情况下 数据还未加载完
  if (!loadProduct) {
    return (
      <h2>loading...</h2>
    )
  }
  
  return (
    <Fragment>
      <h2>{loadProduct.title}</h2>
      <p>{loadProduct.content}</p>
    </Fragment>
  )
}

export async function getStaticProps (context) {
  const { params } = context;
  const productId = params.pid

  const filePath = path.join(process.cwd(), 'data', 'product', 'demo.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  const product = data.products.find(product => product.id === productId)

  console.log('product', product)
  
  return {
    props: {
      loadProduct: product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {pid: 'p1'}},
     
    ],
    // 如果设置fallback: false, 只会加载paths中指定的数据
    // 如果设置fallback: true, 即使数据没有预先保存在浏览器, 也会动态请求服务器进行加载
    // 如果设置fallback: 'blocking', 会等待数据加载完再render页面
    fallback: true, 
  }
}

export default PidPage;