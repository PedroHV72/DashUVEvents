import React, { useContext, FormEvent, useState } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import loginImg from '../../assets/images/conference-login.jpg'
import Dashboard from '../Dashboard';

export default function Login() {

  const { signIn } = useContext(AuthContext)

  const [matricula, setMatricula] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      matricula,
      password
    }

    await signIn(data)
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt='Foto de uma conferencia na página de login' />
      </div>
      <div className='bg-gray-800 flex flex-col justify-center'>
        <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Matricula</label>
            <input value={matricula} onChange={ (e) => setMatricula(e.target.value) } className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text' />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Senha</label>
            <input value={password} onChange={ (e) => setPassword(e.target.value) } className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'>
              <input type='checkbox' className='mr-2' />Manter conectado
            </p>
            <p>Esqueci minha senha</p>
          </div>
          <button className='w-full my-5 py-2 bg-gray-200 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40 text-black font-semibold rounded-lg'>Login</button>
        </form>
      </div>
    </div>
  )
}