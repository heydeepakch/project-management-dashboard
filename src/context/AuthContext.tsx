import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type User = {
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    value: user,
    setStoredValue: setUser,
    removeValue: clearUser
  } = useLocalStorage<User | null>('auth_user', null)

  const login = (email: string) => {
    setUser({ email })
  }

  const logout = () => {
    clearUser()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
