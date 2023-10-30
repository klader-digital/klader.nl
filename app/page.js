import Image from "next/image";

function Page() {
    return (
        <main role="main">
            <section id="hero" className="container relative py-24 lg:pt-40">
                <div className="prose sm:prose-sm md:prose-md lg:prose-lg prose-invert max-w-none md:max-w-4xl">
                    <p className='text-xs lg:text-base text-brand font-light mb-2'>Currently available to take on your
                        projects.</p>
                    <h1>Digital immersive experiences to inspire audience.</h1>
                    <p className='max-w-2xl'>
                        Join me on a web adventure like no other. I&#39;m all about creating mind-blowing digital
                        experiences. Are you ready to embark on the ride of a lifetime?</p>
                </div>
                <Image src="/lines.svg" alt=""
                       className="absolute inset-0 h-full w-auto lg:w-full lg:h-auto object-cover object-top -z-50 pointer-events-none"
                       width={1920} height={1080}/>
            </section>

            <section id="services" className="container relative py-24 lg:py-40">
                <div className="prose lg:prose-md prose-invert max-w-none lg:grid grid-cols-2 gap-x-12 items-start">
                    <div className='max-w-xl'>
                        <h2>🏆 Services that Create Digital Experiences for Your Audience.</h2>
                        <p>Elevate your brand with award-winning digital experiences that captivate. I design the future
                            of web interaction, just for you.</p>
                    </div>

                    <dl className='mt-20 lg:grid grid-cols-2 col-start-2 gap-x-8 prose max-w-none'>
                        <dt className='col-start-1 row-start-1'>Web Development</dt>
                        <dd className='col-start-1 row-start-2 !mt-0 !pl-0'>Developing websites and web applications
                            using front-end
                            and back-end technologies.
                        </dd>

                        <dt className='col-start-2 row-start-1'>Ecommerce</dt>
                        <dd className='col-start-2 row-start-2 !mt-0 !pl-0'>Developing online shopping platforms and
                            integrating
                            them with payment gateways and other
                            e-commerce solutions.
                        </dd>

                        <dt className='col-start-1 row-start-3'>CMS Development</dt>
                        <dd className='col-start-1 row-start-4 !mt-0 !pl-0'>Creating content management systems (CMS) to
                            help
                            clients manage their website content
                            easily.
                        </dd>

                        <dt className='col-start-2 row-start-3'>UI/UX Design</dt>
                        <dd className='col-start-2 row-start-4 !mt-0 !pl-0'>Creating user-friendly interfaces and
                            experiences for
                            web and mobile applications.
                        </dd>

                        <dt className='col-start-1 row-start-5'>API Development</dt>
                        <dd className='col-start-1 row-start-6 !mt-0 !pl-0'>Developing and integrating application
                            programming
                            interfaces (APIs) for third-party
                            integration.
                        </dd>

                        <dt className='col-start-2 row-start-5'>Maintenance and Support</dt>
                        <dd className='col-start-2 row-start-6 !mt-0 !pl-0'>Providing ongoing maintenance and support
                            for the
                            software to ensure its smooth operation
                            and optimal performance.
                        </dd>
                    </dl>
                </div>
                <Image src="/lines-2.svg" alt=""
                       className="absolute inset-0 translate-y-1/4 h-full w-auto lg:w-full lg:h-auto object-cover object-top -z-50 pointer-events-none"
                       width={1920} height={1080}/>
            </section>

            <section id="about" className="container relative py-24 lg:py-40">
                <div className="max-w-none grid lg:grid-cols-2 gap-y-4 gap-x-12 items-start">
                    <Image className='aspect-[1/1] lg:aspect-none lg:h-screen object-cover' src={'/case-3.png'}
                           alt={'background line'} width={1920} height={1080}/>

                    <div className='max-w-lg prose sm:prose-sm md:prose-md lg:prose-lg prose-invert'>
                        <h2>🌿 Unearth the Tale Behind Our Remarkable Journey.</h2>
                        <p>Committed to the art of creating immersive digital experiences, my passion lies in designing
                            interactive solutions that captivate and inspire your audience, leaving a lasting and
                            impactful impression.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="block container relative isolate z-20 mt-32 mb-64 lg:mt-64 lg:mb-96">
                <div className="prose prose-invert sm:prose-sm lg:prose-lg text-center max-w-xl lg:max-w-3xl mx-auto">
                    <h1>Let&#39;s build your success
                        story together. 🤝</h1>
                </div>

                <Image quality={100} src="/contact-1.png" alt=""
                       className="absolute scale-75 sm:scale-90 md:scale-95 lg:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-50"
                       width={624} height={483}/>
                <Image quality={100} src="/contact-2.png" alt=""
                       className="absolute scale-75 sm:scale-90 md:scale-95 lg:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-40"
                       width={600} height={492}/>
                <Image quality={100} src="/contact-3.png" alt=""
                       className="absolute scale-75 sm:scale-90 md:scale-95 lg:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-30"
                       width={531} height={409}/>
                <Image quality={100} src="/contact-4.png" alt=""
                       className="absolute scale-75 sm:scale-90 md:scale-95 lg:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"
                       width={558} height={461}/>
            </section>
        </main>
    )
}

export default Page