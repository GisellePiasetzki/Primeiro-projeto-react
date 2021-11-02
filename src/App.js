import Header from './components/Header';
import Banner from './components/Header/Banner';
import Ciclismo from './components/Ciclismo';
import Galeria from './components/Galeria';
import Footer from './components/Footer';


import './App.css';



//aqui eu monto a estrutura base do site, divimos o que é para ter na nossa tela, vamos colocando os componentes
function App() {
  return (
    <div >
    <Header /> 

    <main>
      <Banner/>
      <Ciclismo/>
      <Galeria/>
    </main>
    <Footer/>

    </div>
  );
}

export default App;
