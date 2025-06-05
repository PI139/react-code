import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import Home from './Home';
import store from "./demo/REDUX";
import Header from './Header';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Contectus from './Contectus';
import Saleus from './Saleus';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Mui from './Mui';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HOOKS from "./demo/HOOKS";
// import ONchange from "./demo/ONchange";
// import ONCLICK from "./demo/ONCLICK";
// import COUNT from "./demo/COUNT";
// import MEMO from "./demo/MEMO";
// import Component1 from "./demo/Component1";
// import APIMAP from "./demo/APIMAP";
// import INSERT from "./demo/INSERT";
// import DELETE from "./demo/DELETE";
// import UPDATE from "./demo/UPDATE";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <>
       
               <BrowserRouter>
                     <Header />
                     <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<Aboutus />} />
                            <Route path="/contect" element={<Contectus />} />
                            <Route path="/Sale" element={<Saleus />} />
                            <Route path="/Login" element={<Login />} />
                     </Routes>
                     <Footer/>
              </BrowserRouter>  
              {/* <provider store={store}>
                     <Home/>
              </provider> */}
              
              {/* <Mui/> */}
              {/* <HOOKS/> */}
              {/* <ONchange/> */}
              {/* <ONCLICK/> */}
              {/* <COUNT/> */}
              {/* <MEMO/> */}

              {/* <Component1/> */}
              {/* <APIMAP/> */}
              {/* <INSERT/> */}
              {/* <DELETE/> */}
              {/* <BrowserRouter> */}
                     {/* <Routes> */}
                            {/* <Route path="/" element={<APIMAP />} /> */}
                            {/* <Route path="/" element={<Home />} /> */}
                            {/* <Route path="/INSERT" element={<INSERT />} /> */}
                            {/* <Route path="/DELETE" element={<DELETE />} /> */}
                            {/* <Route path="/UPDATE/:id" element={<UPDATE />} /> */}
                     {/* </Routes> */}
              {/* </BrowserRouter>, */}


              
       </>
)