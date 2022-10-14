function SignUpForm() {
  return (
    <div className="block p-6">
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700
               bg-white bg-clip-padding border border-solid border-gray-300 
               rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput123"
              aria-describedby="1"
              placeholder="Nome"
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
              placeholder="Matricula"
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block w-full px-3 py-1.5 text-base font-normal 
            text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white
             focus:border-blue-600 focus:outline-none"
            id="1"
            placeholder="Email"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="password"
            className="form-control block w-full px-3 py-1.5 text-base font-norma  text-gray-70
             bg-white bg-clip-padding border border-solid border-gray-300 rounded 
             transition ease-in-out m-  focus:text-gray-700 focus:bg-white
              focus:border-blue-600 focus:outline-none"
            id="1"
            placeholder="Senha"
          />
        </div>

        <div className="form-group mb-6">
          <select
            className="form-control block w-full px-3 py-1.5 text-base font-norma  text-gray-70
              bg-white bg-clip-padding border border-solid border-gray-300 rounded 
              transition ease-in-out m-  focus:text-gray-700 focus:bg-white
               focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Admin</option>
            <option value="1">Coordenador</option>
          </select>
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
  );
};

export default SignUpForm;
