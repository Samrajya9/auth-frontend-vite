// Reusable form field — works with react-hook-form via the `register` prop

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  error,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-colors outline-none
          focus:ring-2 focus:ring-primary-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'}`}
        {...(register ? register(name) : {})}
      />
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error.message}</p>
      )}
    </div>
  )
}

export default InputField
