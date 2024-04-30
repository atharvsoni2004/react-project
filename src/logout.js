import { Navigate,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Logout()
{
    let [cookie,setCookie,removeCookie]=useCookies(['Atharv']);
    let navigate=useNavigate();
    if(cookie['adminid']!==undefined)
    {
        removeCookie("adminid")
        navigate("/");
    }

    if(cookie['doctorid']!==undefined)
    {
        removeCookie("doctorid")
        navigate("/login");
    }
    
    if(cookie['assistantid']!==undefined)
    {
        removeCookie("assistantid")
        navigate("/login");
    }
    return(<></>)
}