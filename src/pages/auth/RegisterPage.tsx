import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { registerSchema } from '@/schemas/auth.schema'
import { useRegister }    from '@/hooks/useAuth.hook'
import { getErrorMessage } from '@/utils/errorHandler.util'
import InputField from '@/components/ui/InputField'
import Button     from '@/components/ui/Button'

const RegisterPage = () => {
  const navigate = useNavigate()
  const { mutate: register, isPending, isError, error } = useRegister()

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) })

  const onSubmit = (data) => {
    // Remove confirmPassword before sending to API
    const { confirmPassword, ...payload } = data
    register(payload, {
      onSuccess: () => navigate('/'),
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
        <p className="mt-2 text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>

      {/* API Error */}
      {isError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
          {getErrorMessage(error)}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Full Name"
          name="name"
          placeholder="John Doe"
          register={formRegister}
          error={errors.name}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          register={formRegister}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Min 8 chars, 1 uppercase, 1 number"
          register={formRegister}
          error={errors.password}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          register={formRegister}
          error={errors.confirmPassword}
        />

        <Button
          type="submit"
          isLoading={isPending}
          className="w-full mt-2"
        >
          Create Account
        </Button>
      </form>
    </div>
  )
}

export default RegisterPage
