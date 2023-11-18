import './index.css';
import './css/rest.css';
import './css/header.css';
import './css/products.css';
import './css/typeOfWork.css';
import './css/conditions.css';
import './css/example.css';
import './css/clients.css';
import './css/makeOrder.css';
import './css/map.css';
import './css/footer.css';
import './css/banner.css'
import Header from './components/Header';
import Products from './components/Products';
import TypeOfWork from './components/TypesOfWork';
import Conditions from './components/Conditions';
import Example from './components/Example';
import Clients from './components/Clients';
import MakeOrder from './components/MakeOrder';
import Map from './components/Map';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Products />
      <TypeOfWork />
      <Conditions />
      <Example />
      <Clients />
      <MakeOrder />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
