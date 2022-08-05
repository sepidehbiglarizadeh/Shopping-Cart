import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Product = ({product,onIncrement,onDecrement,onDelete}) => {
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
        <button className={styles.decrement} onClick={onDecrement}>{product.quantity>1 ? "-": <BiTrash/>}</button>
        <span>{product.quantity}</span>
        <button className={styles.increment} onClick={onIncrement}>+</button>
      </div>
      <button className={styles.remove} onClick={onDelete}><IoIosClose size={20}/></button>
      <span className={styles.price}>${product.price}</span>
    </div>
  );
};

export default Product;
