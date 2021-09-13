import React, {createContext} from "react"
import swal from "sweetalert"

export const AlertContext = createContext(undefined)

export const AlertProvider = ({children}) => {


    const infoAlert = (text) => {
        swal({
            title: text,
            text: " ",
            icon: "info",
            buttons: false,
            closeOnClickOutside: true,
            timer:800
        })
    }

    const successAlert = (title, text, then) => {
        swal({
            title: title,
            text: text,
            icon: "success",
            button: "Continuar",
            closeOnClickOutside: false,
        }).then(then)
    }

    const notificationAlert = (title, text, then) => {
        swal({
            title: title,
            text: text,
            icon: "info",
            button: "Continuar",
            closeOnClickOutside: false,
        }).then(then)
    }

    const errorAlert = (title, text, then) => {
        swal({
            title: title,
            text: text,
            icon: "error",
            button: "Continuar",
            closeOnClickOutside: false,
        }).then(then)
    }

    const confirmationAlert = (title, text, onConfirmation) => {
        swal({
            title: title,
            text: text,
            icon: "warning",
            buttons: ["Cancelar", "Continuar"],
            closeOnClickOutside: false,
            dangerMode: true,
        }).then((pressed) => {
                if (pressed === "Continuar") {
                    onConfirmation()
                }
          });
    }

    return (
        <AlertContext.Provider value={{infoAlert, successAlert, notificationAlert, errorAlert, confirmationAlert}}>
            {React.Children.map(children, component=>{return component})}
        </AlertContext.Provider>
    )
}