import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toaster.css'
// import successIcon from '../assets/toastSuccessIcon.png'
// import ErrorIcon from '../assets/toastError.png'

export const ErrorToast = (message) => {
    toast.error(`${message}`, {
        closeToast: (
            <button className="custom-close-button__error close__btn__common">
                Close
            </button>
        ),
        // icon: () => <img src={ErrorIcon} alt="Error Icon" />,
    });
    return null;
};

export const SuccessToast = (message) => {
    toast.success(`${message}`, {
        closeToast: (
            <button className="custom-close-button__success close__btn__common">
                Close
            </button>
        ),
        // icon: () => <img src={successIcon} alt="Success Icon" />,
    });
    return null;
}






