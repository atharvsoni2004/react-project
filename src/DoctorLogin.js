import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import getBase from "./api";
import { ToastContainer } from "react-toastify";
import { showError, showMessage, NetworkError } from "./toast-message";

export default function DoctorLogin() {

    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let navigate = useNavigate();
    let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
    let verifylogin = function (e) {
        e.preventDefault();
        console.log(email, password);
        let form = new FormData();
        form.append("email", email);
        form.append("password", password);
        //  console.log(form);
        let apiAddress = getBase() + "doctor_login.php";
        //    console.log(apiAddress);
        axios({
            method: 'post',
            url: apiAddress,
            responseType: "json",
            data: form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    let doctorid = response.data[3]['id'];
                    setCookie("doctorid", doctorid)
                    console.log(cookies['doctorid']);
                    //pause code for 3 seconds
                    setTimeout(() => {
                        navigate("/admin-appointments/" + doctorid);
                    }, 2000);
                }
            }
        }).catch((error) => {
            console.log(error);
            NetworkError(error);
        })
    }
    return (
        <main>
            <div className="container">
                <ToastContainer />
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="d-flex align-items-center w-auto">
                                        <img src="../logo.png" alt="" height="64px" />
                                        <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="py-1">
                                            <h6 className="card-title text-center pb-0 fs-4">Login</h6>
                                        </div>
                                        <form className="row g-3 needs-validation" onSubmit={verifylogin}>
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="email" name="email" className="form-control" id="yourUsername"
                                                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword"
                                                    value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            </div>
                                            <div className="col-12 d-flex justify-content-between">
                                                <button className="btn btn-primary w-100" type="submit">Doctor Login</button>&nbsp;
                                                <button className="btn btn-success w-100" type="submit">Assistant Login</button>
                                            </div>
                                            <p className="text-end">
                                                <a href="doctor-forgot-password.html">Forgot password</a>
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