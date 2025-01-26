import Image from 'next/image'
import React from 'react'
import IntegrationExplainer from './IntegrationExplainer'

type Props = {}

const Explainer = (props: Props) => {
    return (
        <div>
            {/* Features Section */}
            <section id="features" className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-black mb-6">
                        Features
                    </h2>
                    <p className="text-gray-600 mb-10">
                        Everything you need to manage Instagram interactions effectively.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6  rounded-lg shadow">
                            <h3 className="text-xl font-semibold">
                                Automated DM Responses
                            </h3>
                            <p className="text-gray-700 mt-4">
                                Respond instantly to leads with AI-driven or default messages.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold">
                                Seamless Workflows
                            </h3>
                            <p className="text-gray-700 mt-4">
                                Turn interactions into opportunities with streamlined processes.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold ">
                                Reply to your customers
                            </h3>
                            <p className="text-gray-700 mt-4">
                                Create custom flows or create AI driven flows to answer every question.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </section>

            <IntegrationExplainer />

            {/* Feature */}


            {/* Pricing Section */}
            <section
                id="pricing"
                className="py-16 bg-gradient-to-b from-gray-50 via-purple-50 to-white"
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Pricing</h2>
                    <p className="text-gray-600 mb-10">
                        Choose a plan that suits your business needs.
                    </p>
                    {/* Pricing Cards */}
                </div>
            </section>
        </div>
    )
}

export default Explainer