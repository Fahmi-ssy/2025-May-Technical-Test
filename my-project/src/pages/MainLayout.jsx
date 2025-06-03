import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function MainLayout( ) {
  return (
    <div >
      <Navbar />
      <br />
      <br />
      <Outlet />
      <br />
      <br />
      <Footer />     
    </div>
  );
}