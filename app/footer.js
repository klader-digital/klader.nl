import Image from "next/image";

export default function Footer() {
    return (
        <footer className='container relative isolate lg:grid lg:grid-cols-2 overflow-hidden pt-[100vh] -mt-[100vh]'>
            <div className="prose prose-invert max-w-md lg:col-span-2">
                <h3 className='text-4xl font-normal'>Klader.nl</h3>
                <p className='mt-0'>My passion lies in designing interactive solutions that captivate and inspire your audience, leaving a lasting and impactful impression.</p>
            </div>

            <div className="grid grid-cols-2 mt-8 text-sm mb-16">
                <ul className='leading-relaxed'>
                    <li>
                        <a href="mailto:hello@klader.nl" className="text-zinc-400 hover:text-white duration-300"><small
                            className='text-xs text-neutral-600 mr-2'>E</small><span
                            className="underline underline-offset-4 decoration-[0.5px]">hello@klader.nl</span></a>
                    </li>
                    <li>
                        <a href="tel:+31631249988" className="text-zinc-400 hover:text-white duration-300"><small
                            className='text-xs text-neutral-600 mr-2'>T</small><span className="underline underline-offset-4 decoration-[0.5px]">+31 (0) 631 249 988</span></a>
                    </li>
                </ul>
                <ul className='leading-relaxed'>
                    <li>
                        <p className="text-zinc-400"><small className='text-xs text-neutral-600 mr-2'>KVK</small>77248872
                        </p>
                    </li>
                    <li>
                        <p className="text-zinc-400"><small className='text-xs text-neutral-600 mr-2'>BTW</small>NL860768387B01
                        </p>
                    </li>
                </ul>
            </div>


            <div className="">
            <ul className='flex items-center gap-4 lg:justify-end'>
                <li>
                    <a className='w-14 h-14 grid place-items-center border border-zinc-700 text-neutral-400 hover:text-white duration-300' target={"_blank"} href="#">
                        <span className={'sr-only'}>Instagram</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_22_686)">
                                <path
                                    d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z"
                                    fill="currentColor"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_22_686">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a className='w-14 h-14 grid place-items-center border border-zinc-700 text-neutral-400 hover:text-white duration-300' target={"_blank"} href="#">
                        <span className={'sr-only'}>Twitter</span>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.953 2.5696C23.0545 2.9652 22.1026 3.22634 21.128 3.3446C22.1541 2.72785 22.9224 1.76064 23.291 0.621599C22.34 1.1766 21.286 1.5806 20.164 1.8056C19.4238 1.01403 18.4429 0.48902 17.3736 0.3121C16.3044 0.13518 15.2067 0.316249 14.2509 0.82719C13.2952 1.33813 12.5349 2.15035 12.0881 3.13772C11.6412 4.1251 11.533 5.23237 11.78 6.2876C7.69 6.0946 4.067 4.1296 1.64 1.1616C1.19879 1.91141 0.968664 2.76662 0.974 3.6366C0.974 5.3466 1.844 6.8496 3.162 7.7326C2.38086 7.70773 1.61697 7.49653 0.934 7.1166V7.1766C0.933557 8.31299 1.32627 9.41454 2.04551 10.2944C2.76474 11.1742 3.76621 11.7781 4.88 12.0036C4.1583 12.197 3.40241 12.226 2.668 12.0886C2.98412 13.0666 3.59766 13.9215 4.42301 14.5341C5.24837 15.1467 6.24435 15.4863 7.272 15.5056C5.53153 16.8715 3.38248 17.6129 1.17 17.6106C0.78 17.6106 0.391 17.5876 0 17.5436C2.25571 18.9879 4.87851 19.7546 7.557 19.7526C16.61 19.7526 21.555 12.2566 21.555 5.7676C21.555 5.5576 21.555 5.3476 21.54 5.1376C22.506 4.44246 23.3392 3.57942 24 2.5896L23.953 2.5696Z"
                                fill="currentColor"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a className='w-14 h-14 grid place-items-center border border-zinc-700 text-neutral-400 hover:text-white duration-300' target={"_blank"} href="#">
                        <span className={'sr-only'}>LinkedIn</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                                fill="currentColor"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a className='w-14 h-14 grid place-items-center border border-zinc-700 text-neutral-400 hover:text-white duration-300' target={"_blank"} href="#">
                        <span className={'sr-only'}>Github</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 0.296875C5.37 0.296875 0 5.66988 0 12.2969C0 17.5999 3.438 22.0969 8.205 23.6819C8.805 23.7949 9.025 23.4239 9.025 23.1049C9.025 22.8199 9.015 22.0649 9.01 21.0649C5.672 21.7889 4.968 19.4549 4.968 19.4549C4.422 18.0699 3.633 17.6999 3.633 17.6999C2.546 16.9559 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.555 18.2069 5.555 18.2069C6.625 20.0419 8.364 19.5119 9.05 19.2049C9.158 18.4289 9.467 17.8999 9.81 17.5999C7.145 17.2999 4.344 16.2679 4.344 11.6699C4.344 10.3599 4.809 9.28988 5.579 8.44987C5.444 8.14687 5.039 6.92688 5.684 5.27388C5.684 5.27388 6.689 4.95188 8.984 6.50388C9.944 6.23688 10.964 6.10488 11.984 6.09888C13.004 6.10488 14.024 6.23688 14.984 6.50388C17.264 4.95188 18.269 5.27388 18.269 5.27388C18.914 6.92688 18.509 8.14687 18.389 8.44987C19.154 9.28988 19.619 10.3599 19.619 11.6699C19.619 16.2799 16.814 17.2949 14.144 17.5899C14.564 17.9499 14.954 18.6859 14.954 19.8099C14.954 21.4159 14.939 22.7059 14.939 23.0959C14.939 23.4109 15.149 23.7859 15.764 23.6659C20.565 22.0919 24 17.5919 24 12.2969C24 5.66988 18.627 0.296875 12 0.296875Z"
                                fill="currentColor"/>
                        </svg>
                    </a>
                </li>
            </ul>

            <p className='my-4 text-xs text-neutral-600 lg:text-right'>© 2023 Klader.nl. All rights reserved.</p>
            </div>
            <Image src="/lines-3.svg" alt="" className="absolute left-0 bottom-0 translate-y-1/4 h-full w-auto lg:w-full lg:h-auto object-cover object-top -z-50 pointer-events-none" width={1920} height={1080}/>
        </footer>
    )
}