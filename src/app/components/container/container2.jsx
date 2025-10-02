'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import bilde from './bilde.png'
import meg1 from './meg1.png'
import Figur from './figur.png'


import Image from 'next/image'

function container2({byttContainer}) {




  return (
    <section id='container2' className='flex h-screen p-3 overflow-hidden gap-x-5'>
{/*VENSTE_DEL*/}
        <aside className='flex flex-col w-1/6 h-full bg-[#EEEAE3] rounded-lg'>
            <div className='w-40 h-40 rounded-full mt-3'>
              <Image src={meg1} alt='meg' className='w-40 h-40 rounded-full object-cover scale-80 '></Image>
            </div>
              <p className='font-mono ml-3 text-lg text-black'>Poul André Grevsen Røinaas</p>
              <p className='font-mono ml-3 text-black'>Søker etter utvikler jobb</p>
              
              <button onClick={() => byttContainer(1)} className='w-full h-10 mt-5 hover:bg-[#B0A99F]'>
                <p className='text-md font-mono text-left text-black ml-3 '>Home</p>
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

{/*HØYRE_DEL*/}
    <div className='flex flex-col flex-1 w-5/6 bg-[#EEEAE3] h-full rounded-lg' >
            
             
              <div className='w-full h-auto'>
                  <h1 className='text-2xl font-mono m-4 text-center text-black'>Om meg</h1>
              </div>

                <div className='flex flex-row h-full m-10'>
                  {/*Venstre side (Bilde)*/}
                  <div className='flex w-2/3 h-full justify-center items-center'>
                    <div className='flex w-90 h-130 bg-[#D1CAC2] rounded-lg border-2 border-black'>
                      {/*HER KOMMER BILDE*/ }
                      <Image src={Figur} alt='Figur' className='object-cover'></Image>
                    </div>
                  </div>
                  {/*Høyre side (Tekst)*/}
                  <div className='w-full h-full'>
                    <h2 className='text-xl font-mono mt-30 text-center text-black'>Så hvem er jeg?</h2>
                    <p className='text-lg font-mono mr-20 mt-10 text-left text-black'>Jeg heter Poul André Grevsen Røinaas, er 25 år gammel, og er født og oppvokst i Kristiansand, hvor jeg fortsatt er bosatt.
                    </p>
                    <p className='text-lg font-mono mr-20 mt-10 text-left text-black'>Jeg vil beskrive meg selv som en rolig type. Jeg bruker mye av fritiden min på å være aktiv og sosial. Jeg er veldig glad i trening, gaming, sosiale sammenkomster, lage musikk og spille frisbeegolf.</p>
                    <p className='text-lg font-mono mr-20 mt-10 text-left text-black'>
Som person på jobb er jeg strukturert, pliktoppfyllende. Jeg liker å gjøre ting ordentlig, og jeg trives best når jeg kan bidra til et godt arbeidsmiljø. Jeg er ikke den som roper høyest, men jeg er alltid til stede, tar ansvar og holder hodet kaldt selv når det er travelt.
For meg handler det både om å utvikle meg selv og om å skape trygghet og samarbeid rundt meg. Jeg tror at kombinasjonen av å være rolig, tilpasningsdyktig og målrettet er det som best beskriver meg både som person og som kollega.</p>  
                    
                  </div>

                </div>  

    </div>


    </section>

    
  )
}

export default container2
