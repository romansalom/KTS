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
          <h3 className="md:text-3xl text-2xl md:leading-10 md:mt-20">
            Transformamos tu espacio vacío en un departamento, moderno, estético
            y funcional.
          </h3>
          <div className="mt-10">
            <h4 className="font-bold text-base mb-2">
              Marcas con las que Trabajamos:
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
              <img
                src="data:image/png;base64,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"
                className="w-28 mx-auto md:w-auto"
                alt="google-logo"
              />
              <img
                src="https://sealy.com.ar/static/version1718018716/frontend/SommierCenter/sealy/es_AR/images/logo.svg"
                className="w-28 mx-auto md:w-auto"
                alt="facebook-logo"
              />
              <img
                src="logomeyer.png"
                className="w-28 mx-auto md:w-auto"
                alt="linkedin-logo"
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Header;
