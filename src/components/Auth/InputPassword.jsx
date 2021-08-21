import style from './Auth.module.css'
import cel from './../../assets/cencel.jpg'
import lock from './../../assets/lock.jpg'
import ok from './../../assets/ok.jpg'
import showHide from './../../assets/show_hide.png'
import * as React from "react";
import {useState} from "react";

let InputPassword =(props)=>{
    const [ShowPassword, setShowPassword] = useState(false);
    return(
        <div className={style.input_box}>
            <div className={style.input_cel}>
              <div className={style.input}>
                <input id="password"
                 type={ShowPassword ? "text" : "password"}
                 value={props.value}
                 placeholder="Password"
                 
                 {...props.getFieldProps} />
                <div className={style.lable}>
                  <img src={lock} alt="" />
                  
                </div>

                <div className={ShowPassword ? style.show_hide_opacity : style.show_hide} onClick={()=>setShowPassword(!ShowPassword)}><img src={showHide} alt="" /></div>
              </div>
              {props.touchPass && props.errorPass 
            ? (<div className={style.cel}><img src={cel} alt="" /></div>)
            : props.value.length > 0 && !props.errorPass  ? (<div className={style.cel}><img src={ok} alt="" /></div>) : null}
            </div>

            {props.touchPass && props.errorPass 
            ? (<div className={style.error_text}>{props.errorPass}</div>)
            : null}
          </div>
    );
}

export default InputPassword;