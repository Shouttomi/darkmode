import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

//to use moment js in our own project 
//npm install moment --save

const getstoragetheme = ()=>{
  let theme = 'light-theme'

  if(localStorage.getItem('theme')){

    theme = localStorage.getItem('theme')
    console.log(theme)
  }

  return theme
}

function App() {

  const[theme,settheme] = useState(getstoragetheme())

  useEffect(()=>{
    //this document.documentElement is to get the html element
    //console.log(document.documentElement);
document.documentElement.className = theme
// now if whenever we change the theme we also want to change
//the value in local storage
//localStorage.setItem({the key you want to change},{value you want to change to})
localStorage.setItem('theme',theme)
  },[theme])


  const toggletheme = ()=>{

    if(theme === 'light-theme'){
      settheme('dark-theme')
    }
    else {
      settheme('light-theme')
    }
  }

  return <main>
    <nav>
      <div className="nav-center">
        <h1>overreacted</h1>
        <button className='btn' onClick={toggletheme}>MODE</button>
      </div>
    </nav>

    <section className="articles">
      {data.map((item)=>{
        return (<Article key = {item.id} {...item} />)
      })}
    </section>
  </main>
}

export default App
