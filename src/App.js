import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Contact from "./components/Contact";
import About from "./components/About";
 
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Routes exat path="/" element={<ProductList/>}/>
              <Routes path="/about" element={<About/>}/>
              <Routes path="/contact" element={<Contact/>}/>
              <Routes path="/add" element={<AddProduct/>}/>
              <Routes path="/edit/:id" element={<EditProduct/>}/>

            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}
 
export default App;