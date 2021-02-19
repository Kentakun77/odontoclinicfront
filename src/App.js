import './App.css';

import {useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";
import Home from "./components/Home";
import UsuarioDetail from "./components/ticket/UsuarioDetail";
import Login from "./components/staff/Login";
import RegisterStaff from "./components/staff/RegisterStaff";
import Profile from "./components/staff/Profile";

import {loadSTaff} from "./actions/staffActions";
import store from "./store";

function App() {

    useEffect(()=>{
        store.dispatch(loadSTaff())
    }, [])
  return (
      <Router>
          < div className="App">
              <Header />
              <div className="container container-fluid">
                  <Route path ="/" component={Home} exact/>
                  <Route path ="/admin/user/:id" component={UsuarioDetail} exact/>
                  <Route path ="/search/:keyword" component={Home}/>

                  <Route path="/login" component={Login}/>
                  <Route path="/registrar" component={RegisterStaff}/>
                  <Route path="/perfil" component={Profile} exact/>
              </div>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
