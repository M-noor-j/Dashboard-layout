import React from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
const Button = ({label}) => {
  return (
    <>
    <div className='container'>
    <button type="button" class="btn text-white" style={{background:"#033e8a"}}><IoPersonAddSharp className='mb-1 me-2'/>{label}</button>
 
    </div>
    </>
  )
}

export default Button