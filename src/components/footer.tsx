import logo from '../assets/images/Pangea logo branca.png';

const Footer = () => {
    return (
        <footer className='flex flex-row justify-between align-center items-center w-full h-full px-20 bg-primaryColor text-center'>
            <img
                src={logo}
                alt="Logo Pangea"
                style={{ width: '10%', height: '100%' }}
            />
            <span>
                Desenvolvido por&nbsp;
                <a href="https://sircomp.com.br/" target='blank'>
                    Sir.COMP
                </a>
            </span>
            <div>
                <ul>
                    <li><a href="#"></a>Início</li>
                    <li><a href="#"></a>Contato</li>
                    <li><a href="#"></a>Produtos</li>
                </ul>
            </div>
        </footer>
    )
}

export { Footer };