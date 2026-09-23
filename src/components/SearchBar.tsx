import { useState } from "react";
import styles from "./SearchBar.module.css";

interface Props {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <div className={styles["search-bar"]}>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleSearch();
        }}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
