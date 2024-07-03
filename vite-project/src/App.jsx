import { Navbar } from './Componente/Navbar/navbar';
import PlanSimple from './Componente/PLanesSingle/planSingle';
import PlaneAirbbStandar from './Componente/PlanesAirbb/PlaneAirbbStandar';
import PlaneAirbbpremuim from './Componente/PlanesAirbb/PlaneAirbbpremuim';
import PlaneCouple from './Componente/PlanesCouple/planCouple';
import Nosotros from './Componente/SobreNosotros/Nosotos';
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
    </>
  );
}

export default App;
