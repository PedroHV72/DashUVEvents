function EventTable() {
    return (
        <>
        <table className="w-full border-b border-gray-200">
          <tbody>
            <tr className="hover:bg-gray-100 transition-colors group">
              <td className="flex gap-x-4 items-center py-4 pl-10">
                <input
                  type="checkbox"
                  className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                />
                <img
                  src="https://connectparts.vteximg.com.br/arquivos/ids/1225905-450-450/suporte-para-escada-fixado-no-teto-preto-connectparts--3-.jpg?v=637417489833330000"
                  alt=""
                  className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                />
                <div>
                  <a href="#" className="text-lg font-semibold text-gray-700">
                    Gol Quadrado com Escada
                  </a>
                  <div className="font-medium text-gray-400">Palestra de Drift</div>
                </div>
              </td>
              <td className="font-medium text-center">R$2.000</td>
              <td className="font-medium text-center">3 Horas</td>
              <td className="text-center">
                <span className="font-medium">4.9</span>
                <span className="text-gray-400">/5</span>
              </td>
              
              <td>
                <span className="inline-block w-20 group-hover:hidden">
                  12/01/22
                </span>
                <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <button className="p-2 hover:rounded-md hover:bg-gray-200">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                    >
                      <path
                        d="m19.925 8.44-8.449 8.448a1.5 1.5 0 0 1-1.075.44l-3.523-.035a1.5 1.5 0 0 1-1.485-1.463l-.086-3.427a1.5 1.5 0 0 1 .439-1.098l8.522-8.522a1.5 1.5 0 0 1 2.121 0l3.536 3.535a1.5 1.5 0 0 1 0 2.121Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity=".3"
                        d="M19 20H6a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <button className="p-2 hover:rounded-md hover:bg-gray-200">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                    >
                      <path
                        d="M6 8h12l-.893 11.615A1.5 1.5 0 0 1 15.61 21H8.389a1.5 1.5 0 0 1-1.496-1.385L6 8Zm2 2 .454 4.09 7.098-.056L16 10H8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity=".3"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 4.5v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1H5.5A.5.5 0 0 0 5 5v.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H14Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </>
    )
}

export default EventTable;