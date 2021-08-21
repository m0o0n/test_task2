import style from './Auth.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import cel from './../../assets/cencel.jpg'
import email from './../../assets/Email.jpg'
import lock from './../../assets/lock.jpg'
import ok from './../../assets/ok.jpg'
import showHide from './../../assets/show_hide.png'
import * as React from "react";

let InputEmail =(props)=>{
    return(
        <div className={style.input_box}>
        <div className={style.input_cel}>
          <div className={style.input}>
            <input id="email" 
             type="text"
             value={props.value} //formik.values.email
             placeholder="E-mail" //placeholder
             
             {...props.getFieldProps} />
            <div className={style.lable}>
              <img src={email} alt="" /> 
              {/* image */}
            </div>
          </div>
          {props.touchedEmail && props.errorsEmail
        ? (<div className={style.cel}><img src={cel} alt="" /></div>)
        : props.value.length > 0 && !props.errorsEmail ? (<div className={style.cel}><img src={ok} alt="" /></div>) : null}
        </div>

        {props.touchedEmail && props.errorsEmail
        ? (<div className={style.error_text}>{props.errorsEmail}</div>)
        : null}
      </div>
    );
}

export default InputEmail;