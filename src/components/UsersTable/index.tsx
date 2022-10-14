import React from "react"
import User from "../../assets/images/user_photo.png";

function UsersTable() {
  return (
      <div className="sm:px-6 w-full">
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
              <div className="sm:flex items-center justify-between">
                  <div className="flex items-center">
                      
                  </div>
                  <div className="flex">
                      <div className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-center justify-center px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-full">
                          <button className="">
                              <p className="text-sm font-medium leading-none text-white">Add Usuário</p>
                          </button>
                      </div>
                  </div>
              </div>
              <div className="mt-7 overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                      <tbody>
                          <tr tabindex="0" className="focus:outline-none h-16 border border-gray-100">
                              <td>
                                  <div className="ml-5">
                                      <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                          <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-full">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                                  <path d="M5 12l5 5l10 -10"></path>
                                              </svg>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <td className="">
                                  <div className="flex items-center pl-4">
                                      <div className="w-10 h-9 mr-2 sm:mr-2">
                                          <img className="rounded-full w-9 h-9 object-fit" src={User} alt="Foto do Usuário" />
                                      </div>
                                      <div className="font-medium text-gray-800">Matheus Telles</div>
                                  </div>
                              </td>
                              <td className="pl-24">
                                  <div className="flex items-center">
                                      <p className="text-sm leading-none text-gray-600 ml-2">Coordenador</p>
                                  </div>
                              </td>
                              <td className="pl-5">

                                  <div className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M10 9.1665V9.17484" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M6.66669 9.1665V9.17484" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M13.3333 9.1665V9.17484" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                      <p className="text-sm leading-none text-gray-600 ml-2">5</p>
                                  </div>
                              </td>
                              <td className="pl-5">
                                  <div className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          <path d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                      <p className="text-sm leading-none text-gray-600 ml-2">1</p>
                                  </div>
                              </td>
                              <td>
                                  <div className="relative px-5 pt-2">
                                      <button className="focus:ring-2 rounded-md focus:outline-none" aria-label="option">
                                          <svg className="dropbtn" onclick="dropdownFunction(this)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                              <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                              <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>
                                      </button>
                                      <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                          <div tabindex="0" className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                              <p>Editar</p>
                                          </div>
                                          <div tabindex="0" className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                              <p>Deletar</p>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                          </tr>

                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}

export default UsersTable