import React from 'react'
import { Box } from '@mantine/core'
import { Link } from "react-router-dom";
import  styles  from '../styles/Header.module.scss'

type HeaderProps = {
  pageTitle?: string;
};


const Header: React.FC<HeaderProps> = ({
  pageTitle = 'Age of Empires Units',
}) => {
  return (
    <div>
      <Box 
        className={styles.headerBox}
      >
        <h1>{pageTitle}</h1>
        <div>
          <Link to="/" className={styles.headerLink}>
            Home
          </Link>
          <Link to="/units" className={styles.headerLink}>
            Units
          </Link>
        </div>
      </Box>
    </div>
  )
}


export default Header;
