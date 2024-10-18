interface Props {
    title: string;
    description: string;
    image: string;
}

const Card = ({ title, description, image }: Props) => {
    return (
        <div 
            className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden text-center mt-10 mb-10 transform transition-transform duration-300 hover:scale-105"
        >
            <img
                className="w-24 h-24 object-cover mx-auto mt-4"
                src={image}
                alt={title}
            />
            <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                    {title}
                </h3>
                <p className="mt-2 text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}

export { Card };
