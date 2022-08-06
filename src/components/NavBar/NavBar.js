import { useProducts } from "../Provider/ProductsProvider";
import styles from "./NavBar.module.css"

const NavBar = () => {
    const products= useProducts();
    const totalItems= products.filter((p)=>p.quantity >0).length;
    return ( 
        <header className={styles.header}>
            <h1>My Shopping Cart</h1>
            <span className={styles.count}>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;