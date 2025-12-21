import { useAuth } from '../context/AuthContext'

function Navbar({ title }: { title: string }) {
  const { user, logout } = useAuth()

  return (
    <nav>
      <h2>{title}</h2>

      {user && (
        <div>
          <span>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
