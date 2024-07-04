import { useState } from 'react';
import '../../App.css';

export const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    {
      title: 'Nosotros',
      path: 'javascript:void(0)',
      hoverClass: 'hover:border-red-500',
    },
    {
      title: 'Productos',
      path: 'javascript:void(0)',
      hoverClass: 'hover:border-yellow-500',
    },
    {
      title: 'Contacto',
      path: 'javascript:void(0)',
      hoverClass: 'hover:border-blue-500',
    },
  ];

  return (
    <nav className="playfair-display-letras bg-[#262626] w-full md:static md:text-base md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-1 md:py-2 md:block">
          <a href="javascript:void(0)" className="mx-auto md:mx-0">
            <img
              src="logokts.png"
              width={100}
              height={50}
              alt="Float UI logo"
              className="mx-auto md:mx-0"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0 md:justify-end md:items-center">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-white text-lg text-center md:text-left"
              >
                <a
                  href={item.path}
                  className={`block border-b-2 border-transparent ${item.hoverClass}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
