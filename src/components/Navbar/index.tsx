function Navbar () {
    return (
        <nav className="flex items-center gap-x-6">
            <div className="flex w-3/5 items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 flex items-center px-3">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 stroke-current text-gray-400"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19.25 19.25 15.5 15.5M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    className="rounded-md bg-white py-3 pr-4 pl-10 text-sm text-gray-400 focus:text-primary focus:outline-none"
                  />
                </div>
                <button className="rounded-md bg-primary py-3 px-4 text-sm text-white hover:bg-gray-900">
                  {" "}
                  Add Usuário{" "}
                </button>
              </div>
            </div>
            <div className="flex w-2/5 items-center justify-end">
              <div className="flex items-center gap-x-2.5 mr-5">
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-primary hover:text-white">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 stroke-current"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4.75 7.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-8.5Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m5.5 6.5 6.5 5.75 6.5-5.75"
                    ></path>
                  </svg>
                </button>
                <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-primary hover:text-white">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 stroke-current"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.25 12v-2a5.25 5.25 0 1 0-10.5 0v2l-2 4.25h14.5l-2-4.25ZM9 16.75s0 2.5 3 2.5 3-2.5 3-2.5"
                    ></path>
                  </svg>
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400"></span>
                  </div>
                </button>
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-primary hover:text-white">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 stroke-current"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M19.25 11.75 17.664 6.2a2 2 0 0 0-1.923-1.45H8.26A2 2 0 0 0 6.336 6.2L4.75 11.75M10.214 12.369c-.258-.336-.62-.619-1.043-.619H4.75v5.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2v-5.5h-4.42c-.425 0-.786.283-1.044.619A2.246 2.246 0 0 1 12 13.25a2.246 2.246 0 0 1-1.786-.881Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <button className="flex h-11 items-center justify-center rounded-full bg-white px-2 text-gray-400 hover:bg-primary hover:text-white">
                <img
                  src="https://avatars.githubusercontent.com/u/49735512?v=4"
                  alt=""
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="pl-2 text-sm">Matheus Telles</span>
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
                    d="M15.25 10.75 12 14.25l-3.25-3.5"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
    )
}

export default Navbar
