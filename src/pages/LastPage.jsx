import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';

const EmailLink = () => {
    const [showImage, setShowImage] = useState(false);
    
    return (
        <a 
            href="mailto:adityasiingh14@gmail.com" 
            className='text-6xl bg-black p-2 text-white font-[anzo2] cursor-pointer relative inline-flex items-center'
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
        >
            <span>EMAIL</span>
            <span 
                className={`inline-flex justify-center mx-1 transition-all duration-500 ease-in-out ${
                    showImage ? 'opacity-100 w-10 mx-3' : 'opacity-0 w-0'
                }`}
            >
                <img 
                    src="/gmail.webp" 
                    alt="Email icon" 
                    className="h-10 w-10"
                />
            </span>
            <span>ME</span>
        </a>
    );
};

const LastPage = () => {
    const marqueeRef = useRef(null);

    useGSAP(() => {
        if (marqueeRef.current) {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                duration: 25,
                ease: 'linear',
                repeat: -1
            });
        }
    }, []);

    return (
        <>
            <div className='flex gap-10 items-center px-2 border-black border-y-2 text-nowrap overflow-x-hidden w-full relative'>
                <div ref={marqueeRef} className="flex whitespace-nowrap gap-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className='text-black text-6xl font-[anzo1] p-2 gap-2 flex items-center justify-center'>
                            Let's Build Something Together. 
                            <EmailLink />
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-black flex justify-between px-8 py-4'>
                <a href='https://www.instagram.com/adityasiingh14/'>INSTAGRAM</a>
                <a href='https://www.linkedin.com/in/aditya-kumar-singh-a10901284/'>LINKEDIN</a>
                <a href='https://github.com/Adityasiingh14'>GITHUB</a>
                <a href='https://x.com/AdityaSiingh18'>TWITTER</a>
            </div>
        </>
    );
};

export default LastPage;