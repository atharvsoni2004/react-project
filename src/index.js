import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import DoctorForgotPassword from './DoctorForgotPassword';
import DoctorRegister from './DoctorRegister';
import DoctorLogin from './DoctorLogin';
import AdminAppointment from './AdminAppointment';
import AdminPackage from './AdminPackage';
import Logout from './logout';
import AdminAssitant from './AdminAssitant';
import AdminChangePassword from './AdminChangePassword';
import AdminComposeEmail from './AdminComposeEmail';
import DoctorAddAssistant from './DoctorAddAssistant';
import DoctorAddPackage from './DoctorAddPackage';
import DoctorEditAssistant from './DoctorEditAssistant';
import DoctorEditPackage from './DoctorEditPackage';
import AdminDoctorManagement from './AdminDoctorManagement';
import DoctorProfile from './Doctorprofile';
import { withCookies } from 'react-cookie';

import NoPageFound from './NoPageFound';
//create function which has routes
function MyRoutes() {
    return (<BrowserRouter>
        <Routes>
            {/* <Route index path='/' element={<Simplelogin />} />  */}
             <Route index path='/' element={<AdminLogin />} />  
            <Route path='/admin-forgot' element={<AdminForgotPassword />} /> 
            <Route path='/doctor-forgot' element={<DoctorForgotPassword />} /> 
            <Route path='/doctor-register' element={<DoctorRegister />} /> 
            <Route path='/login' element={<DoctorLogin />} /> 
            <Route path='/logout' element={<Logout />} /> 
            <Route path='/admin-appointments/:doctorid' element={<AdminAppointment />} /> 
            <Route path='/admin-assitant/:doctorid' element={<AdminAssitant />} /> 
            <Route path='/admin-change-password' element={<AdminChangePassword />} /> 
            <Route path='/admin-compose-email' element={<AdminComposeEmail />} /> 
            <Route path='/doctor-add-assistant' element={<DoctorAddAssistant />} />
            <Route path='/admin-package' element={<AdminPackage/>} />
            <Route path='/doctor-edit-assistant' element={<DoctorEditAssistant />} />
            <Route path='/doctor-add-package' element={<DoctorAddPackage />} />
            <Route path='/doctor-edit-package' element={<DoctorEditPackage />} />
            <Route path='/admin-doctor-management' element={<AdminDoctorManagement />} />
            <Route path='/doctor-profile' element={<DoctorProfile />} />
            <Route path='/admin-package/:doctorid' element={<AdminPackage />} />
            <Route path='*' element={<NoPageFound />} />
        </Routes>
    </BrowserRouter>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
var MyRoutesWithCookies = withCookies(MyRoutes);
root.render(<MyRoutesWithCookies />);