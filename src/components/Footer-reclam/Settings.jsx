import React from 'react'
import c from "./Settings.css"

export const settings = () => {
  return (
    <div className='settings__box'>
      <div className='line'>
      </div>
        <div className='new__box'>
        <div className='img__site'>
          <img src="/static/media/logo.79a1dd45e47017ffa5da.png" alt="site-logo"  width={76} height={23}/>
        </div>

      <div className='buttons'>
        <select className='select__lang'>
          <option hidden><span className='goloball__img'></span> ENGLSH</option>
          <option>es</option>
          <option>Ru</option>
        </select>
         
         <button className='dollar__button'>
          <span>$</span>
          USD - U.S. Dollar  
         </button>

         <button className='button__eng'>
            <span>United States</span>
         </button>
      </div>
        </div>
    </div>
  )
}
export default settings