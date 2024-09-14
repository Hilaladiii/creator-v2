const categories = [
  {
    query: "",
    name: "All",
  },
  {
    query: "environment",
    name: "Environment",
  },
  {
    query: "technology",
    name: "Technology",
  },
  {
    query: "health",
    name: "Health",
  },
  {
    query: "education",
    name: "Education",
  },
  {
    query: "economics",
    name: "Economics",
  },
  {
    query: "psychology",
    name: "Psychology",
  },
  {
    query: "politics",
    name: "Politics",
  },
];
const FilterCategory = () => {
  return (
    <div className="w-full flex justify-between mt-5">
      {categories.map((category, index) => (
        <button key={index}>{category.name}</button>
      ))}
    </div>
  );
};

export default FilterCategory;
