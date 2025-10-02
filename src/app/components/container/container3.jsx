'use client'
import React, { useEffect, useState } from 'react'


import meg1 from './meg1.png'
import Pil from './pil.png'


import Image from 'next/image'

function container3({byttContainer}) {

   const [valgtProsjekt, setValgtProsjekt] = useState(0);
  
    const prosjekt = [
    {tittel: 'Kalkulator', innhold1: 'Dette er en kalkulator-app jeg har laget, som skal etterligne apple sin.', innhold2: 'Kodet i JavaScript', link: 'https://poulandre.github.io/Kalkulator/'},
    {tittel: 'Quiz', innhold1: 'Dette er en QUIZ-app jeg har laget. Her har jeg blitt inspirert selv.', innhold2:'Test din allmennkunnskap på min quiz, UTEN å GOOGLE', link: 'https://poulandre.github.io/quiz-app/'},
    {tittel: 'Huskespill', innhold1: 'Dette er et huskespill-app jeg holder på å lage.', innhold2:'Sjekk om hukommelsen sitter! - Når den er ferdig', link: 'https://www.youtube.com/'}
  ]

 function prosjektLink() {
  if(valgtProsjekt){
    return <a className='text-lg font-mono text-black' href={valgtProsjekt.link}>Åpne prosjekt</a>
  } else {
    return ;
  }
 }




  
  return (
    <section id='container2' className='flex h-screen p-3 overflow-hidden gap-x-5'>
{/*VENSTE_DEL*/}
        <aside className='flex flex-col f w-1/6 h-full bg-[#EEEAE3] rounded-lg'>
            <div className='w-40 h-40 rounded-full mt-3'>
              
              <Image src={meg1} alt='meg' className='w-40 h-40 rounded-full object-cover scale-80 '/>
           
            </div>
              <p className='font-mono ml-3 text-lg text-black'>Poul André Grevsen Røinaas</p>
              <p className='font-mono ml-3 text-black'>Søker etter utvikler jobb</p>
              
              <button onClick={() => byttContainer(1)} className='w-full h-10 mt-5 hover:bg-[#B0A99F]'>
                <p className='text-md font-mono text-left text-black ml-3'>Home</p>
              </button>

              <button onClick={() => byttContainer(2)} className='w-full h-10 hover:bg-[#B0A99F]'>
                  <p className='text-md font-mono text-left text-black ml-3'>Om meg</p>
              </button>
              
              <button onClick={() => byttContainer(3)} className='w-full h-10 hover:bg-[#B0A99F]'>
                <p className='text-md font-mono text-left text-black ml-3'>Prosjekter</p>
              </button>
            
            <div className='mt-auto w-auto h-auto'>
              <p className='text-xs font-mono text-left text-neutral-400 ml-3'>© 2025 Poul André Grevsen Røinaas</p>
              <p className='text-xs font-mono text-left text-neutral-400 ml-3'> - alle rettigheter forbeholdt</p>
              <p className='text-xs font-mono text-left text-neutral-300 ml-3'>Inspirert av design på Dribbble.com</p>
            </div>
            
        </aside>

{/*MIDT_DEL*/}
          <div className='flex flex-col flex-1 w-5/6 bg-[#EEEAE3] h-full rounded-lg pl-10 pr-10' >
                      
                       
                        <div className='w-full h-auto'>
                            <h1 className='text-2xl font-mono m-4 text-center text-black'>Prosjekter</h1>
                        </div>
                          {/*HER ER PROSJEKT_VISNING*/}
                         <div className='flex flex-row w-auto h-1/4 rounded-lg items-center gap-x-5'>
                          {/*Pil VENSTRE*/} 
                            
                            {/*<Image src={Pil} alt='Venstre' className='w-12 h-12 rotate-180 ml-4 opacity-45 hover:opacity-100'/>*/}
                            
                            
                            <div className='flex w-full h-full items-center justify-center gap-x-10'>
                                <ul className='flex flex-row gap-x-20' >
                                  <li className='flex flex-col items-center justify-center w-80 h-50 bg-[#D1CAC2] rounded-lg gap-y-8'>
                                    <p className='text-xl font-mono text-black text-center'>Kalkulator</p>
                                    <button onClick ={() => setValgtProsjekt(prosjekt[0])} className='w-20 h-10 bg-[#fff] hover:bg-[#e7e7e7] rounded-lg hover'>
                                      <p className='text-ms font-mono text-black m-1 text-center'>Les Mer</p>
                                      </button>
                                  </li>
                              <li className='flex flex-col items-center justify-center w-80 h-50 bg-[#D1CAC2] rounded-lg gap-y-8'>
                                    <p className='text-xl font-mono text-black m-2 text-center'>Quiz</p>
                                    <button onClick ={() => setValgtProsjekt(prosjekt[1])} className='w-20 h-10 bg-[#fff] hover:bg-[#e7e7e7] rounded-lg hover'>
                                      <p className='text-ms font-mono text-black m-1 text-center'>Les Mer</p>
                                      </button>
                                  </li>
                              <li className='flex flex-col items-center justify-center w-80 h-50 bg-[#D1CAC2] rounded-lg gap-y-8'>
                                    <p className='text-xl font-mono text-black m-2 text-center'>Huskespill</p>
                                    <button onClick ={() => setValgtProsjekt(prosjekt[2])} className='w-20 h-10 bg-[#fff] hover:bg-[#e7e7e7] rounded-lg hover'>
                                      <p className='text-ms font-mono text-black m-1 text-center'>Les Mer</p>
                                      </button>
                                  </li>
                                </ul>
                            </div>
                          {/*Pil HØYRE*/} 
                            
                            {/*<Image src={Pil} alt='Pil Venstre' className='w-12 h-12 rotate-0 mr-4 opacity-45 hover:opacity-100'></Image>*/}
                            
                         </div>  

                      {/*HER ER OVERSKRIFT TIL PROSJEKT BESKRIVELSE*/}
                          <div className='w-auto h-auto mb-1 mt-20 bg-[#EEEAE3] rounded-lg'>
                            <h2 className='text-xl font-mono text-[#B0A99F] text-left m-2'>Prosjekt-Beskrivelse</h2>
                          </div>
                       {/*HER ER BESKRIVELSE AV VALGT PROSJEKT*/} 
                        <div className='flex flex-col w-auto h-1/2 m-1 bg-[#D1CAC2] rounded-lg'>
                          

                          <div className='flex flex-col w-auto h-auto m-4 rounded-lg gap-y-20'>
                            <p className='text-lg font-mono text-black'>{valgtProsjekt.tittel}</p>

                              <div className='w-2/3 h-50'>
                                <p className='text-lg font-mono text-black'>{valgtProsjekt.innhold1}</p>
                                <p className='text-lg font-mono text-black'>{valgtProsjekt.innhold2}</p>
                              </div>
                                <div className='w-2/3 h-10 justify-center text-center'>
                                  {prosjektLink()}
                                </div> 
                          </div>
                        </div>
          
              </div>


    </section>

    
  )
}

export default container3
