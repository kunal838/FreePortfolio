function Images() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="bg-purple-700 p-1 font-semibold flex items-center md:pl-20 sm:text-6xl text-4xl rounded-lg  title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            Well Hello
          </h1>
          <p className="lg:pl-6 md:hidden lg:w-2/3 mx-auto text-2xl md:text-3xl leading-8">
         Basically Write About Yourself........... Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
          </p>
        </div>
        <div className="  flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 md:w-1/2  hidden md:inline-block">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              />
            </div>
            <div className="md:p-2 p-1 md:w-1/2 hidden md:inline-block">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              />
            </div>
            <div className="md:p-2 hidden md:inline-block p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
