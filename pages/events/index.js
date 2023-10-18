import { useRouter } from 'next/router';

import { ArrowUpIcon, ArrowRightIcon } from '../../components/icons/arrow-icon'

import EventsSearch from '@/components/events/events-search';

import classes from './index.module.css'

function EventsPage () {
  const router = useRouter()

  const eventSearchHandler = (year, month) => {
    console.log('this year and month', year, month)

    router.push(`/events/${year}/${month}`)
    
  }
  
  return (
    <div className={classes.eventsPage}>
      <h2 className={classes.title}>events page</h2>
      <div className={classes.icons}>
        <span>
          <ArrowUpIcon></ArrowUpIcon>
        </span>
        <span>
          <ArrowRightIcon></ArrowRightIcon>
        </span>
      </div>
      <EventsSearch onSearch={eventSearchHandler}/>
    </div>
  )
}

export default EventsPage;