

import React from 'react'
import Link from "next/link"
import styles from "./header.module.css"

const Header = () => {
  return (
    
      <div className={styles.container}>
      <h1 className={styles.heading}>HAIR OIL</h1>
      <ul className={styles.list}>
      <li>
        <Link className={styles.link} href="/">Home</Link>
      </li>
      <li>
        <Link className={styles.link} href="about">About</Link>
      </li>
      <li>
        <Link className={styles.link} href="contact us">Contact us</Link>

      </li>

      </ul>




      </div>
  )
}

export default Header
