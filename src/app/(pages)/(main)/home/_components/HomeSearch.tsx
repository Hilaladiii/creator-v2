import Button from "@/components/ui/Button";

const HomeSearch = () => {
  return (
    <div className="w-full h-[60vh] bg-[url('/images/bg-home.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold">Make Your Event Great</h1>
      <div className="w-[65%] flex flex-row gap-2 justify-center items-center mt-16">
        <select
          name="category"
          id="category"
          className="focus:outline-none ring-1 ring-blue50 bg-transparent text-lg rounded-md px-2 py-1 w-full max-w-md"
        >
          <option value="">Select Category</option>
        </select>
        <select
          name="category"
          id="category"
          className="focus:outline-none ring-1 ring-blue50 bg-transparent text-lg rounded-md px-2 py-1 w-full  max-w-md"
        >
          <option value="">Select Location</option>
        </select>
        <Button label="Search" size="big"></Button>
      </div>
    </div>
  );
};

export default HomeSearch;
