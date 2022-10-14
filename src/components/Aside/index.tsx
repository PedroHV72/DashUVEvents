import { Link } from "react-router-dom";

function Aside() {
  return (
    <>
      <aside className="py-6 px-10 w-60 bg-primary">
        <div className="bg-white p-5 rounded-md">
        <img src="https://universidadedevassouras.edu.br/wp-content/uploads/2021/12/logo_horizontal_univasso.svg" alt="" className="w-36" />
        </div>
        <ul className="flex flex-col gap-y-6 pt-10">
          <li>
            <Link 
              to="/"
              className="flex gap-x-4 items-center py-2 text-white hover:text-gray-200 group"
            >
              <span className="absolute w-1.5 h-8 bg-[#01f0C8] rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"></span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <path
                  d="M9.5 4h-4A1.5 1.5 0 0 0 4 5.5v4A1.5 1.5 0 0 0 5.5 11h4A1.5 1.5 0 0 0 11 9.5v-4A1.5 1.5 0 0 0 9.5 4Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity=".3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5 13h4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 9.5 20h-4A1.5 1.5 0 0 1 4 18.5v-4A1.5 1.5 0 0 1 5.5 13Zm9-9h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4A1.5 1.5 0 0 1 14.5 4Zm0 9h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex gap-x-4 items-center py-2 text-white hover:text-gray-200 group"
            >
              <span className="absolute w-1.5 h-8 bg-[#01f0C8] rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"></span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <path
                  opacity=".3"
                  d=""
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.847 9h10.306a1 1 0 0 1 .986.836l1.473 8.835A2 "
                  fill="currentColor"
                ></path>
              </svg>
              <span>Usuários</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex gap-x-4 items-center py-2 text-white hover:text-gray-200 group"
            >
              <span className="absolute w-1.5 h-8 bg-[#01f0C8] rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"></span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <path
                  d="M5 19h15a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v15Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity=".3"
                  d="M8.73 14.684a1 1 0 1 1-1.46-1.368l3.75-4a1 1 0 0 1 1.38-.077l2.959 2.526 3.856-4.885a1 1 0 1 1 1.57 1.24l-4.5 5.7a1 1 0 0 1-1.434.14l-3.024-2.58-3.097 3.304Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="flex gap-x-4 items-center py-2 text-white hover:text-gray-200 group"
            >
              <span className="absolute w-1.5 h-8 bg-[#01f0C8] rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"></span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <path
                  opacity=".3"
                  d="M21 22H3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6 6c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1Zm5-1V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1Zm4 0V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1Zm4 0V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1ZM8.8 13.1c.4 0 .7-.1.9-.3.2-.2.4-.5.4-.9 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3-.2 0-.4 0-.6.1-.2.1-.3.2-.4.3-.1.1-.2.2-.3.4-.1.2-.2.3-.2.5 0 .1-.1.1-.2.2s-.2.1-.4.1-.3-.1-.4-.2c-.1-.1-.2-.3-.2-.5s.1-.4.2-.6c.1-.2.3-.4.5-.6.2-.2.5-.4.9-.5.4-.1.7-.2 1.2-.2.4 0 .7.1 1 .2.3.1.6.3.8.4.2.1.4.4.5.7.1.3.2.5.2.8 0 .4-.1.7-.3 1-.2.3-.4.6-.7.8.3.2.6.4.8.6.2.2.4.4.5.7.1.3.2.5.2.8 0 .4-.1.7-.2 1-.1.3-.4.6-.6.9-.2.3-.6.5-1 .6-.4.1-.8.2-1.3.2s-.9-.1-1.3-.3c-.4-.2-.7-.4-.9-.6-.2-.2-.4-.5-.5-.8-.1-.3-.2-.5-.2-.7 0-.2.1-.4.2-.5.1-.1.3-.2.5-.2.1 0 .2 0 .3.1.1.1.2.1.2.2.2.5.4.9.7 1.2.3.3.6.4 1 .4.2 0 .5-.1.7-.2.2-.1.4-.3.6-.5.2-.2.2-.5.2-.8 0-.5-.1-.8-.4-1.1-.3-.3-.6-.4-1-.4h-.7c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.4 0-.2.1-.3.2-.5s.3-.2.6-.2h.3v.1Zm6.5 4.4v-5.3c-1 .8-1.7 1.1-2 1.1-.2 0-.3-.1-.4-.2-.1-.1-.2-.3-.2-.5s.1-.3.2-.4c.1-.1.3-.2.7-.4.5-.2.9-.5 1.1-.7l.8-.8c.3-.3.4-.5.4-.6 0-.1.2-.1.4-.1s.4.1.5.2c.1.1.2.4.2.7v6.7c0 .8-.3 1.2-.8 1.2-.2 0-.4-.1-.6-.2-.2-.1-.3-.4-.3-.7Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Eventos</span>
            </Link>
          </li>
          
        </ul>
        <ul className="flex flex-col gap-y-6 pt-96">
          
          <li>
            <Link
              to="#"
              className="flex gap-x-4 items-center py-2 text-white font-semibold hover:text-gray-200 group"
            >
              <span className="absolute w-1.5 h-8 bg-[#f00101] rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"></span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <path
                  opacity=".3"
                  d="M16 17a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8.007a4 4 0 0 1 4 4v1a1 1 0 0 1-2 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity=".3"
                  d="M21 11a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2h10Z"
                  fill="currentColor"
                ></path>
                <path
                  d="m21.586 12-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L21.586 12Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default Aside;
