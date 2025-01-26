import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div>
            {/* Hero Section */}
            <section className="flex items-center justify-center py-16">
                <div className="flex flex-col gap-8 items-center">
                    {/* Text Content */}
                    <div className="text-left flex flex-col items-center justify-center space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl dm-serif-text-regular text-center font-bold leading-tight text-black">
                                Smarter Conversations, Better Results
                            </h1>
                            <p className="text-lg text-gray-700 text-center poppins-regular">

                                <span className="font-medium ">Dialoguely</span>{" "}
                                transforms engagement into opportunities quickly and
                                effortlessly.<br />
                                Automate Conversations with ease.
                            </p>
                        </div>
                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            <a
                                href="/signup"
                                className="bg- px-8 py-3 text-white bg-[#155E95] rounded-xl shadow-lg hover:opacity-90 transition-all"
                            >
                                Start Free Today
                            </a>
                            <a
                                href="#demo"
                                className="inline-flex items-center text-gray-700"
                            >
                                Watch Demo →
                            </a>
                        </div>
                    </div>
                    {/* Hero Image */}
                    <div className='flex justify-center'>
                        <div className="relative">
                            <div className="absolute inset-0 rounded-3xl transform scale-105 opacity-30" />
                            <Image
                                src="/assets/mobile-bg.png"
                                alt="Automated conversation builder"
                                className="relative rounded-2xl"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 rounded-3xl transform scale-105 opacity-30" />
                            <Image
                                src=""
                                alt="Dialogly flows UI"
                                className="relative rounded-2xl"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero