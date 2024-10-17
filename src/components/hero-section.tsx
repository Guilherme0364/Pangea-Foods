import sample from '../assets/videos/2377208_Dogs_Stick_1920x1080.mp4';

const Hero = () => {
    return (
        <section
            style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            <video
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1
                }}
                autoPlay
                loop
                muted
            >
                <source src={sample} type='video/mp4' />
            </video>

            {/* Overlay escuro */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    opacity: 0.6,
                    zIndex: 2
                }}
            />

            {/* Texto */}
            <h1
                style={{
                    position: 'relative',
                    zIndex: 3,
                    color: 'white',
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                Pangea Foods
                <br />
                <span style={{
                    zIndex: 3,
                    fontSize: '1.5rem',
                    textAlign: 'center',
                }}>
                    Alimentação nutricional para o seu melhor amigo
                </span>
            </h1>
        </section>
    );
}

export { Hero };
