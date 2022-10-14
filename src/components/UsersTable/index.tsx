import React from "react"
import User from "../../assets/images/user_photo.png";

function UsersTable() {
  return (
    <div className="flex flex-col justify-between rounded-md bg-white p-7">
    <div className="flex items-center justify-between">
      <h2 className="text-[20px] font-medium text-gray-900">Usuários</h2>
      <button className="inline-flex items-center gap-x-1 rounded-md bg-primary py-2 px-4 text-sm text-white hover:text-white hover:bg-gray-900">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 stroke-current"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 5.75v12.5M18.25 12H5.75"
          ></path>
        </svg>
        <span>Add Usuário</span>
      </button>
    </div>
    <table className="mt-4">
      <thead>
        <tr>
          <td className="py-1 text-sm text-gray-400">Id</td>
          <td className="py-1 text-sm text-gray-400">Data de cadastro</td>
          <td className="py-1 text-sm text-gray-400">Nome</td>
          <td className="py-1 text-sm text-gray-400">Função</td>
          <td className="py-1 text-sm text-gray-400">Status</td>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-700 last:border-none">
          <td className="py-4">
            <span className="text-sm font-medium text-gray-400">
              #01
            </span>
          </td>
          <td className="py-4">
            <span className="text-sm text-gray-400">Out 01, 2022</span>
          </td>
          <td className="py-4">
            <div className="flex items-center gap-x-2">
              <img
                src="https://avatars.githubusercontent.com/u/49735512?v=4"
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-sm text-gray-400">Matheus Telles</span>
            </div>
          </td>
          <td className="py-4">
            <span className="text-sm text-gray-400">Administrador</span>
          </td>
          <td className="py-4">
          <div className="flex items-center justify-center gap-x-2 rounded-md border py-2 px-1 border-indigo-400/10 bg-indigo-700/20 text-indigo-400">
              <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
              <span className="text-xs">Cadastrado</span>
            </div>
          </td>
        </tr>
        <tr className="border-b border-gray-700 last:border-none">
          <td className="py-4">
            <span className="text-sm font-medium text-gray-400">
              #02
            </span>
          </td>
          <td className="py-4">
            <span className="text-sm text-gray-400">Out 11, 2022</span>
          </td>
          <td className="py-4">
            <div className="flex items-center gap-x-2">
              <img
                src="https://avatars.githubusercontent.com/u/49735526?v=4"
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-sm text-gray-400">
                Pedro H. Vasconcelos
              </span>
            </div>
          </td>
          <td className="py-4">
            <span className="text-sm text-gray-400">Coordenador</span>
          </td>
          <td className="py-4">
            <div className="flex items-center justify-center gap-x-2 rounded-md border py-2 px-1 border-red-400/10 bg-red-700/20 text-ted-400">
              <span className="h-2 w-2 rounded-full bg-red-400"></span>
              <span className="text-xs">Pendente</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default UsersTable