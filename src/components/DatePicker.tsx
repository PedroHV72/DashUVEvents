import React, { useState } from 'react';

function DatePicker() {

    const [date, setDate] = useState()

    return (
        <>
          <div className="flex justify-between">
            <div className="datepicker relative form-floating mb-3 xl:w-96">
              <input type="date"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Selecione a data" />
            </div>
            <div className="datepicker relative form-floating mb-3 xl:w-96">
              <input type="date"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Selecione a data" />
            </div>
          </div>
        </>
    )
}

export default DatePicker;