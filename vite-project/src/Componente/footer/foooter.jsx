const Footer = () => {
  return (
    <footer className="bg-white text-[#262626] body-font mt-5">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col justify-center">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 text-3xl">
          <span className="text-red-500">K</span>
          <span className="text-yellow-500">T</span>
          <span className="text-blue-500">S</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 KTS —
          <a
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ktsrentals
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
