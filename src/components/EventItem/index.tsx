import React from "react";

function EventiItem() {
  return (
    <div className='p-5'>
        <section className="flex pt-20 lg:pt-[120px] p-5 pb-10 lg:pb-20">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <a href="">
                            <div className="bg-white rounded-lg overflow-hidden mb-10">
                                <img
                                    src="https://ih1.redbubble.net/image.441548378.5893/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg"
                                    alt="image"
                                    className="w-full h-[300px] object-cover"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-left">
                                    <div className="flex justify-between align-middle">
                                        <h3>
                                            <a href="" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary ">
                                                Titulo do Evento
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="text-base text-body-color leading-relaxed mb-7">
                                        Descrição: Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                        elit. Lorem consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default EventiItem;