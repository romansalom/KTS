import { Navbar } from './Componente/Navbar/navbar';
import Planes from './Componente/Planes/Planes';
import Nosotros from './Componente/SobreNosotros/Nosotos';
import Header from './Componente/heder/heder';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Nosotros></Nosotros>
      <Planes></Planes>
    </>
  );
}

export default App;
