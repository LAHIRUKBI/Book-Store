import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/signup'
import Navigation from './Components/Navigation'
import Shop_workers_Login from './Pages/Shop_workers_Login'
import Admin_Home from './Pages/Admin_Home'
import Employee_register from './Pages/Employee_register'
import Stockmanager_register from './Pages/Stockmanager_register'
import Vehicles_register from './Pages/Vehicles_register'
import Employee_view from './Pages/Employee_view'
import Book_manager_home from './Pages/Book_manager_home'
import Employee_home from './Pages/Employee_home'
import Staffmanager_home from './Pages/Staffmanager_home'
import Vehiclemanager_home from './Pages/Vehiclemanager_home'
import Deliverymanager_home from './Pages/Deliverymanager_home'
import Add_Book from './Pages/Add_Book'
import Add_stocks from './Pages/Add_stocks'
import View_product from './Pages/View_product'
import Product_update from './Pages/Product_update'
import Books from './Pages/Books'
import Footer from './Components/Footer'
import EmployeeProfile from './Pages/Employee_profile';
import BookDetails from './Pages/Book_details'
import Importance_of_Learning from './Pages/Importance_of_Learning'
import Learning_Makes_a_Person_Rich from './Pages/Learning_Makes_a_Person_Rich'
import Benefits_of_learning_to_read from './Pages/Benefits_of_learning_to_read'
import Payment from './Pages/Payment'
import Order from './Pages/Order'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop_workers_Login" element={<Shop_workers_Login />} />
      <Route path="/adminhome" element={<Admin_Home />} />
      <Route path="/employeeregister" element={<Employee_register />} />
      
      <Route path="/stockmanagerregister" element={<Stockmanager_register />} />
      <Route path="/vehiclesregister" element={<Vehicles_register />} />
      <Route path="/employeeview" element={<Employee_view />} />
      <Route path="/Book_manager_home" element={<Book_manager_home />} />
      <Route path="/employeehome" element={<Employee_home />} />
      <Route path="/staffmanagerhome" element={<Staffmanager_home />} />
      <Route path="/vehiclemanagerhome" element={<Vehiclemanager_home />} />
      <Route path="/deliverymanagerhome" element={<Deliverymanager_home />} />
      <Route path="/addbook" element={<Add_Book />} />
      <Route path="/addstock" element={<Add_stocks />} />
      <Route path="/productview" element={<View_product />} />
      <Route path="/updateproduct/:id" element={<Product_update />} />
      <Route path="/books" element={<Books />} />
      <Route path="/employee_profile/:username" element={<EmployeeProfile />} />
      <Route path="/book_details/:id" element={<BookDetails />} />
      <Route path="/importance_of_Learning" element={<Importance_of_Learning />} />
      <Route path="/learning_Makes_a_Person_Rich" element={<Learning_Makes_a_Person_Rich />} />
      <Route path="/benefits_of_learning_to_read" element={<Benefits_of_learning_to_read />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/order" element={<Order />} />


      
    </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}
