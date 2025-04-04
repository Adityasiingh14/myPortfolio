import { useGSAP } from '@gsap/react'
import './App.css'
import Header from './components/Header'
import Page1 from './pages/Page1'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import Page2 from './pages/Page2'
import LastPage from './pages/LastPage'
import Page3 from './pages/Page3'


function App() {
  const loaderRef = useRef(null);
  
  // const phushhSound = useRef(null);

  // useEffect(() => {
  //   phushhSound.current = new Audio("/push.mp3"); // Load sound
  // }, []);
  
  // useGSAP(() => {
  //     const timeline = gsap.timeline({
  //       onStart: () => {
  //         document.body.style.overflow = 'hidden'; // Disable scrolling
  //       },
  //       onComplete: () => {
  //         document.body.style.overflow = 'auto'; // Restore scrolling after animation
  //       }
  //     });

  //     timeline.to(loaderRef.current, {
  //       y: '100vh',
  //       scale: 0.6,
  //       duration: 0
  //     })
      
  //     timeline.to(loaderRef.current, {
  //       y: '40vh',
  //       duration: 1,
  //       delay: 1,
  //       ease: 'power2.out'
  //     })
  //     timeline.to('#hello', {
  //       y: '-100vh',
  //       duration: 1,
  //       // delay: 1,
  //       ease: 'elastic.out'
  //     })
  //     timeline.to(loaderRef.current, {
  //       y: '0vh',
  //       duration: 1,
  //       scale:1,
  //       // rotate: 360,
  //       onStart: () => phushhSound.current?.play(), // Play sound correctly
  //       ease: 'back.out',
  //       overflowY: 'hidden'
  //     }, '<')
  // })

  return (
    <>
    <div>
      <h1 id='hello' className='fixed text-black flex items-center justify-center w-[100vw] h-[100vh] text-9xl font-[anzo] -z-10'>Hello World!</h1>
      {/* <div className="fixed bottom-10 right-10 text-sm opacity-50 -z-10">
        Interact with the page to enable sound
      </div> */}
    </div>


    <div ref={loaderRef} className='text-white font-[anzo2] overflow-x-hidden'>
      <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
      <LastPage/>
    </div>
    </>
  )
}

export default App
