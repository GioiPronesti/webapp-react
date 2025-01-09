import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


function DefaultLayouts(){

    return <>
        <Header/>
         <main className="flex-grow">
           <Outlet />
         </main> 
         <Footer/>
     </>
    

   
}

export default DefaultLayouts