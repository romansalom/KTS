import Faqs from './Componente/Faq/faqs';
import { Navbar } from './Componente/Navbar/navbar';
import PlanSimple from './Componente/PLanesSingle/planSingle';
import PlaneAirbbStandar from './Componente/PlanesAirbb/PlaneAirbbStandar';
import PlaneAirbbpremuim from './Componente/PlanesAirbb/PlaneAirbbpremuim';
import PlaneCouple from './Componente/PlanesCouple/planCouple';
import Nosotros from './Componente/SobreNosotros/Nosotos';
import Contacto from './Componente/contacto/contacto';
import Header from './Componente/heder/heder';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Nosotros></Nosotros>
      <PlaneAirbbStandar></PlaneAirbbStandar>
      <PlaneAirbbpremuim></PlaneAirbbpremuim>
      <PlaneCouple></PlaneCouple>
      <PlanSimple></PlanSimple>
      <div className="bg-[#262626]">
        <Faqs></Faqs>
        <Contacto></Contacto>
      </div>
    </>
  );
}

export default App;
