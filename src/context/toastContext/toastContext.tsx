import React, { createContext } from "react";
import { ToastContextType, ToastOptions, ToastProviderType } from ".";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { ErrorMessages, SuccessMessages } from "../../types/Messages";

export const ToastContext = createContext<ToastContextType>({
  notify: () => {},
});

export const ToastProvider: React.FC<ToastProviderType> = ({ children }) => {
  const notify = (
    option: ToastOptions,
    message: ErrorMessages | SuccessMessages
  ) => {
    switch (option) {
      case ToastOptions.Error:
        toast.error(message);
        break;
      case ToastOptions.Success:
        toast.success(message);
        break;
      default:
        break;
    }
  };

  const toastState: ToastContextType = { notify };

  return (
    <ToastContext.Provider value={toastState}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </ToastContext.Provider>
  );
};
