import { useRouter } from 'next/router';
import { getFilterDate, getAllDate } from '../../helper/api-utils'

function DateSelectPage (props) {

  const { selectDate } = props


  return (
    <div>
      <h2>Date select page</h2>
      {
        selectDate.map(item => <li key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </li>)
      }
    </div>
  )
}

// 对于数据量较多的数据， 用 getServerSideProps 从服务器端获取 （用的时候再获取）
export async function getServerSideProps (context) {
  const { params } = context

  const slug = params.slug
  const year = slug[0]
  const month = slug[1]
  console.log(year, month)

  const selectDate = await getFilterDate(year, month)
  console.log('first', selectDate)

  if (selectDate === 500) return ({
    props: {
      selectDate: { status: 500, error: 'this is error' },
    },
    notFound: true // 展示404 not found
  })

  return {
    props: { selectDate }
  }
}


export default DateSelectPage;
