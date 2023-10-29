import React, { useEffect } from 'react';
import '../styles/AutoEscrito.css'

const WelcomeSection: React.FC = () => {
    useEffect(() => {
        const duracionAnimacion: number = 4;
        const textoOriginal: string = 'Welcome';
        const titulo: HTMLElement | null = document.getElementById('autoescrito');

        if (titulo) {
            titulo.innerHTML = '';

            for (let i: number = 0; i < textoOriginal.length; i++) {
                setTimeout(() => {
                    if (titulo) {
                        titulo.innerHTML += textoOriginal[i];
                    }
                }, i * (duracionAnimacion * 1000 / textoOriginal.length));
            }

            const intervalId: NodeJS.Timeout = setInterval(() => {
                titulo.innerHTML = '';
                for (let i: number = 0; i < textoOriginal.length; i++) {
                    setTimeout(() => {
                        if (titulo) {
                            titulo.innerHTML += textoOriginal[i];
                        }
                    }, i * (duracionAnimacion * 1000 / textoOriginal.length));
                }
            }, duracionAnimacion * 1000 * 2);

            // Detener la animación cuando el componente se desmonta
            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <section className="welcome">
            <h1 id="autoescrito">Welcome</h1>
        </section>
    );
};

export default WelcomeSection;
