import './App.css';
import { useEffect, useState } from 'react';
import makeUp_Products from './files/maquillaje';
import nyx from './files/nyx';
import maybelline from './files/maybelline';
import loreal from './files/loreal';
import anastasia from './files/anastasia';
import dior from './files/dior';
import logo1 from './Make.png';
import Destacados from './components/Destacados';
import Nyx from './components/Nyx';
import Loreal from './components/Loreal';
import Maybelline from './components/Maybelline';
import Anastasia from './components/Anastasia';
import Dior from './components/Dior';
import Clusters from './components/Clusters';
import { Helmet } from 'react-helmet';


function App() {

  const [rows, setRows] = useState([]);
  const [nyxProds, setNyxProds] = useState([]);
  const [lorealProds, setLorealProds] = useState([]);
  const [maybellineProds, setMaybellineProds] = useState([]);
  const [anastasiaProds, setAnastasiaProds] = useState([]);
  const [diorProds, setDiorProds] = useState([]);

  useEffect(() => {
    setRows(makeUp_Products);
    setNyxProds(nyx);
    setLorealProds(loreal);
    setMaybellineProds(maybelline);
    setAnastasiaProds(anastasia);
    setDiorProds(dior);
  },[]);

  return (
    <div className="App">
      <Helmet>
        <title>MakeUp Offers</title>
        <meta property="og:title" content="MakeUp Offers" />
        <meta property="og:image" content="../miniatura.png" />
      </Helmet>
      <div className='productsContainer'>
        <div className='header'>
          <img src={logo1} alt='logo' className='logoImage'/>
          <div style={{display:'flex', flexDirection:'column'}}>
            <a href='#Categorias'><span className="categorias">Categorias</span></a>
          </div>          
        </div>
        <div className='intro' id='Categorias'>
          <p>
          !Bienvenid@ a Make up Offers! Aquí encontrarás productos de maquillaje en oferta! Nosotros buscamos los productos en oferta por ti y te los mostramos para que solo tengas que pulsar en el que te interese,
          y te redigirá a <strong>Amazon</strong>, para que puedas adquirirlo y tenerlo en tu casa mañana mismo! Muy pronto dispondrás también de secciones con ofertas de las marcas más conocidas!<strong> Si haces click en las imagenes de debajo te llevará directamente a sus productos en oferta!</strong>
          </p>
        </div>       
        <Clusters />
        <Destacados rows={rows} />
        <Nyx nyxProds={nyxProds} />
        <Loreal lorealProds={lorealProds} />
        <Maybelline maybellineProds={maybellineProds} />
        <Anastasia anastasiaProds={anastasiaProds} />
        <Dior diorProds={diorProds} />
      </div>      
    </div>
  );
}

export default App;
