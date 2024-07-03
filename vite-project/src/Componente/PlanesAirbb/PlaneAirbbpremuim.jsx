import './styles.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PlaneAirbbpremuim = () => {
  useEffect(() => {
    AOS.init({
      once: false, // Animación solo una vez al desplazar
      offset: 100, // Desplazamiento en píxeles antes de que se active la animación
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);
  const handleWhatsAppClick = () => {
    const message =
      'Hola, estoy interesado en obtener más información sobre la línea Airbnb Premuim. ¿Podrías proporcionarme más detalles sobre los servicios y precios? ¡Gracias!';

    const phoneNumber = '+5491160254313'; // Reemplaza esto con el número de teléfono
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="contenedore-zoomes bg-[#262626]">
      {' '}
      <section className="text-[#d3d3cb] body-font overflow-hidden  bg-[#262626]">
        <div className="relative z-10"></div>

        <div className="container px-5  mx-auto" data-aos="fade-right">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
              <h2 className="playfair-display-letras text-sm title-font text-[#d3d3cb] tracking-widest">
                Premuim{' '}
              </h2>
              <h1 className="playfair-display-letras text-[#d3d3cb] text-3xl title-font font-medium mb-4">
                Linea Airbnb{' '}
              </h1>

              <p className="playfair-display-letras leading-relaxed mb-4">
                Soluciones sofisticadas y de instalación impecable, ideales para
                propietarios que buscan elevar la exclusividad de sus espacios
                sin comprometer el estilo, en una inversión que perdura en el
                tiempo.
              </p>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-[#d3d3cb]">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-[#d3d3cb]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 8.5L17 5.5H14.5L15.5 8.5L12 18.5L19 8.5Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.37596 8.08397C4.1462 8.42862 4.23933 8.89427 4.58397 9.12404C4.92862 9.3538 5.39427 9.26067 5.62404 8.91603L4.37596 8.08397ZM7 5.5V4.75C6.74924 4.75 6.51506 4.87533 6.37596 5.08397L7 5.5ZM9.5 6.25C9.91421 6.25 10.25 5.91421 10.25 5.5C10.25 5.08579 9.91421 4.75 9.5 4.75V6.25ZM5.61442 8.0699C5.37689 7.73057 4.90924 7.64804 4.5699 7.88558C4.23057 8.12311 4.14804 8.59076 4.38558 8.9301L5.61442 8.0699ZM12 18.5L11.3856 18.9301C11.6004 19.237 12.0088 19.3383 12.3421 19.1674C12.6755 18.9965 12.8317 18.6058 12.7079 18.2522L12 18.5ZM9.20789 8.25224C9.07106 7.86128 8.6432 7.65527 8.25224 7.79211C7.86128 7.92894 7.65527 8.3568 7.79211 8.74776L9.20789 8.25224ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM8.5 9.25C8.91421 9.25 9.25 8.91421 9.25 8.5C9.25 8.08579 8.91421 7.75 8.5 7.75V9.25ZM10.2115 5.73717C10.3425 5.34421 10.1301 4.91947 9.73717 4.78849C9.34421 4.6575 8.91947 4.86987 8.78849 5.26283L10.2115 5.73717ZM7.78849 8.26283C7.6575 8.65579 7.86987 9.08053 8.26283 9.21151C8.65579 9.3425 9.08053 9.13013 9.21151 8.73717L7.78849 8.26283ZM9.5 4.75C9.08579 4.75 8.75 5.08579 8.75 5.5C8.75 5.91421 9.08579 6.25 9.5 6.25V4.75ZM14.5 6.25C14.9142 6.25 15.25 5.91421 15.25 5.5C15.25 5.08579 14.9142 4.75 14.5 4.75V6.25ZM8.5 7.75C8.08579 7.75 7.75 8.08579 7.75 8.5C7.75 8.91421 8.08579 9.25 8.5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM5.62404 8.91603L7.62404 5.91603L6.37596 5.08397L4.37596 8.08397L5.62404 8.91603ZM7 6.25H9.5V4.75H7V6.25ZM4.38558 8.9301L11.3856 18.9301L12.6144 18.0699L5.61442 8.0699L4.38558 8.9301ZM12.7079 18.2522L9.20789 8.25224L7.79211 8.74776L11.2921 18.7478L12.7079 18.2522ZM5 9.25H8.5V7.75H5V9.25ZM8.78849 5.26283L7.78849 8.26283L9.21151 8.73717L10.2115 5.73717L8.78849 5.26283ZM9.5 6.25H14.5V4.75H9.5V6.25ZM8.5 9.25H19V7.75H8.5V9.25Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="ml-autotext-[#d3d3cb]">
                  ACABADOS BRILLANTES{' '}
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-[#d3d3cb]">
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-[#d3d3cb]"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0408 10.6406L9.69083 3.29062L8.82083 2.42063C8.53083 2.13063 8.05083 2.13063 7.76083 2.42063C7.47083 2.71062 7.47083 3.19062 7.76083 3.48062L8.63083 4.35062L3.00083 9.98062C2.36083 10.6206 2.02083 11.2706 2.00083 11.9206C1.98083 12.6106 2.32083 13.3006 3.00083 13.9906L7.01083 18.0006C8.35083 19.3306 9.69083 19.3306 11.0208 18.0006L17.0408 11.9806C17.2408 11.7806 17.3308 11.5106 17.3108 11.2506C17.3008 11.0306 17.2008 10.8006 17.0408 10.6406Z"
                      fill="#white"
                    />
                    <path
                      d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z"
                      fill="#white"
                    />
                    <path
                      d="M19.35 14.7803C19.09 14.5003 18.61 14.5003 18.35 14.7803C18.04 15.1203 16.5 16.8503 16.5 18.1703C16.5 19.4703 17.55 20.5203 18.85 20.5203C20.15 20.5203 21.2 19.4703 21.2 18.1703C21.2 16.8603 19.66 15.1203 19.35 14.7803Z"
                      fill="#white"
                    />
                  </svg>
                </div>
                <span className="ml-autotext-[#d3d3cb]">
                  <span className="text-[#262626]">.</span>UPCYCLE
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-[#d3d3cb]">
                  <svg
                    className="w-4 h-4  dark:text-[#d3d3cb]"
                    fill="white"
                    height="800px"
                    width="800px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M508.74,215.072l-119.467-93.867c-2.569-2.014-6.042-2.389-9.003-0.964c-2.935,1.425-4.804,4.403-4.804,7.671v51.635
			c-24.695,2.526-49.997,15.983-76.8,40.866v-83.968h51.2c3.268,0,6.246-1.869,7.671-4.804c1.425-2.935,1.05-6.434-0.964-9.003
			L262.707,3.172c-3.234-4.113-10.18-4.113-13.414,0l-93.867,119.467c-2.014,2.569-2.389,6.067-0.964,9.003
			c1.425,2.935,4.403,4.804,7.672,4.804h51.2v83.968c-26.803-24.883-52.104-38.34-76.8-40.866v-51.635
			c0-3.268-1.869-6.246-4.796-7.671c-2.944-1.425-6.434-1.05-9.011,0.964L3.26,215.072C1.203,216.685,0,219.159,0,221.779
			c0,2.62,1.203,5.094,3.26,6.707l119.467,93.867c2.577,2.022,6.067,2.398,9.011,0.964c2.927-1.425,4.796-4.403,4.796-7.672v-50.475
			c41.566,7.1,76.8,64.41,76.8,110.208v128c0,4.71,3.814,8.533,8.533,8.533h68.267c4.719,0,8.533-3.823,8.533-8.533v-128
			c0-45.798,35.234-103.108,76.8-110.208v50.475c0,3.268,1.869,6.246,4.804,7.672c2.961,1.434,6.434,1.058,9.003-0.964
			l119.467-93.867c2.057-1.613,3.26-4.087,3.26-6.707C512,219.159,510.797,216.685,508.74,215.072z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="ml-autotext-[#d3d3cb]">
                  <span className="text-[#262626]">.</span>FLEXIBLE
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-[#d3d3cb]">
                  <svg
                    className="w-5 h-5  dark:text-[#d3d3cb]"
                    fill="white"
                    viewBox="-18.91 0 122.88 122.88"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M60.78,43.44c-1.49,0.81-3.35,0.26-4.15-1.22c-0.81-1.49-0.26-3.35,1.23-4.15c7.04-3.82,10.32-8.76,10.98-13.59 c0.35-2.58-0.05-5.17-1.02-7.57c-0.99-2.43-2.56-4.64-4.55-6.42c-3.87-3.46-9.3-5.28-14.97-3.87c-2.3,0.57-4.29,1.72-6.03,3.34 c-1.85,1.72-3.45,3.97-4.85,6.63c-0.79,1.5-2.64,2.07-4.13,1.29c-1.5-0.79-2.07-2.64-1.29-4.13c1.72-3.26,3.73-6.06,6.11-8.28 c2.49-2.31,5.38-3.97,8.74-4.8c7.8-1.93,15.23,0.53,20.51,5.25c2.68,2.4,4.81,5.39,6.15,8.69c1.35,3.33,1.9,6.99,1.39,10.7 C73.99,31.93,69.75,38.57,60.78,43.44L60.78,43.44z M37.32,67.61c-11.6-15.58-11.88-30.34,2.2-44.06l-10.14-5.6 C21.26,14.79,6.36,38.08,12.12,44.3l7.9,11.72l-1.63,3.4c-0.45,1.01-0.01,1.72,1.09,2.21l1.07,0.29L0,102.59l4.16,8.87l8.32-2.45 l2.14-4.16l-2.05-3.84l4.52-0.97L18.14,98l-2.36-3.6l1.55-3.01l4.51-0.57l1.47-2.85l-2.52-3.29l1.61-3.12l4.6-0.75l6.26-11.95 l1.06,0.58C36.16,70.56,37.11,69.84,37.32,67.61L37.32,67.61z M59.15,77.38l-3.06,11.42l-4.25,1.68l-0.89,3.33l3.1,2.63l-0.81,3.03 l-4.2,1.48l-0.86,3.2l3.01,2.95l-0.58,2.17l-4.13,1.87l2.76,3.25l-1.19,4.43l-7.45,4.07l-5.82-7.63l11.1-41.43l-2.69-0.72 c-0.55-0.15-0.89-0.72-0.74-1.28l1.13-4.21c-8.14-6.17-12.17-16.85-9.37-27.32c3.6-13.45,17.18-21.57,30.64-18.55 c0.06,0.72,0.05,1.45-0.05,2.18c-0.25,1.82-1.04,3.69-2.5,5.5c-0.2,0.24-0.41,0.49-0.63,0.73c-4.3-0.28-8.33,2.5-9.49,6.82 c-0.5,1.86-0.39,3.74,0.2,5.43c0.14,0.6,0.37,1.18,0.67,1.75c0.71,1.3,1.75,2.29,2.97,2.92c0.8,0.53,1.7,0.93,2.67,1.2 c4.83,1.29,9.78-1.49,11.22-6.24c1.46-1.29,2.73-2.65,3.82-4.05c2.12-2.73,3.57-5.63,4.43-8.58c5.84,6.3,8.41,15.37,6.02,24.29 c-2.8,10.47-11.65,17.71-21.77,18.98l-1.13,4.21c-0.15,0.55-0.72,0.89-1.28,0.74L59.15,77.38L59.15,77.38z" />
                    </g>
                  </svg>
                </div>
                <span className="ml-autotext-[#d3d3cb]">
                  <span className="text-[#262626]"></span>INTEGRAL
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-[#d3d3cb]">
                  <svg
                    className="w-4 h-4  dark:text-[#d3d3cb]"
                    fill="white"
                    height="800px"
                    width="800px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M331.938,380.869c-5.049-1.675-10.508,1.026-12.203,6.08c-21.078,62.91-79.852,105.179-146.253,105.179
			c-85.028,0-154.207-69.178-154.207-154.207c0-85.028,69.178-154.207,154.207-154.207c65.508,0,124.022,41.526,145.618,103.325
			c1.755,5.017,7.261,7.661,12.273,5.92c5.026-1.76,7.675-7.257,5.92-12.283c-24.288-69.527-90.12-116.239-163.812-116.239
			C77.823,164.44,0,242.268,0,337.922s77.823,173.482,173.482,173.482c74.698,0,140.818-47.559,164.531-118.337
			C339.703,388.023,336.983,382.564,331.938,380.869z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M338.518,0.595c-74.698,0-140.818,47.559-164.536,118.347c-1.69,5.045,1.031,10.504,6.076,12.198
			c5.083,1.694,10.518-1.026,12.203-6.08c21.078-62.919,79.856-105.189,146.258-105.189c85.028,0,154.207,69.179,154.207,154.207
			c0,85.028-69.178,154.207-154.207,154.207c-65.503,0-124.022-41.516-145.618-103.316c-1.755-5.026-7.233-7.661-12.278-5.92
			c-5.021,1.76-7.671,7.257-5.915,12.283c24.292,69.517,90.125,116.229,163.812,116.229C434.177,347.56,512,269.732,512,174.078
			S434.177,0.595,338.518,0.595z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="ml-autotext-[#d3d3cb]">
                  <span className="text-[#262626]">.</span>CAMA MATRIMONIAL
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-[#d3d3cb]">
                  <svg
                    className="w-5 h-5  dark:text-[#d3d3cb]"
                    fill="white"
                    width="800px"
                    height="800px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H56V96a8.00066,8.00066,0,0,0-13.65723-5.65723l-32,32a8.00122,8.00122,0,0,0,0,11.31446l32,32A8.00066,8.00066,0,0,0,56,160V136H96a8,8,0,0,0,0-16Zm149.65723,2.34277-32-32A8.00066,8.00066,0,0,0,200,96v24H160a8,8,0,0,0,0,16h40v24a8.00053,8.00053,0,0,0,13.65723,5.65723l32-32A8.00122,8.00122,0,0,0,245.65723,122.34277Z" />
                  </svg>
                </div>
                <span className="ml-autotext-[#d3d3cb]">
                  <span className="text-[#262626]">.</span>CAMA INDIVIDUAL
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-[#d3d3cb]">
                  <svg
                    className="w-4 h-4  dark:text-[#d3d3cb]"
                    fill="white"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 312.512 312.512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g id="Double_Arrow_Drop_Right">
                        <path
                          d="M140.675,147.638L140.675,147.638L20.733,27.443c-7.627-7.94-21.029-1.949-20.728,8.83v239.92
			c-0.289,10.731,13.017,16.554,20.632,8.927l120.026-120.291C145.415,160.077,145.415,152.378,140.675,147.638L140.675,147.638z
			 M24.126,247.249V65.206l90.829,91.021L24.126,247.249z"
                        />
                        <path
                          d="M308.967,147.758L308.967,147.758L308.967,147.758L189.025,27.563c-7.627-7.94-21.029-1.949-20.728,8.83v239.92
			c-0.289,10.731,13.017,16.554,20.632,8.926l120.026-120.291C313.695,160.197,313.695,152.498,308.967,147.758z M192.418,247.369
			V65.326l90.829,91.021L192.418,247.369z"
                        />
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </g>
                  </svg>
                </div>
                <span className="ml-autotext-[#d3d3cb]">
                  <span className="text-[#262626]">.</span>MONTAJE SENCILLO
                </span>
              </div>
              <div className="playfair-display-letras flex">
                <button className="flex ml-auto text-black bg-[#d3d3cb] border-0 py-2 px-2 focus:outline-none  rounded text-black">
                  <a
                    href="CATALOGO PREMIUM (1).pdf"
                    download="CatalogoLineaAirbnbPremuim.pdf"
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

export default PlaneAirbbpremuim;
