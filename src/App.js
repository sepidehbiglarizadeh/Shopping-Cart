import NavBar from "./components/NavBar/NavBar";
import ProductsProvider from "./components/Provider/ProductsProvider";

const App = () => {
    return ( 
        <ProductsProvider>
            <NavBar/>
        </ProductsProvider>
     );
}
 
export default App;