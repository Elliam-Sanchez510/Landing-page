import '../styles/AboutMe.css'
import foto from '../image/foto.png'


const AboutMe = () => {
    return (
        <div>
            <section className="inicio" id="inicio">
                <div className="contenido-seccion">
                    <div className="info">
                        <h1>ELLIAM SANCHEZ AGUIRRE</h1>
                        <h2>CODIFICADOR, DISEÑADOR, FRONTEND</h2>
                    </div>
                    <div className="foto">
                        <img src={foto} alt="foto" />
                    </div>
                </div>
            </section>

            <section className="sobremi" id="sobremi">
                <div className="contenido-seccion">
                    <h2 className="titulo-seccion">Sobre Mi</h2>
                    <h3>Detalles personales</h3>

                    <p className="especial">Me dedico a producir ideas creativas y originales para mis clientes</p>
                    <p className="miperfil">Soy un apasionado de la creatividad y me encanta trabajar en la generación de ideas innovadoras que satisfagan las necesidades de mis clientes. Utilizo mi experiencia y conocimientos para desarrollar soluciones creativas que destaquen y generen un impacto positivo. Mi enfoque se basa en la búsqueda constante de nuevas perspectivas y en la exploración de diferentes enfoques para encontrar las mejores soluciones.</p>
                </div>
            </section>

        </div>
    );
};

export default AboutMe;