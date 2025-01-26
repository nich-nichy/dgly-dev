import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b px-5">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 font-bold">
                    <h1 className="text-xl">Dialoguely</h1>
                </div>
                <div className="text-center flex space-x-8 ">
                    <a href="#features" className="text-gray-700 hover:text-">
                        Features
                    </a>
                    <a href="#pricing" className="text-gray-700 hover:text-">
                        Pricing
                    </a>
                    <a href="#docs" className="text-gray-700 hover:text-">
                        Docs
                    </a>
                </div>
                <a
                    href="/home"
                    className=" text-white bg-[#155E95] px-6 py-2 rounded-xl hover:opacity-90 transition-all"
                >
                    Get Started
                </a>
            </div>
        </nav>
    )
}

export default Navbar