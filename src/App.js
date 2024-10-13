import React, { useState, useEffect } from "react";
import "./App.css";
import "./product.js"
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineFile,
  AiOutlineBarChart,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlinePlusCircle,
  AiOutlineDown,
  AiOutlineDollarCircle,
  AiOutlineUsergroupAdd,
  AiOutlineFileText,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const App = () => {
  const [revenue, setRevenue] = useState(2810);
  const [totalEarn, setTotalEarn] = useState(81020);
  const [salesToday, setSalesToday] = useState(120);
  const [totalOrders, setTotalOrders] = useState(102);
  const [visitorToday, setVisitorToday] = useState(81020);
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreEjXJ--zTpWR4bUqyNqe5Z7XtaAIwKDmkA&s",
      name: "T-SHIRT OWN THE RUN",
      price: 46.52,
      status: "Available",
      sell: 128,
      view: 12308,
      earning: 5954,
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreEjXJ--zTpWR4bUqyNqe5Z7XtaAIwKDmkA&s",
       name: "T-SHIRT BOXY ADICOLOR CLASSIC",
      price: 48.76,
      status: "Out of stock",
      sell: 102,
      view: 14120,
      earning: 4973,
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreEjXJ--zTpWR4bUqyNqe5Z7XtaAIwKDmkA&s",
      name: "T-SHIRT ESSENTIALS 3-STRIPES",
      price: 48,
      status: "Out of stock",
      sell: 80,
      view: 10285,
      earning: 3840,
    },
    {
      id:  4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreEjXJ--zTpWR4bUqyNqe5Z7XtaAIwKDmkA&s",
      name: "T-SHIRT TREFOIL",
      price: 45.99,
      status: "Available",
      sell: 120,
      view: 12308,
      earning: 5519,
    },
  ]);

  useEffect(() => {
    // API call to fetch data
  }, []);

  const handleLogout = () => {
    // API call to logout
  };

  const handleAddProduct = () => {
    // API call to add product
  };

  const handleEditProduct = (id) => {
    // API call to edit product
  };

  const handleDeleteProduct = (id) => {
    // API call to delete product
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <AiOutlineHome />
            <span>Dashboard</span>
          </li>
          <li>
            <AiOutlineShoppingCart />
            <span>Orders</span>
          </li>
          <li>
            <AiOutlineFile />
            <span>Products</span>
          </li>
          <li>
            <AiOutlineBarChart />
            <span>Analytics</span>
          </li>
          <li>
            <AiOutlineUser />
            <span>Customers</span>
          </li>
          <li>
            <AiOutlineSetting />
            <span>Settings</span>
          </li>
          <li onClick={handleLogout}>
            <AiOutlineLogout />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
      <main>
        <header>
          <h1>Dashboard</h1>
          <button onClick={handleAddProduct}>
            <AiOutlinePlusCircle />
            Add Product
          </button>
        </header>
        <section>
          <h2>Overview</h2>
          <div id="para">
            <p>
              Revenue: <span>${revenue}</span>
            </p>
            <p>
              Total Earn: <span>${totalEarn}</span>
            </p>
            <p>
              Sales Today: <span>{salesToday}</span>
            </p>
            <p>
              Total Orders: <span>{totalOrders}</span>
            </p>
            <p>
              Visitor Today: <span>{visitorToday}</span>
            </p>
          </div>
        </section>
        <section>
          <h2>Products</h2>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Sell</th>
                <th>View</th>
                <th>Earning</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.status}</td>
                  <td>{product.sell}</td>
                  <td>{product.view}</td>
                  <td>${product.earning}</td>
                  <td>
                    <button onClick={() => handleEditProduct(product.id)}>
                      <AiOutlineDown />
                      Edit
                    </button>
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      <AiOutlineCloseCircle />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};


export default App;