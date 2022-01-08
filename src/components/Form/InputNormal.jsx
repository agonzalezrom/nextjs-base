export const InputNormal = ({label, value, onChange, ...props}) => {
    return (
        <div className="form-group mb-3">
            <label className="mb-1">{label}</label>
            <input className="form-control" value={value} onChange={onChange} {...props} />
        </div>
    )
}