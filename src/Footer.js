import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
  return (
    <div>
    <footer> {length}  List {length == 1 ?  "item" : length == 0 ? "item" : "items"}
      
    </footer>
    </div>
  )
}

export default Footer