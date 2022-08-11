import Suppliers from './antDesignSample/Suppliers';
import AddCategory from './apiOperations/AddCategory';
import CategoryList from './apiOperations/CategoryList';
import OrderList from './apiOperations/OrderList';
import './App.css';
import CartProvider from './contexts/CartContext';
import ProductPage from './contextSample/ProductPage';
import TodoProvider from './contextSample/todosample/TodoContext';
import TodoList from './contextSample/todosample/TodoList';
import TodoMain from './contextSample/todosample/TodoMain';
import CategoryPage from './serviceSample/CategoryPage';
import StateSample7 from './stateSample/StateSample7';
import StateSample8 from './stateSample/StateSample8';
import TodoApp from './stateSample/TodoApp';
import 'antd/dist/antd.css';
function App() {
  return (
        
        
        <TodoProvider>

        <Suppliers />
        </TodoProvider>
        
       
      
    
  );
}

export default App;

