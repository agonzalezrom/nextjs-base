import styled from "styled-components"

export const Form = styled.form`
  width: 60%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  
  label {
    color: var(--fifth-color);
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
  }
  
  input:not([type="checkbox"]) {
    padding: 1.5rem 1rem;
    background-color: white;
    border-radius: 5px;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 0 white !important;
      -webkit-text-fill-color: black !important;
    }
  }
  
  
  .toggle-password {
    font-size: 1.5rem;
    color: var(--primary-color);
  }
  
  button {
    padding: 1rem 0;
    color: white;
    font-size: 1.3rem;
    border-radius: 25px;
    background: linear-gradient(270deg, var(--third-color) 0%, var(--fourth-color) 100%);
    border: none;
  }
  
  .forgot-password {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
      a {
        color: var(--fifth-color);
      }    
  }
  
`

export const TextAreaContainer = styled.div`
  textarea {
    padding: 1rem;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    min-height: 300px;

    :focus,
    :active,
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active
    {
      -webkit-box-shadow: 0 0 0 30px black inset !important;
      background-color: black;
      color: white;
    }
  }
`

export const FormLogin = styled.div`
  
  width: 100%;
  
  h1{
    color: var(--secondary-color);
    font-family: "Trajan Pro", sans-serif;
    font-size: 1.8rem;
  }

  input {
    font-family: "Poppins", sans-serif;
    border: 2px solid var(--third-color);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: 100%;
    :focus {
      border-radius: 5px;
      outline: none;
      border-color: var(--secondary-color);
    }

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 0 white !important;
      -webkit-text-fill-color: black !important;
    }
    
  }

  label {
    line-height: 50px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: var(--secondary-color);
  }
  
  button {
    padding: 1rem;
    color: black;
    border-radius: 5px;
    background: linear-gradient(270deg, var(--third-color) 0%, var(--fourth-color) 100%);
    border: none;
  }
  
`

