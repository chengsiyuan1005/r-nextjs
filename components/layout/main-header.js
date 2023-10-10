import Link from 'next/link'

import classes from './main-header.module.css'

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <div className={classes.toHome}>
        <Link href={'/'}>Home</Link>
      </div>
      <nav className={classes.toEvents}>
        <Link href={'/events'}>Events</Link>
      </nav>
    </header>
  )
}

export default MainHeader;