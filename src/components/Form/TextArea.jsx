import {TextAreaContainer} from "./styles"

export const TextArea = ({name, placeholder, className, value, onChange}) => {
    return (
        <TextAreaContainer className={className}>
            <div className="input-group mb-2">
                <textarea name={name} className="form-control" placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        </TextAreaContainer>
    )
}
