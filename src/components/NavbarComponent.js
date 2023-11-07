import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { register } from '../firebaseConfig';
import { getDatabase, ref, get } from "firebase/database";

function NavbarComponent(props) {


  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const clear=()=>{
    document.getElementById("myForm").reset();
}



  const logout=async()=>{
		try {
			props.setCurrentAccount("");
      Cookies.remove('username');
      Cookies.remove('phoneNumber');
   
		  } catch (err) {
			console.log(err);
		  }
	  }

    const loginhandle= async()=>{

      const db = getDatabase();
      const userRef = ref(db, 'users/' + phoneNumber);
      const userSnapshot = await get(userRef);
      const userData = userSnapshot.val();

      if (!userData) {
        alert("Login Failed ")
      }
      else{
        if(userData.password===password && userData.phoneNumber===phoneNumber){
          setShowModal1(false);
          props.setCurrentAccount(userData.username);
          Cookies.set('username', userData.username);
          Cookies.set('phoneNumber', userData.phoneNumber);
          
          alert("Login successfully , please close login window")
          
          console.log(showModal1)
          clear();
        }
        else{
          setShowModal1(false);
          alert("Login Failed")
        }
        
      }  
  }

    function registerhandle(){
      if(username && password){
        register(phoneNumber, username, email,password);
        clear();
        setShowModal2(false)
        
      }else{
        alert("Failed to register")
      }
    }



  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          CafetTera
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link ml-lg-5" to="/">
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            {props.currentAccount ?<li class="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>:""}
          </ul>
          <form id="myForm" class="form-inline my-2 my-lg-0">
          {!props.currentAccount ?
          <>
            <button
              type="button"
              onClick={() => setShowModal1(true)}
              className="btn btn-outline-success"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setShowModal2(true)}
              className="btn btn-outline-success ml-2"
              data-toggle="modal"
              data-target="#exampleModal2"
            >
              Register
            </button></>:
            <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logout} >Logout</button>}
          </form>
        </div>
      </nav>

      <div
        className={`modal fade ${showModal2 ? 'show' : ''}`}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              <form id="myForm">
            
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* Additional login form fields can be added here */}
               
              </form>

              <div>
                
               
                <button
                  className="btn btn-success"
                  onClick={() => loginhandle()}
                >
                  Login
                </button>
              </div>

           
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
      className={`modal fade ${showModal1 ? 'show' : ''}`}
      
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Customer Register
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input type="email" className="form-control" id="username" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* Additional login form fields can be added here */}
               
              </form>

              <div>
                
             
                <button
                  className="btn btn-success"
                  onClick={() => registerhandle()}
                >
                  Customer Register
                </button>
              </div>

           
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
