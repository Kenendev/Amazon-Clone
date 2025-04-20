
// import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './Carousel/CarouselEffect';
import CarouselEffect from './Carousel/CarouselEffect';
import Category from './components/Category/Category';

import Product from './components/Product/Product';
import ProductCard from './components/Product/ProductCard';


function App() {
  return (
    <div className="App">
    <Header/>
    <CarouselEffect/>
    <Category/>
    <Product/>
    

    </div>
  );
}

export default App;
