import React from 'react'
import './App.css';
import ToggleSwitchButton from './ToggleSwitchButton'
import { useEffect, useState } from 'react';
import { useCallback, useRef } from 'react';
import './style.css'



const App = () => {
  const checkboxElement = useRef(null)
  const handleChange = useCallback(e => {
        const btn = e.target
        const body = document.body

        if(btn.checked === true) {
            body.classList.add("dark-theme")
        }else{
            body.classList.remove("dark-theme")
        }
  })
  /*
  const [isToggle, setIsToggle] = useState(false)


    const handleChange = useCallback(() => {
          if(isToggle) {
              setIsToggle(false)
          }else{
              setIsToggle(true)
          }
    }, [isToggle])


    useEffect(() => {
      if(isToggle) {
          alert('switch on!')
      }else{
          alert('switch off!')
      }
    }, [isToggle]) */


    return (
          <div>
            <header className="header">
            <ToggleSwitchButton 
                className="toggle-switch-button" 
                handleChange={handleChange}
                ref={checkboxElement}
                offColor="#ccc"
                onColor="#f0ffff"
                size="1em"
            />
            </header>
          <div className="container">
              <div>example</div>
          </div>
          </div>
     /* <div>
          <header className="header">
            <div>LOGO</div>
            <ToggleSwitchButton
                className="toggle-switch-button"
                offColor="#ccc"
                onColor="#383896"
                size="1em"
            />
          </header>
          <div className="container">
              <div>example</div>
          </div>
      </div> */
    );
};

export default App;
