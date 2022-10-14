import Aside from "../../components/Aside";
import EventTable from "../../components/EventTable";

function Events() {
  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-primary flex">
      <Aside />
      <main className="flex-1 pb-8 bg-background-gray p-6 rounded-l-[25px] min-w-fit w-full">
        <div className="flex items-center justify-between py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
              Eventos
            </h1>
          </div>
          <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-primary rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span className="text-sm font-semibold tracking-wide">Add Evento</span>
          </button>
        </div>
        <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
          <li>
            <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <path d="m12.934 16.072 6.426-5.115.158-.126a1.5 1.5 0 0 0 .003-2.35l-6.587-5.238a1.5 1.5 0 0 0-1.868 0L4.475 8.485a1.5 1.5 0 0 0-.001 2.347l.156.124 6.436 5.117a1.5 1.5 0 0 0 1.868 0Z"></path>
                <path
                  opacity=".3"
                  clip-rule="evenodd"
                  d="m11.056 18.67-5.72-4.547a.903.903 0 0 0-1.276.154.91.91 0 0 0 .166 1.279l6.861 5.247a1.5 1.5 0 0 0 1.823 0l6.858-5.243a.915.915 0 0 0 .171-1.283l-.004-.005a.91.91 0 0 0-1.278-.162l-.008.007-5.726 4.553a1.5 1.5 0 0 1-1.867 0Z"
                ></path>
              </svg>
              <span className="font-medium">Publicado</span>
              <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
            </button>
          </li>
          <li>
            <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 14v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4h4.28l.543 1.633A2 2 0 0 0 8.721 17h6.661a2 2 0 0 0 1.789-1.106L18.118 14H22Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity=".3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m2.563 12 3.364-5.98A2 2 0 0 1 7.67 5h8.66a2 2 0 0 1 1.744 1.02L21.436 12h-3.319a2 2 0 0 0-1.789 1.106L15.382 15H8.721l-.544-1.633A2 2 0 0 0 6.279 12H2.563Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="font-medium">Encerrado</span>
              <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
            </button>
          </li>
        </ul>
        <EventTable />
      </main>
    </div>
  );
}

export default Events;
