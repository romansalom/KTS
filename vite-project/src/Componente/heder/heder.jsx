import ImageComparisonSlider from '../../Componente/SwipeImage/swipe';
import '../../App.css';

function Header() {
  return (
    <div className="playfair-display-letras bg-[#262626] text-[#d3d3cb]">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto md:mt-0">
        <div className="md:h-[400px] bg-[#262626]">
          <div className="md:relative md:top-20">
            <div className="md:w-full w-[90%] mx-auto md:mt-0 mt-10">
              <ImageComparisonSlider />
            </div>
          </div>
        </div>

        <div className="max-md:text-center">
          <h3
            className="md:text-3xl text-2xl md:leading-10 md:mt-20"
            data-aos="typed"
          >
            Transformamos tu espacio vacío en un departamento, moderno, estético
            y funcional.
          </h3>
          <div className="mt-10">
            <h4 className="font-bold text-base mb-2">
              Comunicate con nosotros
            </h4>
            <div className="flex items-center bg-white rounded border border-white overflow-hidden md:w-full w-[80%] mx-auto md:w-12/12">
              <input
                name="name"
                type="text"
                className="flex-1 w-full bg-transparent text-[#333] text-sm px-4 py-4 outline-none"
                placeholder="Tu email"
              />
              <button
                type="button"
                className="w-max px-6 py-4 text-sm tracking-wider font-semibold outline-none border-none bg-black text-white hover:bg-[#222] transition-all duration-300"
              >
                Enviar
              </button>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Header;
