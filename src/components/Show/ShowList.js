import React from 'react'
import classes from './ShowList.module.css'
const ShowList = (props) => {
  return (
    <div className={classes.showcontainer}>
      <ul>
        {props.tshirts.map((t)=>(
            <li key={t.id}>
                <div className={classes.line}>
                    <div>
                        <h2>{t.name}</h2>

                        <h5>₹{t.price}</h5>
                        <label> {t.desc}</label>
                         
                    </div>
                    <div>
                        <button className="btn btn-dark">{t.L}</button>
                        <button className="btn btn-dark">{t.M}</button>
                        <button className="btn btn-dark">{t.S}</button>
                    </div>
                </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowList
