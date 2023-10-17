import {useEffect, useState} from 'react';
import useSWR from 'swr';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales)

  const {data, error, isLoading} = useSWR(
    '/api-mock/list-data', fetcher
  )

  useEffect(() => {
    if (data) {
      setSales(data)
    }
  }, [data])

  if (error) {
    return <h2>Failed to load.</h2>
  }
  // if (isLoading || !sales) {
  //   return <h2>Loading...</h2>
  // }

  if (isLoading && !sales) { // sales 预加载， 不存在为空
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>last-sales</h2>
      <ul>
        {
          sales.map(item => <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <img src={item.image} alt="" />
            </li>)
        }
      </ul>
    </div>
  )
}

export default LastSalesPage;

// 预加载
export async function getStaticProps() {

  const response = await fetch('https://mock.apifox.cn/m1/3421431-0-default/list-data')
  const data = await response.json()

  return {props: {sales: data}, revalidate: 30}
}