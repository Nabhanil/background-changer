// without using useState
// const background = document.querySelector('body')
// background.style.transition = '2s'

// function App() {
  
//   const changeColorRed = ()=>{
    
//     background.style.backgroundColor = 'red'
//     background.style.color = 'white'
    
//   }
//   const changeColorBlue = ()=>{
    
//     background.style.backgroundColor = 'blue'
//     background.style.color = 'white'

//   }
//   const changeColorGreen = ()=>{
    
//     background.style.backgroundColor = 'green'
//     background.style.color = 'white'

//   }
//   const changeColorPink = ()=>{
    
//     background.style.backgroundColor = 'pink'
//     background.style.color = 'black'

//   }
//   const changeColorYellow = ()=>{
    
//     background.style.backgroundColor = 'yellow'
//     background.style.color = 'black'

//   }
//   const changeColorWhite = ()=>{
    
//     background.style.backgroundColor = 'white'
//     background.style.color = 'black'

//   }
//   const changeColorBlack = ()=>{
    
//     background.style.backgroundColor = 'black'
//     background.style.color = 'white'

    
//   }
//   const changeColorPurple = ()=>{
    
//     background.style.backgroundColor = 'purple'
//     background.style.color = 'white'

//   }

  
//   return (
//     <>
//       <h1>change the background</h1>
//       <div className="container">
//         <button id="red" onClick={changeColorRed}>Red</button>
//         <button id="green" onClick={changeColorGreen}>Green</button>
//         <button id="yellow" onClick={changeColorYellow}>Yellow</button>
//         <button id="white" onClick={changeColorWhite}>White</button>
//         <button id="black" onClick={changeColorBlack}>Black</button>
//         <button id="blue" onClick={changeColorBlue}>Blue</button>
//         <button id="pink" onClick={changeColorPink}>Pink</button>
//         <button id="purple" onClick={changeColorPurple}>purple</button>
//       </div>
//     </>
//   )
// }

// export default App

// Using UseStates

import { useState } from "react";

function App(){
    const background = document.querySelector('body')
    let [color,setColor] = useState("baige")
    background.style.backgroundColor = color
    background.style.transition = '2s'

    return(
        <>
       <h1>change the background</h1>
       <div className="container">
         <button id="red" onClick={()=>setColor('red')}>Red</button>
         <button id="green" onClick={()=>setColor('green')}>Green</button>
         <button id="yellow" onClick={()=>setColor('yellow')}>Yellow</button>
         <button id="white" onClick={()=>setColor('white')}>White</button>
         <button id="black" onClick={()=>setColor('black')}>Black</button>
         <button id="blue" onClick={()=>setColor('blue')}>Blue</button>
         <button id="pink" onClick={()=>setColor('pink')}>Pink</button>
         <button id="purple" onClick={()=>setColor('purple')}>purple</button>
         <button id="lavender" onClick={()=>setColor('lavender')}>Lavender</button>
         <button id="olive" onClick={()=>setColor('olive')}>olive</button>
       </div>
    </>
    )
}

export default App;