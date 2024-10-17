import sustentable from '../assets/images/Earth care.png';

const Sustentability = () => {
    return (
        <section className='flex flex-col items-center justify-center bg-[#ffffff] mb-20'>
            <h2 className='text-black text-4xl font-semibold mt-10 mb-10'>Como somos sustentáveis</h2>
            <article className='flex flex-row items-center justify-center w-full'>
                <p className='text-balance mx-10 leading-6 text-lg'>
                    A produção de tenébrios apresenta uma alternativa sustentável e eficiente em comparação com a carne bovina. Enquanto os tenébrios são altamente eficazes na conversão de alimentos em proteína, utilizando menos água, terra e energia, a produção de carne bovina demanda uma grande quantidade de recursos e gera emissões significativas de gases de efeito estufa, como o metano. A criação de tenébrios em espaços verticais compactos reduz a necessidade de expansão de terras agrícolas e evita o desmatamento, preservando a biodiversidade. 
                    <br/> <br/>

                    Além disso, os tenébrios podem ser alimentados com resíduos orgânicos, como restos de alimentos e materiais agrícolas, contribuindo para a reciclagem de nutrientes e a redução do desperdício. Esse ciclo sustentável gera menos poluição e promove a reutilização de recursos. As emissões de gases de efeito estufa associadas à criação de tenébrios também são muito menores do que aquelas provenientes da pecuária tradicional. 
                    <br/> <br/>

                    Outro aspecto importante é o frass, o subproduto gerado pela digestão dos tenébrios, que atua como um fertilizante natural. Rico em nutrientes essenciais como nitrogênio, fósforo e potássio, o frass contribui para o crescimento saudável das plantas, além de melhorar a estrutura do solo e a retenção de água, tornando-se uma opção sustentável e benéfica para o cultivo. 
                    <br/> <br/>                    
                </p>
                <img
                    src={sustentable}
                    alt="Sustentabilidade"
                    className='object-cover mx-auto mt-4'
                    style={{ width: '45%' }}
                />
            </article>
        </section>
    )
}

export { Sustentability };