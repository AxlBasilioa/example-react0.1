import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// el componente de Navbar se importaria aqui, igual que todos los demas componentes que requieran
//para mas info, visualizar el archivo Navbar.tsx
import Navbar from './components/Navbar/Navbar';
import Pagina2 from './components/Pagina2/Pagina2';

function App() {
  return (
    <div>
      {/* AQUI VAS A IMPORTAR LOS COMPONENTES DE TU PAGINA EN ORDEN QUE OCUPES
      <Navbar/>
      <Landingpage/>
      <Footer/>
      etc
      */}
      {/* ejemplo de importacion de Navbar */}
      <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element="{<ComponenteEnturato/>}" />
          {/* los element van sin las comillas dobles, van entre llaves y el component, asi se mostrarán al interactuar con ellos */}
          <Route path="/Pagina2" element="{<ComponenteEnturato/>}" />
          <Route path="/Pagina3" element="{<ComponenteEnturato/>}" />
        </Routes>
        {/* aqui el componente Pagina2 Esta usando "props", para mas detalles leer el archivo Pagina2.tsx */}
        <Pagina2 campo1='ejemplo' campo2='prueba' campo3='lorem ipsum'/>
      </div>
      {/* para entender el enrutado de react, investiguen como funciona react-router-dom, BrowserRouter en react y Routes entre componentes en React */}
    </Router>
      {/* asi se verian los componentes, al cargar la pagina se deberia de visualizar el componente de ejemplo
      recuerden eliminar o modificar este componente de prueba */}
    </div>
  );
}

export default App;
