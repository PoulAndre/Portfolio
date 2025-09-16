'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import bilde from './bilde.png'
import meg1 from './meg1.png'
import blink from './blink.png'
import prosjekt from './prosjekt.png'
import css from './css.png'
import figma from './figma.png'
import firebase from './firebase.png'
import git from './git.png'
import github from './github.png'
import html from './html.png'
import java from './java.png'
import javascript from './javascript.png'
import linkedin from './linkedin.png'
import mongodb from './mongodb.png'
import mysql from './mysql.png'
import powershell from './powershell.png'
import react from './react.png'
import sql from './sql.png'
import tailwind from './tailwind.png'

import Image from 'next/image'

function container1({byttContainer}) {

 const nåDagensDato = new Date().toLocaleDateString('no-NO', {weekday: 'long', day: 'numeric', month: 'long'})
  const dagensDato = nåDagensDato;


const ferdigheter = [
  {navn: 'css', bilde: css },
  {navn: 'figma', bilde: figma },
  {navn: 'firebase', bilde: firebase },
  {navn: 'git', bilde: git },
  {navn: 'java', bilde: java },
  {navn: 'javascript', bilde: javascript },
  {navn: 'mongodb', bilde: mongodb },
  {navn: 'mysql', bilde: mysql },
  {navn: 'powershell', bilde: powershell },
  {navn: 'react', bilde: react },
  {navn: 'sql', bilde: sql },
  {navn: 'tailwind', bilde: tailwind },
  {navn: 'HTML', bilde: html },
  {navn: 'github', bilde: github },
]

// Endrende tekst (Typewriter)
const words = ["Velkommen til min Portfolioside!", "Utforsk siden min!", "Alltid nysgjerrig på å lære mer innen webutvikling!"]

const [currentWord, setCurrentWord] = useState("")
const [isDeleting, setIsDeleting] = useState(false)
const [wordIndex, setWordIndex] = useState(0)
const [charIndex, setCharIndex] = useState(0)
const hastighet = isDeleting ? 30 : 70

useEffect(() => {
  const type = () => {
    const fullWord = words[wordIndex]

    if (isDeleting) {
      setCurrentWord(fullWord.substring(0, charIndex - 1))
      setCharIndex(prev => prev - 1)

      if (charIndex === 0) {
        setIsDeleting(false)
        setWordIndex(prev => (prev + 1) % words.length)
      }
    } else {
      setCurrentWord(fullWord.substring(0, charIndex + 1))
      setCharIndex(prev => prev + 1)

      if (charIndex === fullWord.length) {
        setTimeout(() => setIsDeleting(true), 1000)
        return
      }
    }
  }

  const timer = setTimeout(type, hastighet)

  return () => clearTimeout(timer)
}, [charIndex, isDeleting, wordIndex])

const [repoTeller, setRepoTeller] = useState(0);

useEffect(() =>  {
  async function fetchRepos() {
    try {
      const res = await fetch('https://api.github.com/users/poulAndre');
      const data = await res.json()
      setRepoTeller(data.public_repos)
    } catch(error) {
      console.log("Kunne ikke hente repo antall", error);
    }
  }
  fetchRepos()
}, []);




  return (
    <section id='container1' className='flex h-screen p-3 overflow-hidden gap-x-5'>
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

{/*MIDT_DEL*/}
          <div className='flex flex-col flex-1 w-3/6 space-y-3'>
            <div className='relative w-auto h-auto justify-center rounded-lg'>
              <Image src={bilde} alt='bilde' quality={100} className='w-full h-130 object-cover rounded-lg'/>
              <p className='absolute top-5 left-5 text-2xl font-bold text-[#EEEAE3] font-mono capitalize'>{dagensDato}</p>
              <h1 id='typewriter' className='absolute bottom-5 left-5 text-2xl font-bold font-mono text-[#EEEAE3] center'>{currentWord}</h1>
            </div>
            
            {/*HER ER INFO UNDER BILDE*/}
              <div className='w-full h-auto bg-[#EEEAE3] rounded-lg mt-3'>
                <p className='text-2xl font-mono m-4 text-black '>Karriere</p>
                  <div className='flex flex-col-1 justify-between space-x-5 w-auto m-4 item'>
                    
                    <div className='w-full h-auto rounded-lg bg-[#D1CAC2]'>
                      <p className='text-xl text-black font-bold font-mono text-left pt-1 pl-3 underline'>Erfaring</p>
                        <div className='flex items-center space-x-19'>
                          <ul className='flex flex-wrap justify-center'>
                          <Image src={blink} alt='blink' className='w-20 h-auto ml-3'/>
                          <p className='text-xl text-black font-mono font-bold ml-8 mt-5'>6 mnd</p>
                          </ul>
                        </div>  
                    </div>

                    <div className='w-full h-30 rounded-lg bg-[#D1CAC2]'>
                      <p className='text-xl text-black font-bold font-mono text-left pt-1 pl-3 underline'>Prosjekter</p>
                        <div className='flex items-center space-x-19'>
                          <ul className='flex flex-wrap justify-center'>
                            <Image src={prosjekt} alt='prosjekt' className='w-20 h-auto ml-3'/>
                            <p className='text-xl text-black font-mono font-bold ml-8 mt-5'>{repoTeller} stk</p>
                          </ul>
                        </div>
                    </div>

                    <div className='w-full h-30 rounded-lg bg-[#D1CAC2]'>
                      <p className='text-xl text-black font-bold font-mono text-left pt-1 pl-3 underline'>Verktøy & Språk</p>
                      <div className='flex items-center space-x-19 '>
                        <ul className='flex flex-wrap justify-center'>
                          <Image src={blink} alt='blink' className='w-20 h-auto ml-3'/>
                          <p className='text-xl text-black font-mono font-bold ml-8 mt-5'>14 stk</p>
                          </ul>
                        </div>
                    </div>

                    <div className='w-full h-30 rounded-lg bg-[#D1CAC2]'>
                      <p className='text-xl text-black font-bold font-mono text-left pt-1 pl-3 underline'>Noe her</p>
                        <div className='flex items-center space-x-19'>
                          <ul className='flex flex-wrap justify-center'>
                            <Image src={prosjekt} alt='prosjekt' className='w-20 h-auto ml-3'/>
                            <p className='text-xl text-black font-mono font-bold ml-8 mt-5'>{repoTeller} stk</p>
                          </ul>
                        </div>
                    </div>

                  </div>
              </div>
            
            <div className='flex flex-row w-full h-full rounded-lg mt-3 space-x-5'>
              <div className='w-full h-auto bg-[#EEEAE3] rounded-lg'>
                <p className='text-2xl font-mono m-4 text-left text-black'>Kontakt meg</p>
                  <p className='text-xl font-mono ml-4 text-left text-black'>Tlf: 95963049</p>
                  <p className='text-xl font-mono ml-4 text-left text-black'>Mail: poul.a@hotmail.no</p>
              </div>

              <div className='w-full h-auto bg-[#EEEAE3] rounded-lg'>
                <p className='text-2xl font-mono m-4 text-left text-black'>Mine profiler</p>
                  <div className='flex justify-center w-auto h-auto'>
                    <ul className='space-x-15'>
                      <button className='text-2xl font-mono text-black'>
                        <a href='https://github.com/PoulAndre'>
                          <Image src={github} alt={github} className='w-12 h-12 bg-gradient-to-br from-[#978f82] to-[#ffffff] rounded-full border-0.5'></Image>
                        </a>
                      </button>
                      <button className='text-2xl font-mono text-black'>
                        <a href='https://www.linkedin.com/in/poul-andr%C3%A9-grevsen-r%C3%B8inaas-174b41345/'>
                          <Image src={linkedin} alt={github} className='w-12 h-12 bg-gradient-to-br from-[#978f82] to-[#ffffff] rounded-full border-0.5'></Image>
                        </a>
                      </button>
                    </ul>
                  </div>
              </div>
            </div>

          </div>


{/*HØYDRE_DEL*/}
            <div className='flex flex-col w-2/6 h-max space-y-3 rounded-lg'>
              <div className='w-auto h-73 bg-[#EEEAE3] rounded-lg'>
                <p className='text-xl font-mono text-center pt-3 text-black'>Kort om meg</p>
                <p className='text-md font-mono text-left pt-3 text-black p-3'>Hei! Mitt navn er Poul André Grevsen Røinaas, og er 25 år gammel, født og oppvokst i Kristiansand.</p>
                <p className='text-md font-mono text-left pt-3 text-black p-3'>Jeg har en bachelorgrad i It og informasjonssystemer ved Universitet i Sørøst Norge, Bø.</p>
                <p className='text-md font-mono text-left pt-3 text-black p-3'>Jeg er arbeidsom, liker utfordringer i hverdagen og veldig interessert i å vidreutvikle kunnskapen min innen utvikling. </p>
                  
              </div>
              
              <div className='w-auto h-70 bg-[#EEEAE3] rounded-lg mt-3'>
                <p className='text-xl font-mono text-center pt-3 text-black'>Ferdigheter</p>

                  <div className='grid grid-cols-3 gap-4 sm:grid-cols-5 p-4 place-items-center'>
                    {ferdigheter.map((ferdigheter, index) => (
                      <div key={index} className='flex flex-col items-center group'>
                        <div className='w-12 h-12 relative'> 
                          <Image src={ferdigheter.bilde} alt={ferdigheter.navn} fill className='animate-pulse delay-500 rounded-lg hover:animate-bounce object-contain'/>
                        </div>
                  </div>
                    ))}
              </div>

              </div>
                  
              
              <div className='w-auto h-75 bg-[#EEEAE3] rounded-lg mt-3'>
                <p className='text-xl font-mono text-center pt-3 text-black'>Hva jeg lærer nå</p>
                    <div className='flex flex-col w-auto h-auto m-3'>
                        <p className='text-md font-mono text-left pt-3 text-black p-3'>Jeg fokuserer for tiden på å forbedre mine ferdigheter i Javascript med fokus innen Frontend-utvikling, og generell forbedring i Frontend. Jeg tester meg selv med små prosjekter, hvor jeg bruker React, Next.js og TailwindCss. Målet mitt er å kunne forbedre meg kontinuerlig, slik at jeg kan bygge en solid forståelse for 
                  hvordan jeg kan utvikle responsive og brukervennelige løsninger.</p>
                    </div>
              </div>

            </div>

    </section>

    
  )
}

export default container1
