import {Link} from "react-router-dom";
import Menu from "./Menu";
export default function AdminPackage(){
    return(<>
    <Menu />
    <main id="main" className="main">
  <div className="pagetitle">
    <h1>Doctor Management</h1>
  </div>{/* End Page Title */}
  <div className="card shadow">
    <div className="card-header text-bg-primary">
      <h5>Packages of - [Chirag Panchal]</h5>
    </div>
    <div className="card-body">
      <table className="table table-stripped table-bordered">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Tital<br />Details</th>
            <th>Photo</th>
            <th>Charge</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dental Implant <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tempora omnis necessitatibus deleniti sequi. Dolorem minus deleniti illo officia repellat!
            </td>
            <td>
              <Link to="https://picsum.photos/400" data-lightbox="image-1" data-title="My caption"> <img src="https://picsum.photos/50" className="img-fluid" />
              </Link>
            </td>
            <td>Rs 85000</td>
            <td>6 hours (2 seating)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</main>
    </>);
}