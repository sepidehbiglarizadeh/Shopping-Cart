import Filter from "./components/Filter/Filter";
import NavBar from "./components/NavBar/NavBar";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsProvider from "./components/Provider/ProductsProvider";

const App = () => {
    return ( 
        <ProductsProvider>
            <NavBar/>
            <Filter/>
            <ProductsList/>
        </ProductsProvider>
     );
}
 
export default App;