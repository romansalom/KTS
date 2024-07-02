import { useState } from 'react';

import './styles.css';
const Planes = () => {
  const [activeTab, setActiveTab] = useState('description'); // Estado para controlar la pestaña activa

  // Función para cambiar la pestaña activa
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
                    class="w-45 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="ml-autotext-white">FUNCIONAL</span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <span className="text-white">Size</span>
                <span className="ml-autotext-white">Medium</span>
              </div>
              <div className="playfair-display-letras flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-white">Quantity</span>
                <span className="ml-autotext-white">4</span>
              </div>
              <div className="playfair-display-letras flex">
                <span className="title-font font-medium text-2xltext-white">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
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
    </div>
  );
};

export default Planes;
