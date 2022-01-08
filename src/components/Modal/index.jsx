import {Children} from "react"
import {Modal as ModalBootstrap} from 'react-bootstrap'
import {ModalStyle} from "./styles"

export const Modal = ({show = false, buttonClose = true, onClose, children, size= "md"}) => {

    return (
        <ModalBootstrap
            show={show}
            onHide={onClose}
            backdrop="static"
            size={size}
            centered
        >
            <ModalBootstrap.Header>
                <div/>
                <ModalStyle>
                    {buttonClose && <button onClick={onClose} className="close"><i className="far fa-times-circle"/></button>}
                </ModalStyle>
            </ModalBootstrap.Header>
            <ModalBootstrap.Body style={{"background": "black"}}>
                <ModalStyle>
                    {Children.map(children, component => {
                        return component
                    })}
                </ModalStyle>
            </ModalBootstrap.Body>
            <ModalBootstrap.Footer style={{"borderTop": "none", "background": "black"}} />
        </ModalBootstrap>
    )
}