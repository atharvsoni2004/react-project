import { useState } from "react";
import  axios  from "axios";
import getBase from "./api";
import { NetworkError, showError, showMessage } from './toast-message';
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function DoctorRegister() {
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [mobile, setMobile] = useState();
    let [regno, setRegno] = useState();
    let [password, setPassword] = useState();
    let [confirmpassword, setConfirmpassword] = useState();
    let navigate=useNavigate();
    let doctorRegister = function (e) {
        e.preventDefault();
        console.log(name, email, mobile, regno, password, confirmpassword);
        let apiAddress=getBase()+"doctor_register.php"  
      let form= new FormData();  
      form.append("name",name);
      form.append("email",email);
      form.append("password",password);
      form.append("confirmpassword",confirmpassword);
      form.append("contactno",mobile);
      form.append("regno",regno);
    //   console.log(form);
        axios({
            url:apiAddress,
            method:'post',
            responseType:'json',
            data:form
        }).then((response)=>{
            console.log(response);
            console.log(response.data);
            let error=response.data[0]['error'];
            if(error!=='no')
            showError(error); 
            else {
            let success=response.data[1]['success'];
            let message=response.data[2]['message'];
               if(success!=='yes')
               showError(message);
            else
            {
                showMessage(message);
                setTimeout(() =>{
                    navigate("/login");
                },3000);
            }
        }
        })
    }
    return (
        <main>
            <div className="container">
                <ToastContainer/>
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="d-flex align-items-center w-auto">
                                        <img src="../logo.png" alt height="64px" />
                                        <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                                    </a>
                                </div>{/* End Logo */}
                            </div>
                            <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="py-1">
                                            <h5 className="card-title text-center pb-0 fs-4">Register as Doctor</h5>
                                        </div>
                                        <form className="row" onSubmit={doctorRegister} >
                                            <div className="col-sm-6 col-12">
                                                <label htmlFor="yourName" className="form-label">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="yourName" value={name}
                                                    onChange={(e) => setName(e.target.value)} required />
                                                <div className="invalid-feedback">Please, enter your name!</div>
                                            </div>
                                            <div className="col-sm-6 col-12">
                                                <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                <input type="email" name="email" className="form-control" id="yourEmail" value={email}
                                                    onChange={(e) => setEmail(e.target.value)} required />
                                                <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                                            </div>
                                            <div className="col-sm-6 col-12 mt-sm-2">
                                                <label htmlFor="yourName" className="form-label">Your Mobile</label>
                                                <input type="text" name="mobile" className="form-control" id="yourName" value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)} required />
                                                <div className="invalid-feedback">Please, enter your name!</div>
                                            </div>
                                            <div className="col-sm-6 col-12 mt-sm-2">
                                                <label htmlFor="yourEmail" className="form-label">Your Registeration No</label>
                                                <input type="email" name="email" className="form-control" id="yourEmail" value={regno}
                                                    onChange={(e) => setRegno(e.target.value)} required />
                                                <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                                            </div>
                                            <div className="col-sm-6 col-12 mt-sm-2">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" value={password}
                                                    onChange={(e) => setPassword(e.target.value)} required />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <div className="col-sm-6 col-12 mt-sm-2">
                                                <label htmlFor="yourPassword" className="form-label">Confirm Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" value={confirmpassword}
                                                    onChange={(e) => setConfirmpassword(e.target.value)} required />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <div className="col-12 px-3 pb-2">
                                        <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                    </div>
                                        </form></div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section></div>
        </main>
    );
}