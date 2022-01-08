import {CheckboxContainer} from "./styles"

export const Checkbox = ({text, lead = "", icon, checked, onClick, onChange = ()=>{}}) => {

    const CLASS = " custom-control custom-control-sm custom-checkbox custom-control-pro mb-2"

    return (
        <CheckboxContainer onClick={onClick}>
            <div className={checked ? "checked" + CLASS : ""  + CLASS}>
                <input type="checkbox" className="custom-control-input" name="available" checked={checked} onChange={onChange}/>
                <label className="custom-control-label">
            <span className="user-card">
                <span className="user-avatar sq bg-secondary">
                    <i className={icon}/>
                </span>
                <span className="user-info">
                    <span className="lead-text">{text}</span>
                    <span className="sub-text">{lead}</span>
                </span>
            </span>
                </label>
            </div>
        </CheckboxContainer>
    )
}
