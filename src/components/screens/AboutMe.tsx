import '../styles/AboutMe.css';
import photo from '../image/foto.png';

const AboutMe = () => {
    return (
        <div>
            <section className="inicio" id="inicio">
                <div className="contenido-seccion">
                    <div className="info">
                        <h1>ELLIAM SANCHEZ AGUIRRE</h1>
                        <h2>CODER, DESIGNER, FRONTEND</h2>
                    </div>
                    <div className="foto">
                        <img src={photo} alt="photo" />
                    </div>
                </div>
            </section>

            <section className="sobremi" id="sobremi">
                <div className="contenido-seccion">
                    <h2 className="titulo-seccion">About Me</h2>
                    <h3>Personal Details</h3>

                    <p className="especial">I focus on producing creative and original ideas for my clients</p>
                    <p className="miperfil">
                        I am passionate about creativity and love working on generating innovative ideas that meet my clients' needs.
                        I use my experience and knowledge to develop creative solutions that stand out and have a positive impact.
                        My approach is based on the constant search for new perspectives and exploring different approaches to find the best solutions.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
