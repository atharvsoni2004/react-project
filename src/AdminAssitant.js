import Menu from "./Menu";
import { Link } from "react-router-dom";
import getBase from "./api";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import { NetworkError,showError } from "./toast-message";
import { ToastContainer } from "react-toastify";

export default function AdminAssitant() {
        let {doctorid} = useParams();
        console.log(doctorid);
        //create state array
        let [assistants,setAssistant] = useState([]);
        //create state variable
        let [doctorname,setDoctorName] = useState();

       let displayAssistant=function(item)
        {
            return(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                <a title="edit assitant" href="doctor-edit-assitant.html"><i className="fa fa-pencil fa-2x" /></a>
                <a title="remove assitant" href="#"><i className="fa fa-trash fa-2x" /></a>
            </td>
                </tr>
            )
        }

        let assistantnotfound=function()
        {
            return(<tr><td colSpan='4' className="text-center text-danger fs-3">No Assitant Added</td></tr>)
        }

        useEffect(()=>
        {
            let apiAddress=getBase()+"assitant.php?doctorid="+  doctorid;
            console.log(apiAddress);
            //axios calling
            axios({
                url:apiAddress,
                method:'get',
                responseType:'json',    
            }).then((response) => {
                console.log(response.data);
                
                let error = response.data[0]['error'];
                if (error !== 'no')
                   { showError(error);}
                else if (response.data[1]['total'] === 0)
                   { showError('no assistant found');}
                else {
                    response.data.splice(0, 2);
                    setAssistant(response.data);
                    setDoctorName(response.data[0]['name']);
                }
            })
        })
    return (
        <>
            <Menu />
            {/* functional components */}
            <main id="main" className="main">
                <ToastContainer/>
                <div className="pagetitle">
                    <h1>
                        Doctor Management
                    </h1>
                </div>{/* End Page Title */}
                <div className="card shadow">
                    <div className="card-header text-bg-primary d-flex justify-content-between">
                        <h5>Assitant of  {doctorname}</h5>
                        <Link to="/doctor-add-assistant" className="btn btn-light">Add Assitant <i className="fa fa-save" /></Link>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Sr no</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {(assistants.length>0)? assistants.map((item) =>displayAssistant(item)):assistantnotfound()}

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}