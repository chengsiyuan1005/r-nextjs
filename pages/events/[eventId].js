import { getListData, getByIdListData } from '../../helper/api-utils'

function EventIdPage (props) {
  const { selectedEvent } = props

  if (!selectedEvent) {
    return (
      <div>
        <h3>no data...</h3>
      </div>
    )
  }

  return (
    <div>
      <h2>EventId page</h2>
      <div>
        <h4>{selectedEvent.title}</h4>
        <img src={selectedEvent.image} alt="" />
        <p>{selectedEvent.description}</p>
      </div>
    </div>
  )
}

export default EventIdPage;


export async function getStaticProps (context) {
  const eventId = context.params.eventId;
  const selectedEvent = await getByIdListData(eventId)

  return {
    props: {
      selectedEvent,
      revalidate: 30
    }
  }
}

export async function getStaticPaths () {
  const tempWait = await getListData()

  let paths = tempWait.map(item => ({ params: { eventId: item.id } }))

  // const paths = getListData.map(item => {params: {eventId: item.id}})
  // console.log('paths', paths)
  // return {
  //   paths,
  //   fallback: true
  // }

  return {
    paths,
    fallback: true,
  }
}

