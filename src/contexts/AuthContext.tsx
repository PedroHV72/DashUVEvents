import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies"
import { api } from "../services/apiClient";

type AuthContextData = {
  user?: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
  matricula: string;
  photo: string;
}

type SignInProps = {
  matricula: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, 'nextauth.token')
  } catch {
    console.log('Não foi possível fazer o logout')
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  async function signIn({ matricula, password }: SignInProps) {
    try {
      const response = await api.post('/auth', {
        matricula,
        password
      })

      const { token, user } = response.data

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        matricula: user.matricula,
        photo: user.photo
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}