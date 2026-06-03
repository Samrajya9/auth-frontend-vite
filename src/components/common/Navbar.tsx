import { Link } from 'react-router-dom'
import { useLogout, useMe } from '../../hooks/useAuth.hook'

const Navbar = () => {
  const { data: user } = useMe()
  const { mutate: logout } = useLogout()
  console.log("Navbar user:", user);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary-600">
          MyApp
        </Link>
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-600">Hi, {user.name}</span>
              <button
                onClick={() => logout()}
                className="text-sm text-red-500 hover:text-red-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login"  className="text-sm text-gray-600 hover:text-primary-600">Login</Link>
              <Link to="/register" className="text-sm bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
