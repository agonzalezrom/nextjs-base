export const InputIcon = ({name, type, icon, placeholder, className, value, onChange, ...props}) => {
    return (
        <div className={className}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <div className="d-flex justify-content-center w-100 py-2">
                            <img src={icon} alt="Icon" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <input name={name} type={type} className="form-control bl-none" placeholder={placeholder} value={value} onChange={onChange} {...props} />
            </div>
        </div>
    )
}