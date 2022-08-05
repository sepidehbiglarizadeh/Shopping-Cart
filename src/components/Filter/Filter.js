import { useState } from "react";
import SelectComponent from "../../common/Select/Select";
import { useProductsActions } from "../Provider/ProductsProvider";
import styles from "./Filter.module.css";

const filterOptions = [
  { value: "", label: "All" },
  { value: "Clothes", label: "Clothes" },
  { value: "Jewerly", label: "Jewerly" },
  { value: "Electronics", label: "Electronics" },
];

const sortOptions = [
  { value: "Highest", label: "Highest" },
  { value: "Lowest", label: "lowest" },
];

const Filter = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useProductsActions();

  const filterHandler = (selectedOption) => {
    setFilter(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption });
  };

  const sortHandler = (selectedOption) => {
    setSort(selectedOption);
    dispatch({ type: "sort", selectedOption });
  };

  return (
    <div className={styles.container}>
      <div>Search box</div>
      <div className={styles.filter}>
        <SelectComponent
          title="Filter by:"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />
        <SelectComponent
          title="Sort by:"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </div>
  );
};

export default Filter;
