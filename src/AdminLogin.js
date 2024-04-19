import { useEffect, useState } from "react";
import getBase from "./api";
import axios from "axios";
import { NetworkError, showError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState()
  let [cookies, setCookie, removeCookie] = useCookies(['Atharv']);
 let navigate=useNavigate();
  let Verifylogin=function(e)
  { 
    e.preventDefault(); 
    console.log(email,password);
    let apiAddress=getBase()+"admin_login.php";
    console.log(apiAddress); 
    let form =new FormData();
    form.append("email",email);
    form.append("password",password);
    console.log(form);
    axios({
      method:'post',
      responseType:'json',
      url:apiAddress,
      data:form
    }).then((response)=>{
      console.log(response.data);
        // [0: Object { error: "no" }
      // 1: Object { success: "no" }
      // 2: Object { message: "Invalid Login Attempt " }]
    let error=response.data[0]['error'];
    if(error!=='no')
    // console.log(error)
      showError(error)
      else
      {
        let success=response.data[1]['success'];
        let message=response.data[2]['message'];
        if(success=='no')
        showError(message);
        //success login
        else
        {
          showMessage( message);
          let id=response.data[3]['id'];
          setCookie('adminid',id,{path:'/'})//create cookie
          //check whether cookies has been created or not
          console.log("admin id", cookies['adminid']);
        
          //set delay for 2 second
            setTimeout(() => {
              navigate("/admin-doctor-management");
            }, 2000);
        }
      }
    }
  ).catch((error)=>
      {
        NetworkError(error);
      })
  }
  return (<main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <ToastContainer/>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="d-flex align-items-center w-auto">
                  <img src="../logo.png" alt height="64px" />
                  <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                </a>
              </div>{/* End Logo */}
            </div>
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="py-1">
                    <h6 className="card-title text-center pb-0 fs-4">Admin Login</h6>
                  </div>
                  <form className="row g-3 needs-validation" onSubmit={Verifylogin} >
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Email</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" className="form-control" id="yourUsername" required
                          value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" id="yourPassword" required value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <p className="text-end">
                      <a href="admin-forgot-password.html">Forgot password</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  );
}