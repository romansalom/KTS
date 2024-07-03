import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PlaneCouple = () => {
  useEffect(() => {
    AOS.init({
      once: false, // Animación solo una vez al desplazar
      offset: 100, // Desplazamiento en píxeles antes de que se active la animación
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);
  return (
    <div className="contenedore-zoomes bg-[#d3d3cb]">
      {' '}
      <section className="text-[#262626] body-font overflow-hidden">
        <div className="relative z-10"></div>

        <div className="container px-5 py-20 mx-auto" data-aos="fade-right">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
              <h2 className="playfair-display-letras text-sm title-font text-[#262626] tracking-widest">
                Momentos compartidos{' '}
              </h2>
              <h1 className="playfair-display-letras text-[#262626] text-3xl title-font font-medium mb-4">
                Linea Couple
              </h1>

              <p className="playfair-display-letras leading-relaxed mb-4">
                Mudate con tu pareja a un departamento con un diseño
                miinimalista y moderno sin ocuparte de nada
              </p>
              <div className="playfair-display-letras flex border-t border-black py-2"></div>
              <p className="playfair-display-letras leading-relaxed mb-4">
                Set de mobiliario estilo wabisabi El wabi-sabi combina la
                atención a la composición del minimalismo, con la calidez de los
                objetos provenientes de la naturaleza. Algunas características
                de la estética wabi-sabi son la asimetría, aspereza, sencillez o
                ingenuidad, modestia e intimidad, y sugiere además un proceso
                natural.
              </p>
              <div className="playfair-display-letras flex">
                <button className="flex ml-auto text-white bg-[#262626] border-0 py-2 px-6 focus:outline-none  rounded text-black">
                  Estoy interesado
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaneCouple;
