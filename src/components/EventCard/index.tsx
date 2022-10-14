function EventCard() {
  return (
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
          <div className="container">

              <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                      <div className="max-w-[370px] mx-auto mb-10">
                          <div className="rounded overflow-hidden mb-8">
                              <img
                                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                                  alt="image"
                                  className="w-full" />
                          </div>
                          <div>
                              <span
                                  className="
                   bg-black
                   rounded
                   inline-block
                   text-center
                   py-1
                   px-4
                   text-xs
                   leading-loose
                   font-semibold
                   text-white
                   mb-5
                   "
                              >
                                  13 de Out, 2022
                              </span>
                              <h3>
                                  <a
                                      href="javascript:void(0)"
                                      className="
                      font-semibold
                      text-xl
                      sm:text-2xl
                      lg:text-xl
                      xl:text-2xl
                      mb-4
                      inline-block
                      text-dark
                      hover:text-primary
                      "
                                  >
                                      Titulo do Evento
                                  </a>
                              </h3>
                              <p className="text-base text-body-color">
                                  Descrição: Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default EventCard