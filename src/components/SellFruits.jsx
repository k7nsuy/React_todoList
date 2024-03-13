import { useState } from "react";

function Catagory({ catagory }) {
  return (
    <>
      <tr>
        <th colSpan="2">{catagory}</th>
      </tr>
    </>
  );
}

function Product({ products }) {
  const productName = products.stocked ? (
    products.name
  ) : (
    <span style={{ color: "red" }}>{products.name}</span>
  );
  return (
    <tr>
      <td>{productName}</td>
      <td>{products.price}</td>
    </tr>
  );
}

function Search({ inStockOnly, filterText, onTextChange, onInStockOnly }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <label>
        <input
          checked={inStockOnly}
          type="checkbox"
          onChange={(e) => onInStockOnly(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

function ProductsList({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCagory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.catagory !== lastCagory) {
      rows.push(
        <Catagory key={product.catagory} catagory={product.catagory} />
      );
    }
    rows.push(<Product key={product.name} products={product} />);
    lastCagory = product.catagory;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ListOfFruits({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <ProductsList
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <Search
        filterText={filterText}
        inStockOnly={inStockOnly}
        onTextChange={setFilterText}
        onInStockOnly={setInStockOnly}
      />
    </>
  );
}

const fruits = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  {
    category: "Fruits",
    price: "$2",
    stocked: false,
    name: "Passionfruit",
  },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export function Fruits() {
  return (
    <>
      <ListOfFruits products={fruits} />
    </>
  );
}
