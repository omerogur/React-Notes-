import AddCategory from './apiOperations/AddCategory';
import CategoryList from './apiOperations/CategoryList';
import OrderList from './apiOperations/OrderList';
import './App.css';
import CartProvider from './contexts/CartContext';
import ProductPage from './contextSample/ProductPage';
import CategoryPage from './serviceSample/CategoryPage';
import StateSample7 from './stateSample/StateSample7';
import StateSample8 from './stateSample/StateSample8';
import TodoApp from './stateSample/TodoApp';

function App() {
  return (
        
        
        <CartProvider>
        <ProductPage />
        </CartProvider>
       
      
    
  );
}

export default App;

