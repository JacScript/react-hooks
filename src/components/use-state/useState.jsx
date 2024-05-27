import React, { useState } from 'react';

import Card from '../card/card.component';




const UseStateExample = () => {
    const [name, setName] = useState("Jackson")
    const [address, setAddress] = useState('Mbeya');
  const [school, setSchool] = useState('UNI Mbeya');
  const [place, setPlace] = useState("Geto");

  return (
    <Card>
      <h1>{name}</h1>
      {/* <button onClick={() => setName('Silas')}>Set Name</button> */}
      <button onClick={() => setName('Makumbati')}>Set Name</button>
      <h2>{address}</h2>
      <button onClick={()=> setAddress('Iyunga')}>Set Address</button>
      <h1>{school}</h1> 
      <h1>{place}</h1>
      <button onClick={() => setSchool('MUST')}>Set School</button>
      <button onClick={()=> setPlace('Hostel')}>Set School</button>
    </Card>
  );
};



export default UseStateExample;

// export class StateClassComponent extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       name: 'Yihua',
//       address: 'Canada'
//     };
//   }

//   render() {
//     return (
//       <Card>
//         <h1> {this.state.name} </h1>
//         <button onClick={this.setState({ name: 'Andrei' })}>
//           Set Name to Andrei
//         </button>
//         <button onClick={this.setState({ address: 'Amsterdam' })}>
//           Set Address
//         </button>
//       </Card>
//     );
//   }
// }
