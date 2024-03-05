import Menu from "./Menu";
import { Link } from "react-router-dom";
export default function AdminAssitant() {
    return (
        <>
            <Menu />
            {/* functional components */}
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>
                        Doctor Management
                    </h1>
                </div>{/* End Page Title */}
                <div className="card shadow">
                    <div className="card-header text-bg-primary d-flex justify-content-between">
                        <h5>Assitant of  (Ankit Patel)</h5>
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
                                <tr>
                                    <td>1</td>
                                    <td>Rahul soni
                                    </td>
                                    <td>
                                        rahul.soni@gmail.com
                                    </td>
                                    <td>
                                        <a title="edit assitant" href="doctor-edit-assitant.html"><i className="fa fa-pencil fa-2x" /></a>
                                        <a title="remove assitant" href="#"><i className="fa fa-trash fa-2x" /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}