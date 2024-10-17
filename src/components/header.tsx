import * as React from 'react';
import logo from '../assets/images/Pangea logo.jpg';

const Header = () => {
    return (
        <nav
            className="fixed top-0 left-0 w-full p-5 transition-all duration-400 ease-in-out"
            style={{
                background: 'linear-gradient(rgba(255, 255, 255, 0.092), rgba(255, 255, 255, 0.092))', // Fundo transparente
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)', // Sombra
                backdropFilter: 'blur(10px)', 
                WebkitBackdropFilter: 'blur(10px)', 
                zIndex: 1000, 
            }}
        >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div className="logo">
                    <img src={logo} alt="Pangea logo" width="25%" height="100%" className="ml-10" />
                </div>
                <ul className="flex space-x-3 mr-10">
                    <li><a href="#" className="text-lg font-semibold px-2 py-2 text-[#3F8574]">INÍCIO</a></li>
                    <li><a href="#" className="text-lg font-semibold px-2 py-2 text-[#3F8574]">SOBRE NÓS</a></li>
                    <li><a href="#" className="text-lg font-semibold px-2 py-2 text-[#3F8574]">CONTATO</a></li>
                    <li><a href="#" className="text-lg font-semibold px-2 py-2 text-[#3F8574]">SUSTENTABILIDADE</a></li>                    
                </ul>
            </div>
        </nav>
    )
}

export { Header };