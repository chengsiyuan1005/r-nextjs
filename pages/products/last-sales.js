import {useEffect, useState} from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function LastSalesPage(props) {
  const [sales, setSales] = useState()

  const {data, error, isLoading} = useSWR(
    '/api-mock/list-data', fetcher
  )

  useEffect(() => {
    console.log('first', isLoading)

  
    if (data) {
      console.log('data', data, isLoading)
      setSales(data)
      console.log('sales', sales) //useState是异步的

    }
  }, [data])

  if (error) {
    return <h2>Failed to load.</h2>
  }
  if (isLoading || !sales) {
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