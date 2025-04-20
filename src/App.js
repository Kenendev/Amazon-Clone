
// import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './Carousel/CarouselEffect';
import CarouselEffect from './Carousel/CarouselEffect';
import Category from './components/Category/Category';
import CategoryCard from './components/Category/CategoryCard';


function App() {
  return (
    <div className="App">
    <Header/>
    <CarouselEffect/>
    {/* <CategoryCard/> */}
    <Category/>
    

    </div>
  );
}

export default App;
