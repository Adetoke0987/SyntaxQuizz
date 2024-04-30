import React from 'react'
import style from './login.module.css'

const Inputs = ({labelText, inputType,placeholderText, inputName, inputValue,inputfunc }) => {
  return (
    <div className={style.inputContainer}>
        <label className={style.inpTxt}>{labelText}</label>
     
        <input type={inputType} placeholder={placeholderText} name={inputName} value={inputValue} onChange={inputfunc} required/>
    </div>
  )
}

export default Inputs
