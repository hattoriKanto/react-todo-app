import React from "react";
import { ErrorMessages, SuccessMessages } from "../../types/Messages";

export enum ToastOptions {
  Error = "error",
  Success = "success",
}

export interface ToastContextType {
  notify: (
    option: ToastOptions,
    message: ErrorMessages | SuccessMessages
  ) => void;
}

export interface ToastProviderType {
  children: React.ReactNode;
}
