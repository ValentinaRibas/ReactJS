import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Card from './components/TA1-TA2/Card';
// import { Heading } from 'react-bulma-components';
// import TA3 from './components/TA3';
// import TA4 from './components/TA4';
// import TA6 from './components/TA6';
// import TA7 from './components/TA7';
// import TA8 from './components/TA8';
// import TA9 from './components/TA9';
// import TA10 from './components/TA10';
// import { UserProvider } from './components/TA13/Context';
// import Usuario from './components/TA13/Usuario';
// import { TemaProvider } from './components/TA14/Context';
// import GestorTemas from './components/TA14/GestorTemas';
// import { IdiomaProvider } from './components/TA15/ContextoIdioma';
// import { TemaProvider } from './components/TA15/ContextoTema';
// import GestorTemasIdioma from './components/TA15/GestorTemasIdioma';
// import Home from './components/TA16/Home';
// import About from './components/TA16/About';
// import Contact from './components/TA16/Contact';
// import Navbar from './components/TA16/Navbar';
import Product from './components/TA17/Product';

function App() {
  return (
    <Router>
    <div className="App">
        {/* <Card>
            <Heading size="5">Título: Card1</Heading>
            <p>Descripción: Descripción de card1</p>
            <p>Asignado a: Persona1</p>
            <p>Fecha inicio: 2024-09-23</p>
            <p>Fecha fin: 2024-09-30</p>
        </Card>
        <Card>
            <Heading size="5">Título: Card2</Heading>
            <p>Descripción: Descripción de card2</p>
            <p>Asignado a: Persona2</p>
            <p>Fecha inicio: 2024-09-23</p>
            <p>Fecha fin: 2024-09-30</p>
        </Card><Card>
            <Heading size="5">Título: Card3</Heading>
            <p>Descripción: Descripción de card3</p>
            <p>Asignado a: Persona3</p>
            <p>Fecha inicio: 2024-09-23</p>
            <p>Fecha fin: 2024-09-30</p>
        </Card> */}
        {/*<TA10></TA10>*/}
        {/* <UserProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Usuario />
      </div>
    </UserProvider> */}
{/* <TemaProvider>
      <div>
        <GestorTemas />
      </div>
    </TemaProvider> */}
    {/* <TemaProvider>
      <IdiomaProvider>
        <div>
          <GestorTemasIdioma />
        </div>
      </IdiomaProvider>
    </TemaProvider> */}
    {/*<Navbar />*/}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
