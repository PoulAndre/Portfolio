'use client'
import React from 'react';
import {useState} from 'react'
import Container1 from './components/container/container1.jsx';
import Container2 from './components/container/container2.jsx';
import Container3 from './components/container/container3.jsx';


export default function Home() {
  const [valgtContainer, setValgtContainer] = useState(1)

  function byttContainer(nr) {
    setValgtContainer(nr);
  }
  let innhold;
  switch(valgtContainer) {
    case 1: innhold = <Container1 byttContainer={byttContainer}/>
    break;
    case 2: innhold = <Container2 byttContainer={byttContainer}/>
    break;
    case 3: innhold = <Container3 byttContainer={byttContainer}/>
    break;
  }

  return (
    
      <div className=''>

        {innhold}
      </div>

  );
}

