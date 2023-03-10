// import { Component} from "react";
import { useState } from 'react';
import './App.css';


// class App extends Component {

//   state = {
//     on : false,
//   }

//   handleChangeColor = () => {
//     this.setState({
//       on : !this.state.on,
//     })
//   }

 

//   render() {
//     return (
//       <div className="container">
//           <div className={this.state.on ? "light on" : "light"}></div>
//           <button onClick={this.handleChangeColor}>
//             change color
//           </button>
//       </div>
//     )
//   }


// }

// export default App;


function App() {

//  let tab = useState(false);
//  const on = tab[0];
//  const setOn = tab[1];


let [on, setOn] = useState(false);
  const handleChangeColor = () => {
    setOn(!on)
  }

  return  (
      <div className="container">
        <div className={on ? "light on" : "light"}></div>
          <button onClick={handleChangeColor}>
            change color
          </button>
       </div>
       )
}


export default App;
