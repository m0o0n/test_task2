

import style from './Auth.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import cel from './../../assets/cencel.jpg'

import lock from './../../assets/lock.jpg'
import ok from './../../assets/ok.jpg'
import showHide from './../../assets/show_hide.png'
import * as React from "react";

import { NavLink } from 'react-router-dom';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

let Auth =()=>{
  
return(
    <Formik
    initialValues={{email: '', password: ''}}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
      .matches(/(^\!)/, 'Первый символ должен быть !')
      .min(10, 'Длинна должна быть не меньше 10 символов')
      .required('Required')
      .test('secondVal', 'Второй символ должен быть буквой', val => {
        if (!val) return true
        if(val.length < 2) return true
        return val[1].match(/(\D)/)})
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {formik => (
      <div className={style.form_container}>
        <div className={style.logo}>
          <div className={style.big}>Bank</div>
          <div className={style.small}>Support Portal</div>
        </div>
        <form className={style.login_form} onSubmit={formik.handleChange}>
            <InputEmail value={formik.values.email} 
            touchedEmail={formik.touched.email} 
            errorsEmail={formik.errors.email} 
            getFieldProps={formik.getFieldProps('email')}/>
          
            <InputPassword value={formik.values.password} 
            touchPass={formik.touched.password} 
            errorPass={formik.errors.password}
            getFieldProps={formik.getFieldProps('password')}/>
         
            <div className={style.submit}><button type="submit">Login</button></div>

            <div className={style.forgot_pass}>
              Forgot your password? 
              <NavLink className={style.restore_pass} to="/restore_pass">Reset it here</NavLink> 
            </div>
            
        </form>
      </div>
    )}
  </Formik>
)
}

export default Auth