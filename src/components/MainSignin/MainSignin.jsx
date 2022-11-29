import React from 'react'
import { Link } from "react-router-dom";
import c from "./main-end.css";

const MainSignin = (  ) => {
  return (
    <div className='end__section'>
          <div className='section__box'>
            <div className='top__text'>
            <span>See personalized recommendations</span>
            </div>
            <span className='action__inner' witdh="50">Sign in</span>
            <div className='bootom__text'>
            <span>New customer? <a className='link__acount' href="/signin">Start here.</a></span>
            </div>
           </div>
    </div>
  )
}

export default MainSignin