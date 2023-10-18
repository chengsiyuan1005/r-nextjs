import { useRef, useState } from 'react'
import Button from '../ui/button'
import classes from './events-search.module.css'

function EventsSearch (props) {
  const [yearList, setYearList] = useState(['2023', '2022', '2021', '2020', '2019', '2018'])
  const [monthList, setMonthList] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])

  
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