export const CheckboxContainer = styled.div`
  
  .custom-control-vertical .custom-control {
    display: flex;
  }
  
  .custom-control-pro.custom-control-sm {
    padding-left: 0;
  }
  
  .custom-control-sm {
    min-height: 1.125rem;
    padding-left: 1.625rem;
  }
  
  .custom-control {
    display: inline-flex;
    min-height: 1.5rem;
  }
  
  .custom-control-pro {
    padding-left: 0;
    position: relative;
  }
  
  .custom-control {
    position: relative;
    z-index: 1;
    display: block;
    min-height: 1.44375rem;
    padding-left: 2.25rem;
  }

  input[type="radio"], input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  .custom-control-input {
    position: absolute;
    height: 1px;
    width: 1px;
    opacity: 0;
  }
  
  .custom-control-input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1.5rem;
    height: 1.47187rem;
    opacity: 0;
  }
  
  button, input {
    overflow: visible;
  }
  
  input, button, select, optgroup, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .custom-control-vertical .custom-control .custom-control-label {
    width: 100%;
  }

  .custom-control-pro.custom-control-sm .custom-control-label {
    padding: 0.6875rem 1.125rem 0.6875rem 3rem;
    font-size: 13px;
    line-height: 1.25rem;
    border-radius: 4px;
  }
  
  .custom-control-sm .custom-control-label {
    font-size: 12px;
    line-height: 1.125rem;
    padding-top: 0;
  }
  
  .custom-control-pro .custom-control-label {
    border: 1px solid #e5e9f2;
    padding: 1.125rem 1.125rem 1.125rem 3.375rem;
    font-size: 13px;
    line-height: 1.25rem;
    border-radius: 4px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    display: inline-flex;
    align-items: center;
    background-color: #fff;
  }
  
  .custom-control-label {
    font-size: 14px;
    line-height: 1.25rem;
    padding-top: 0.125rem;
  }
  
  .custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
  }
  
  .custom-control-pro.custom-control-sm .custom-control-label::before, .custom-control-pro.custom-control-sm .custom-control-label::after {
    top: 50%;
    transform: translateY(-50%);
    left: 1.125rem;
  }

  .custom-control-sm .custom-control-label::before, .custom-control-sm .custom-control-label::after {
    left: -1.625rem;
    width: 1.125rem;
    height: 1.125rem;
  }
  
  .custom-control-pro .custom-control-label::before, .custom-control-pro .custom-control-label::after {
    top: 50%;
    transform: translateY(-50%);
    left: 1.125rem;
  }

  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 3px rgb(9 113 254 / 10%);
  }

  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: var(--seventh-color);
    background-color: var(--seventh-color);
  }
  
  .custom-checkbox .custom-control-label::before {
    border-radius: 4px;
  }
  
  .custom-control-label::before, .custom-control-label::after {
    top: 0;
  }
  
  .custom-control-label::before, .custom-file-label, .custom-select, div.dataTables_wrapper div.dataTables_length select {
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .custom-control-label::before {
    position: absolute;
    top: -0.02813rem;
    left: -2.25rem;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: none;
    content: "";
    background-color: #fff;
    border: #dbdfea solid 2px;
  }
  
  .custom-control-label:before, .custom-control-label:after {
    z-index: 1;
  }

  .custom-control .custom-control-input:checked ~ .custom-control-label::after {
    opacity: 1;
  }
  
  .custom-control-pro.custom-control-sm .custom-control-label::before, .custom-control-pro.custom-control-sm .custom-control-label::after {
    top: 50%;
    transform: translateY(-50%);
    left: 1.125rem;
  }
  
  .custom-control-sm .custom-control-label:after {
    font-size: 0.9em;
    margin-left: 0.2rem;
  }
  
  .custom-control-sm .custom-control-label::before, .custom-control-sm .custom-control-label::after {
    width: 1.125rem;
    height: 1.125rem;
  }
  
  .custom-checkbox .custom-control-label:after {
    content: "\f00c";
  }
  
  .custom-control-pro .custom-control-label::before, .custom-control-pro .custom-control-label::after {
    top: 50%;
    transform: translateY(-50%);
  }
  
  .custom-control-label:after {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-image: none !important;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #fff;
    opacity: 0;
  }
  
  .custom-control-label::before, .custom-control-label::after {
    top: 0;
  }
  
  .custom-control-label::after {
    position: absolute;
    top: -0.02813rem;
    left: -2rem;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    content: "";
  }
  
  .custom-control-label:before, .custom-control-label:after {
    z-index: 1;
  }
  
  label {
    cursor: pointer;
    min-width: 100%;
    display: inline-block;
    margin-bottom: 16px;
  }
  
  .user-card {
    display: flex;
    align-items: center;
  }

  .user-avatar.sq, [class^="user-avatar"]:not([class*="-group"]).sq {
    border-radius: 4px;
  }

  .user-avatar, [class^="user-avatar"]:not([class*="-group"]) {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #3a8dfe;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.06em;
    flex-shrink: 0;
    position: relative;
  }
  
  .sq {
    height: 40px;
    width: 40px;
  }
  
  .bg-secondary {
    background-color: var(--secondary-color) !important;
  }

  .user-avatar + .user-info, [class^="user-avatar"]:not([class*="-group"]) + .user-info {
    margin-left: 1rem;
  }

  .user-card .user-info {
    color: #8094ae;
  }

  .user-info .lead-text, .user-info .sub-text {
    display: flex;
    align-items: center;
  }

  .lead-text {
    font-size: 0.875rem;
    font-weight: 700;
    color: #364a63;
    display: block;
  }

  .user-info .lead-text, .user-info .sub-text {
    display: flex;
    align-items: center;
  }

  .lead-text + .sub-text {
    font-size: 12px;
  }
  
  .sub-text {
    display: block;
    font-size: 13px;
    color: #8094ae;
  }
`