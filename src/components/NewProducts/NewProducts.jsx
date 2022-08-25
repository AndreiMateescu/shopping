import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./NewProducts.css";

function NewProducts() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  const addProduct = () => {
    const newProducts = [...products];
    newProducts.push(text);
    setProducts(newProducts);
    setText("");
  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  // const delete = (event) => {

  // }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <div>
            <li>{product}</li>
            <Button variant="outlined" size="small" sx={{ marginLeft: "40px" }}>
              X
            </Button>
          </div>
        ))}
      </ul>
      <br />
      <br />
      <TextField
        label="Type your product"
        color="primary"
        focused
        value={text}
        onChange={changeText}
      />
      <Button
        variant="outlined"
        size="large"
        sx={{ marginLeft: "20px" }}
        onClick={addProduct}
      >
        Add product
      </Button>
    </div>
  );
}

//paranteze

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [...arr];
// const arr3 = Object.assign({}, arr);
// arr[1] = 12;
// console.log(arr3[1]);

export default NewProducts;
