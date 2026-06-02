import axios, { AxiosError } from "axios";

type BackendError = {
  message?: string;
};

export const getErrorMessage = (error: unknown): string => {
  // Axios error (typed safely)
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<BackendError>;

    if (axiosError.response?.data?.message) {
      return axiosError.response.data.message;
    }

    if (axiosError.message) {
      return axiosError.message;
    }
  }

  // Normal JS Error
  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
};