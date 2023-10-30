import Image from "next/image";

export default function Header() {
    return (
        <header className='container relative py-4 lg:py-10'>
            <nav className='flex justify-between items-center'>
                <h1>
                    <a href="/" className='w-14 h-14 grid place-items-center '>
                        <span className="sr-only">Klader.nl</span>
                        <Image className='w-6 h-6 lg:w-10 lg:h-10' src="/logo.svg" alt="Klader.nl" width={24} height={24}/>
                    </a>
                </h1>
                <button className='w-14 h-14 hidden place-items-center border border-zinc-700 text-white'>
                    <span className={'sr-only'}>Schedule a call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="square" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <ul className='flex leading-relaxed text-sm text-zinc-400 gap-12 items-center'>
                    <li className="hidden lg:inline-block">
                        <a href="#cases" className='underline-offset-4 hover:text-white duration-300 decoration-[0.5px] hover:underline cursor-not-allowed'>Cases <sup>T.B.A.</sup></a>
                    </li>
                    <li className="hidden lg:inline-block">
                        <a href="#services" className='underline-offset-4 hover:text-white duration-300 decoration-[0.5px] hover:underline'>Services</a>
                    </li>
                    <li className="hidden lg:inline-block">
                        <a href="#about" className='underline-offset-4 hover:text-white duration-300 decoration-[0.5px] hover:underline'>About</a>
                    </li>
                    <li>
                        <a href="/blogs" className='cursor-not-allowed underline-offset-4 hover:text-white duration-300 decoration-[0.5px] hover:underline'>Blogs</a>
                    </li>
                    <li>
                        <a href="#contact" className='text-brand-900 bg-brand py-4 px-10 rounded-full duration-300'>Get in touch 👋</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}