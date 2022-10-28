import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/index'
import SignUp from './Pages/signUp'
import SignIn from './Pages/signIn'
import SellTicket from './Pages/sellTicket'
import Header from './Components/NavBars/Header/header'
import Footer from './Components/NavBars/Footer/footer'
import './Styles/Global/App.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sell-ticket" element={<SellTicket/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
