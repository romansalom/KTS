import Faqs from './Componente/Faq/faqs';
import { Navbar } from './Componente/Navbar/navbar';
import PlanSimple from './Componente/PLanesSingle/planSingle';
import PlaneAirbbStandar from './Componente/PlanesAirbb/PlaneAirbbStandar';
import PlaneAirbbpremuim from './Componente/PlanesAirbb/PlaneAirbbpremuim';
import PlaneCouple from './Componente/PlanesCouple/planCouple';
import Nosotros from './Componente/SobreNosotros/Nosotos';
import Contacto from './Componente/contacto/contacto';
import Footer from './Componente/footer/foooter';
import Header from './Componente/heder/heder';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <section id="nosotros">
        <Nosotros />
      </section>
      <section id="productos">
        <PlaneAirbbStandar />
        <PlaneAirbbpremuim />
        <PlaneCouple />
        <PlanSimple />
      </section>
      <div className="bg-[#262626]" id="contacto">
        <Faqs />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;
