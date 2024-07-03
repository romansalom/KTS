import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PlanSimple = () => {
  useEffect(() => {
    AOS.init({
      once: false, // Animación solo una vez al desplazar
      offset: 100, // Desplazamiento en píxeles antes de que se active la animación
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);
  const handleWhatsAppClick = () => {
    const message =
      'Hola, estoy interesado en obtener más información sobre la línea Single. ¿Podrías proporcionarme más detalles sobre los servicios y precios? ¡Gracias!';

    const phoneNumber = '+5491160254313'; // Reemplaza esto con el número de teléfono
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="contenedore-zoomes bg-[#d3d3cb]">
      {' '}
      <section className="text-[#262626] body-font overflow-hidden">
        <div className="relative z-10"></div>

        <div className="container px-5 py-50 mx-auto" data-aos="fade-up">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
              <h2 className="playfair-display-letras text-sm title-font text-[#262626] tracking-widest">
                De uso propio{' '}
              </h2>
              <h1 className="playfair-display-letras text-[#262626] text-3xl title-font font-medium mb-4">
                Linea Single
              </h1>

              <p className="playfair-display-letras leading-relaxed mb-4">
                te mudas solo y no queres ocuparte de nada, compra este paquete
                un diseño moderno especial para estudiantes o personas que hagan
                home office
              </p>
              <div className="playfair-display-letras flex border-t border-black py-2"></div>
              <p className="playfair-display-letras leading-relaxed mb-4">
                Set de mobiliario con facil montaje para estudiantes y
                trabajadores. El home office surgió tras la pandemia y es un
                estilo de vida que se instaló socialmente. Queremos que tengas
                todas las herramientas y organización, para estimular y
                facilitar los procesos de estudio. Muebles modulares y
                plegables, diseñados para optimizar el espacio y la
                funcionalidad
              </p>
              <div className="playfair-display-letras flex">
                <button className="flex ml-auto text-white bg-[#262626] border-0 py-2 px-2 focus:outline-none  rounded text-black">
                  <a
                    href="catalogo student (2).pdf"
                    download="CatalogoLineaSingle.pdf"
                  >
                    Descargar Brochure
                  </a>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="rounded-full w-10 h-10 bg-green-400 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <svg
                    className="w-6 h-6 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      fillRule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="black"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    />
                  </svg>
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
      <br></br>
    </div>
  );
};

export default PlanSimple;
