import { useEffect, useState } from 'react';
import '../styles/Habilidades.css';

const habilidades = [
    { nombre: 'HTML/CSS', porcentaje: 80 },
    { nombre: 'JavaScript', porcentaje: 70 },
    { nombre: 'React', porcentaje: 60 },
    { nombre: 'React Native', porcentaje: 70 },
    { nombre: 'NextJS', porcentaje: 70 },
];

const Habilidades = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className={`habilidades ${loaded ? 'animado' : ''}`} id="habilidades">
            <div className="contenido-seccion">
                <h2 className="titulo-seccion">My Skills</h2>
                <h3>I specialize in</h3>

                {habilidades.map((habilidad, index) => (
                    <div className="fila" key={index}>
                        <div className="col">
                            <span>{habilidad.nombre}</span>
                            <div className={`cont-barra ${loaded ? 'animado' : ''}`}>
                                <div className={`barra ${loaded ? 'animado' : ''}`}
                                    style={{ width: loaded ? `${habilidad.porcentaje}%` : '0' }}
                                >
                                    <span className="porcentaje-texto">
                                        {loaded ? `${habilidad.porcentaje}%` : '0%'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Habilidades;
