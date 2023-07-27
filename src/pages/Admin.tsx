import React from 'react'
import{Link} from "react-router-dom"
const Admin = () => {
   const css1 = "display: flex"
  return (
    <div>
      ADAMIN
      <ul className={css1}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="product">List</Link></li>
        <li><Link to="product/1">Deltai</Link></li>
      </ul>
    </div>
  )
}

export default Admin
