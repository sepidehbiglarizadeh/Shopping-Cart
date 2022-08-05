import styles from "./Product.module.css";
// import { BiTrash } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Product = ({product}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={product.image} alt="product"></img>
        <div className={styles.description}>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className={styles.quantity}>
        <button>-</button>
        <span>{product.quantity}</span>
        <button>+</button>
      </div>
      <button className={styles.remove}><IoIosClose size={20}/></button>
      <span className={styles.price}>${product.price}</span>
    </div>
  );
};

export default Product;
