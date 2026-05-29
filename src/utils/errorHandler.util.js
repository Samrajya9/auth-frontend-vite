// Extracts a human-readable message from any axios / Zod / unknown error
export const getErrorMessage = (error) => {
  // Axios error with backend message
  if (error?.response?.data?.message) return error.response.data.message
  // Axios error with generic message
  if (error?.message) return error.message
  return 'Something went wrong. Please try again.'
}
