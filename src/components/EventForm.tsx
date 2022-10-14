import loginImg from "../assets/images/conference-login.jpg";
import DatePicker from "./DatePicker";

function EventForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray-800">
      <div className="">
        <img
          className="w-full h-full object-cover"
          src={loginImg}
          alt="Foto de uma conferencia na página de login"
        />
      </div>
      <div className="bg-white flex flex-col justify-top p-5 pt-10">
        <form>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal 
            text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white
             focus:border-blue-600 focus:outline-none"
              id="1"
              placeholder="Titulo"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="form-group mb-6">
              <DatePicker />
            </div>
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Descrição"
            ></textarea>
          </div>

          <div className="form-group mb-6">
            <label
              htmlFor="formFile"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Capa do Evento
            </label>
            <input
              className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="formFile"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700
               bg-white bg-clip-padding border border-solid border-gray-300 
               rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="1"
                placeholder="Preço"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
              w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="1"
                aria-describedby="emailHelp124"
                placeholder="Horas"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <select
              className="form-control block w-full px-3 py-1.5 text-base font-norma  text-gray-70
              bg-white bg-clip-padding border border-solid border-gray-300 rounded 
              transition ease-in-out m-  focus:text-gray-700 focus:bg-white
               focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Online</option>
              <option value="1">Presencial</option>
            </select>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal 
            text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white
             focus:border-blue-600 focus:outline-none"
              id="1"
              placeholder="Url do Meeting"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700
               bg-white bg-clip-padding border border-solid border-gray-300 
               rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="1"
                placeholder="CEP"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
              w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="1"
                aria-describedby="emailHelp124"
                placeholder="Cidade"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
              w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="1"
                aria-describedby="emailHelp124"
                placeholder="Estado"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700
               bg-white bg-clip-padding border border-solid border-gray-300 
               rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="1"
                placeholder="Endereço"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
              w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="1"
                aria-describedby="emailHelp124"
                placeholder="Logradouro"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700
               bg-white bg-clip-padding border border-solid border-gray-300 
               rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="1"
                placeholder="Numero"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2.5  bg-blue-600  text-white
          font-medium text-xs leading-tight uppercase rounded shadow-md
           hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg 
           focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg 
           transitionduration-150 ease-in-out"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
