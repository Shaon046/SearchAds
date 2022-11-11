import React from 'react'
import styles from './Grid.module.css'



const Grid = ({company,primaryText,headline,companyurl,description,image ,cta}) => {


  return (

<a href={`http://${companyurl}` }  style={{color:"black",textDecoration:"none"  }} target="_blank"  rel="noreferrer">
    <div  style={{width:"250px" ,height:400} } className={styles.griditem}  >

  <div  >

<img src={image} alt="logo" style={{height:"200px" ,width:200}}/></div>  


<div style={{TextAlign:"center"}}>{company}</div>

<div style={{fontSize:"14px"}}>{headline}</div>

<div style={{fontSize:"10px" }}>{primaryText}</div>

<button className={`${styles.button} ${styles.button2}`} style={{ marginTop:"20px " ,borderRadius:4}}>
  
  <a href={`http://${companyurl}` }  style={{color:"black",textDecoration:"none", }} target="_blank"  rel="noreferrer">{cta}</a>
  </button>





</div></a>
  )
}

export default Grid