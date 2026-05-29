import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema }    from '@/schemas/auth.schema'
import { useLogin }       from '@/hooks/useAuth.hook'
import { getErrorMessage } from '@/utils/errorHandler.util'
import InputField from '@/components/ui/InputField'
import Button     from '@/components/ui/Button'

const LoginPage = () => {
  const navigate = useNavigate()
  const { mutate: login, isPending, isError, error } = useLogin()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data) => {
    login(data, { onSuccess: () => navigate('/') })
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-500">
          No account yet?{' '}
          <Link to="/register" className="text-primary-600 hover:underline font-medium">
            Create one
          </Link>
        </p>
      </div>

      {isError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
          {getErrorMessage(error)}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField label="Email"    name="email"    type="email"    placeholder="john@example.com" register={register} error={errors.email} />
        <InputField label="Password" name="password" type="password" placeholder="Your password"    register={register} error={errors.password} />
        <Button type="submit" isLoading={isPending} className="w-full mt-2">Sign In</Button>
      </form>
    </div>
  )
}

export default LoginPage
