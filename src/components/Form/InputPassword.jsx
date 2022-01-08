import {useState} from "react"
import PasswordIcon from "../../assets/svg/modal-register/icon-password.svg"

export const InputPassword = ({className, icon=PasswordIcon, value, onChange, ...props}) => {
    const [type, setType] = useState("password");
    const switchElementType = () =>{
        type==="password" ? setType("text") : setType("password")
    }
    const CLASS_EYE_SPAN = "fa fa-fw toggle-password";
    return(
        <div className={className}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <div className="d-flex justify-content-center w-100 py-1">
                            <img src={icon} alt="Icon" className="img-fluid" style={{height: "25px"}}/>
                        </div>
                    </div>
                </div>
                <input type={type} className="form-control bl-none br-none" value={value} onChange={onChange} {...props} />
                <div className="input-group-append">
                   <div className="input-group-text bw-left">
                       <span onClick={switchElementType} className={type==="password"?  CLASS_EYE_SPAN + " fa-eye" : CLASS_EYE_SPAN+" fa-eye-slash"} />
                   </div>
                </div>
            </div>
        </div>
    )
}
