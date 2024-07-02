import ImageComparisonSlider from '../../Componente/SwipeImage/swipe';
import '../../App.css';

function Header() {
  return (
    <div className="playfair-display-letras bg-[#262626] text-[#d3d3cb]">
      <br></br>
      <br></br>

      <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto md:mt-0">
        <div className="md:h-[400px] bg-[#262626]">
          <div className="md:relative md:top-10">
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
          <p className="text-base md:text-lg mt-4 mb-10">
            KTS, Soluciones para compradores
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Header;
