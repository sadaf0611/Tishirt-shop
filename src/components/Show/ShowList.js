import React from 'react'
import classes from './ShowList.module.css'
import Item from './Item'
const ShowList = (props) => {

  const tshirtList=props.tshirts.map((t)=>(
    <Item
      key={t.id}
      id={t.id}
      name={t.name}
      price={t.price}
      desc={t.desc}
      L={t.L}
      M={t.M}
      S={t.S}
    />
  ));
  return (
    <div className={classes.showcontainer}>
      <ul>{tshirtList}</ul>
    </div>
  )
}

export default ShowList
