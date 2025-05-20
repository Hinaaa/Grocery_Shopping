import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home.tsx";
import Cart from "./page/Cart.tsx";
import NavBar from "./component/NavBar.tsx";

export default function App() {

  return (
      <>
        <NavBar />

        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/cart"} element={<Cart/>}/>
        </Routes>
      </>
)

}
