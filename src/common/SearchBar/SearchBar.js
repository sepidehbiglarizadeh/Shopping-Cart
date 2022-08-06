import { useState } from "react";
import { useProductsActions } from "../../components/Provider/ProductsProvider";
import styles from "./SearchBar.module.css"

const SearchBar = ({filter}) => {
    const [value,setValue]=useState("");
    const dispatch= useProductsActions();

    const changeHandler=(e)=>{
        dispatch({type:"filter",selectedOption:filter})
        dispatch({type:"search",event:e})
        setValue(e.target.value);
    }

    return ( 
        <div className={styles.searchBar}>
            <p>Search:</p>
            <input type="text" placeholder="Search For..." onChange={changeHandler} value={value} />
        </div>
     );
}
 
export default SearchBar;