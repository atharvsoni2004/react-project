import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function VerifyLogin()
{
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    const navigate = useNavigate();
    console.log(cookies['adminid']);
    let Redirectlogin = function()
    {
        useEffect(()=>
        {
            navigate("/");
        })
    }
    if(cookies['adminid']===undefined && cookies['doctorid']===undefined)
    {
        Redirectlogin();
    }
}