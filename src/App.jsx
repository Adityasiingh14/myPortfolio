import { useGSAP } from '@gsap/react'
import './App.css'
import Header from './components/Header'
import Page1 from './pages/Page1'
import gsap from 'gsap'
import { useRef } from 'react'
import Page2 from './pages/Page2'


function App() {
  const loaderRef = useRef(null)
  useGSAP(() => {
      const timeline = gsap.timeline({
        onStart: () => {
          document.body.style.overflow = 'hidden'; // Disable scrolling
        },
        onComplete: () => {
          document.body.style.overflow = 'auto'; // Restore scrolling after animation
        }
      });

      timeline.to(loaderRef.current, {
        y: '100vh',
        scale: 0.6,
        duration: 0
      })
      timeline.to('#hello', {
        y: '-8vh',
        duration: 1,
        delay: 1,
        ease: 'power2.out'
      })
      timeline.to(loaderRef.current, {
        y: '30vh',
        duration: 1,
        ease: 'power2.out'
      })
      timeline.to(loaderRef.current, {
        y: '0vh',
        duration: 3,
        delay:1,
        scale:1,
        rotate: 360,
        ease: 'expo.out',
        overflowY: 'hidden'
      })
  })

  return (
    <>
    <h1 id='hello' className='fixed text-black flex items-center justify-center w-[100vw] h-[100vh] text-9xl font-[anzo]'>Hello World!</h1>

    <div ref={loaderRef} className='text-white font-[anzo2] overflow-x-hidden'>
    <Header />
    <Page1/>
    </div>

    <div>
      {/* <Page2/> */}
    </div>
    </>
  )
}

export default App
