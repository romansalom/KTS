import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Nosotros() {
  useEffect(() => {
    AOS.init({
      once: true, // Animación solo una vez al desplazar
      offset: 10, // Desplazamiento en píxeles antes de que se active la animación
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <>
      <div className="playfair-display-letras bg-[#d3d3cb] text-[#262626] px-6 py-12">
        <div className="max-w-6xl max-md:max-w-md mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 lg:!leading-[55px] sm:text-4xl sm:leading-tight">
                Mejoramos la experiencia de compra de nuestros consumidores.
              </h2>
            </div>
            <div className="space-y-6 md:max-w-md">
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-up"
              >
                <div className="sm:ml-6">
                  <p className="text-l mt-1 md:mt-7">
                    Nuestros clientes reciben un paquete completo con todo lo
                    necesario para mudarse de inmediato o alquilar el espacio.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-up"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Contratar nuestros servicios es más económico que pagarle a
                    un interiorista, quienes suelen cobrar un sobreprecio
                    significativo. También es más barato que hacerlo por cuenta
                    propia, ya que la inexperiencia tiene un costo.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col p-4 bg-white rounded-md"
                data-aos="fade-up"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Entregamos más rápido que un interiorista, ya que ofrecemos
                    paquetes prearmados que no requieren personalización.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Nuestros clientes no tienen que preocuparse por nada para
                    tener un espacio funcional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosotros;
