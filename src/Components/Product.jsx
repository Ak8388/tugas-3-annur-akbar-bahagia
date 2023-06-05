import React from 'react'
import "../App.css"

export default function Product(props) {
  function Click(){
    alert(`ID=${props.id}
          Nama=${props.name}
          Harga=${props.harga}`)
  }
  
  return (
      <div id='kotak' onClick={Click}>
          <img style={{width:100,height:100}} src={props.img} alt="" />
          <p>{props.name}</p>
          <p>{props.harga}</p>
      </div>
  )
}
