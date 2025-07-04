import React, { useEffect, useState } from "react";

const Output = () => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedFilm, setSelectedFilm] = useState({});

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
    const name = data?.products?.find((item)=>item.title===event.target.value);    
    setSelectedFilm(name)
  };

  useEffect(() => {
    const resp = fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((err) => console.log("err", err));

    console.log("resp", resp);
  }, []);

  console.log("data", data);

  return (
    <>
      <p>Hello</p>
      <label htmlFor="product-select">Choose a fruit:</label>
      <select
        id="product-select"
        value={selectedValue}
        onChange={handleOptionChange}
      >
        <option value="">-- Please choose an option --</option>
        {data?.products?.map((option) => (
          <option key={option.title} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
      <p>You selected: {selectedValue}</p>
      <img src={Object.keys(selectedFilm).length ? selectedFilm?.images[0] : null} height="200" width="200" alt="logo" />
    </>
  );
};

export default Output;
