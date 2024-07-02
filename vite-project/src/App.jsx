import { Navbar } from './Componente/Navbar/navbar';
import PlaneAirbbStandar from './Componente/PlanesAirbb/PlaneAirbbStandar';
import PlaneAirbbpremuim from './Componente/PlanesAirbb/PlaneAirbbpremuim';
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
    </>
  );
}

export default App;
