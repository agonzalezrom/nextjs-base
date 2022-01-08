import styled from "styled-components"

export const ModalStyle = styled.div`
  margin-top: -30px;
  .close {
    background: none;
    position: absolute;
    top: 5px;
    right: 15px;
    z-index: 999;
    i {
      font-size: 2rem;
    }
  }
  h3 {
    position: relative;
    z-index: 100;
  }
  h5 {
    position: relative;
    z-index: 100;
  }
  p {
    span {
      cursor: pointer;
    }
  }
  label {
    font-size: 1rem;
  }
  input:not([type='checkbox']) {
    border-radius: 5px;
    font-size: 1rem;
    :focus,
    :active,
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
    }
  }
  button {
    padding: 0.5rem 0;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    :disabled {
      background: #929292;
    }
  }
  button.little {
    font-size: 0.8rem;
  }
  .bl-none {
    border-left: none;
  }
  .br-none {
    border-right: none;
  }
  .input-group-text {
    padding-bottom: 1rem;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  .bw-left {
    border-radius: 0 5px 5px 0 !important;
    padding-top: 0.8rem;
    padding-bottom: 0.9rem;
  }
  .phone-validation {
    input {
      padding: 1rem;
      max-width: 60px;
      margin-right: 20px;
    }
  }
`