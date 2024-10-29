//5강 실습
// import React from "react";
// import ProductPage from "./components/Counter";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;

//7강 실습
// import React from 'react';
// import { useState } from "react";

// export default function App() {

//   //number
//   const [num, setNum] = useState(0);

//   //string
//   const [name, setName] = useState('');

//   //boolean
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <div>
//       <input
//       type="number"
//       value={num}
//       onChange={(e) => setNum(e.target.value)}
//       />
//       <input
//       type='text'
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       />
//       <div>
//         <input
//         type='checkbox'
//         value={isChecked}
//         onChange={(e) => setIsChecked(e.target.checked)}
//         />
//         {isChecked ? <span>체크됨</span> : <span>체크안됨</span>}
//       </div>
//     </div>
//   )
// }

//8강 실습
import List from "./List";

export default function App() {
  return (
    <div>
      <List />
    </div>
  );
}
