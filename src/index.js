import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import DoctorForgotPassword from './DoctorForgotPassword';
import DoctorRegister from './DoctorRegister';
import DoctorLogin from './DoctorLogin';
import AdminAppointment from './AdminAppointment';
import AdminAssitant from './AdminAssitant';
import AdminChangePassword from './AdminChangePassword';
import AdminComposeEmail from './AdminComposeEmail';
import DoctorAddAssistant from './DoctorAddAssistant';
import DoctorAddPackage from './DoctorAddPackage';
import DoctorEditAssistant from './DoctorEditAssistant';
import DoctorEditPackage from './DoctorEditPackage';

import NoPageFound from './NoPageFound';
//create function which has routes
function MyRoutes() {
    console.log('myRoutes');
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<AdminLogin />} /> 
            <Route path='/admin-forgot' element={<AdminForgotPassword />} /> 
            <Route path='/doctor-forgot' element={<DoctorForgotPassword />} /> 
            <Route path='/doctor-register' element={<DoctorRegister />} /> 
            <Route path='/login' element={<DoctorLogin />} /> 
            <Route path='/admin-appointment' element={<AdminAppointment />} /> 
            <Route path='/admin-assitant' element={<AdminAssitant />} /> 
            <Route path='/admin-change-password' element={<AdminChangePassword />} /> 
            <Route path='/admin-compose-email' element={<AdminComposeEmail />} /> 
            <Route path='/doctor-add-assistant' element={<DoctorAddAssistant />} />
            <Route path='/doctor-edit-assistant' element={<DoctorEditAssistant />} />
            <Route path='/doctor-add-package' element={<DoctorAddPackage />} />
            <Route path='/doctor-edit-package' element={<DoctorEditPackage />} />
            <Route path='*' element={<NoPageFound />} />
        </Routes>
    </BrowserRouter>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoutes />);