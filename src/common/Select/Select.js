import Select from "react-select";
import styles from "./Select.module.css"

const SelectComponent = ({title,...rest}) => {
    return ( 
        <div className={styles.container}>
            <span>{title}</span>
            <Select {...rest} className={styles.select} />
        </div>
     );
}
 
export default SelectComponent;