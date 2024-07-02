import './styles.css';
const PlaneAirbbStandar = () => {
  return (
    <div className="contenedore-zoomes bg-[#262626]">
      {' '}
      <section className="text-white body-font overflow-hidden">
        <div className="relative z-10"></div>

        <div className="container px-5 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="playfair-display-letras text-sm title-font text-white tracking-widest">
                Linea{' '}
              </h2>
              <h1 className="playfair-display-letras text-white text-3xl title-font font-medium mb-4">
                Airbnb Standard{' '}
              </h1>

              <p className="playfair-display-letras leading-relaxed mb-4">
                Soluciones económicas y atractivas para que tu departamento se
                destaque en las plataformas de alquiler temporario
              </p>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-white">
                  <svg
                    className="w-45 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="ml-autotext-white">FUNCIONAL</span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-white">
                  <svg
                    fill="white"
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    viewBox="0 0 32 32"
                    width="24"
                    height="24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.966 1.232c-0.97 0.021-1.901 0.261-2.807 0.655l1.404 2.62c0.463-0.165 0.937-0.277 1.404-0.281 1.599 0 3.292 0.853 4.585 3.088l5.333 9.264 1.778-2.901-4.491-7.86c-1.714-2.964-4.434-4.608-7.205-4.585 0 0 0 0 0 0zM7.171 8.811l-4.117 7.205c-1.569 2.715-1.68 5.792-0.374 8.234 0.541 1.012 1.362 1.842 2.339 2.526l1.497-2.526c-0.502-0.397-0.929-0.867-1.216-1.403-0.781-1.46-0.831-3.41 0.281-5.334l5.053-8.702h-3.462zM27.194 21.536c-0.098 0.48-0.239 0.896-0.468 1.311-0.801 1.448-2.372 2.526-4.866 2.526h-10.199l1.778 2.994h8.421c3.402 0 6.146-1.601 7.486-4.023 0.472-0.855 0.732-1.824 0.842-2.807l-2.994 0zM11.272 12.6l-6.728-3.879 6.728-3.879-0 7.759zM22.219 15.005l6.728 3.879 0-7.759-6.729 3.879zM8.193 26.81l6.728-3.879 0 7.759-6.729-3.879z"></path>
                  </svg>
                </div>
                <span className="ml-autotext-white">
                  <span className="text-[#262626]">.</span>UPCYCLE
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-white">
                  <svg
                    className="w-4 h-4  dark:text-white"
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
                <span className="ml-autotext-white">
                  <span className="text-[#262626]">.</span>FLEXIBLE
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-white">
                  <svg
                    className="w-5 h-5  dark:text-white"
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
                <span className="ml-autotext-white">
                  <span className="text-[#262626]"></span>FLEXIBLE
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-white">
                  <svg
                    className="w-4 h-4  dark:text-white"
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
                <span className="ml-autotext-white">
                  <span className="text-[#262626]">.</span>CAMA MATRIMONIAL
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-white">
                  <svg
                    className="w-5 h-5  dark:text-white"
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
                <span className="ml-autotext-white">
                  <span className="text-[#262626]">.</span>CAMA INDIVIDUAL
                </span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <div className="text-white">
                  <svg
                    className="w-4 h-4  dark:text-white"
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
                <span className="ml-autotext-white">
                  <span className="text-[#262626]">.</span>MONTAJE SENCILLO
                </span>
              </div>
              <div className="playfair-display-letras flex">
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Estoy interesado !
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

export default PlaneAirbbStandar;
