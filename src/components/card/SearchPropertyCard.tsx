const SearchPropertyCard = () => {
  return (
    <form className="relative lg:absolute lg:top-[80%] mt-8 lg:mt-0 flex justify-between items-center bg-white lg:flex-nowrap flex-wrap shadow-md p-8 w-full lg:w-[90%] mx-auto rounded-3xl">
      <div className="flex justify-center items-center w-1/2 md:w-1/3 lg:w-full border-r-[1px] border-black">
        <div className="flex flex-col w-full pl-4">
          <label htmlFor="location" className="mb-2 px-2 font-medium">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Jakarta"
            className="p-2 bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 md:w-1/3 lg:w-full md:border-r-[1px] border-black">
        <div className="flex flex-col w-full pl-4">
          <label htmlFor="property-type" className="mb-2 px-2 font-medium">
            Property Type
          </label>
          <input
            type="text"
            name="property-type"
            placeholder="Duplex"
            className="p-2 bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 md:w-1/3 lg:w-full my-4 lg:my-0">
        <div className="flex flex-col w-full pl-4">
          <label htmlFor="budget" className="mb-2 px-2 font-medium">
            Budget
          </label>
          <input
            type="number"
            name="budget"
            placeholder="$12,000"
            className="p-2 bg-transparent"
          />
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end items-center mt-2 lg:mt-0">
        <button className="bg-primary text-secondary py-4 px-12 lg:px-[20%] rounded-2xl">
          Search Property
        </button>
      </div>
    </form>
  );
};

export default SearchPropertyCard;
