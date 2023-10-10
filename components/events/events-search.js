import { useRef, useState } from 'react'
import Button from '../ui/button'
import classes from './events-search.module.css'

function EventsSearch (props) {
  const [yearList, setYearList] = useState(['2023', '2022', '2021', '2020', '2019', '2018'])
  const [monthList, setMonthList] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])

  
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault();

    const selectYear = yearInputRef.current.value
    const selectMonth = monthInputRef.current.value

    props.onSearch(selectYear, selectMonth) 
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">year</label>
          <select name="" id="year" ref={yearInputRef}>
            {
              yearList.map(item => <option key={item} value={item}>{item}</option>)
            }
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">month</label>
          <select name="" id="month" ref={monthInputRef}>
            {
              monthList.map((item, index) => <option key={item} value={index + 1}>{item}</option>)
            }
          </select>
        </div>
      </div>
      <Button>Pick</Button>
    </form>
  )
}

export default EventsSearch;