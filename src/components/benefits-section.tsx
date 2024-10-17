import { Card } from './card';
import paw from '../assets/icons/paw.png';
import food from '../assets/icons/pet-food.png';
import livestock from '../assets/icons/livestock.png';
import delivery from '../assets/icons/delivery.png';
import world from '../assets/icons/world.png';
import sustentability from '../assets/icons/sustainable-energy.png'

const Benefits = () => {
    return (
        <section className="flex flex-col items-center bg-[#ffffff] mt-16 mb-16">
            <h2 className="text-black text-4xl font-semibold mt-16">
                Porque escolher os nossos alimentos baseados em tenébrios?
            </h2>
            <div className="flex flex-wrap w-full justify-evenly items-center mt-16">
                <Card
                    title="Diversidade"
                    description="Nossos alimentos podem fazer parte da dieta de vários tipos de animais, desde os domésticos até os de criação."
                    image={livestock}
                />
                <Card
                    title="Nutrição de Alta Qualidade"
                    description="Os tenébrios são ricos em proteínas e oferecem todos os aminoácidos essenciais para a nutrição animal."
                    image={food}
                />
                <Card
                    title="Benefícios para a Saúde"
                    description="Os tenébrios são ricos em vitaminas, minerais e ácidos graxos benéficos, promovendo a saúde do seu animal."
                    image={paw}
                />
                <Card
                    title="Entrega"
                    description="Realizamos entrega para você receber os nossos produtos no conforto da sua casa."
                    image={delivery}
                />
                <Card
                    title="Sustentabilidade em Ação"
                    description=" Os tenébrios têm uma alta taxa de conversão alimentar, o que significa que requerem menos recursos para serem produzidos."
                    image={sustentability}
                />
                <Card
                    title="Impacto positivo"
                    description="A criação de tenébrios é uma alternativa ambientalmente sustentável."
                    image={world}
                />
            </div>
        </section>
    );
}

export { Benefits };