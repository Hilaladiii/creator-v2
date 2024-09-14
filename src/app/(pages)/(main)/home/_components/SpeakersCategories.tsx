import Image from "next/image";

const categories = [
  {
    query: "environment",
    image: "/images/environment.png",
  },
  {
    query: "technology",
    image: "/images/technology.png",
  },
  {
    query: "health",
    image: "/images/health.png",
  },
  {
    query: "education",
    image: "/images/education.png",
  },
  {
    query: "economics",
    image: "/images/economics.png",
  },
  {
    query: "psychology",
    image: "/images/psychology.png",
  },
  {
    query: "politics",
    image: "/images/politics.png",
  },
];

const SpeakersCategories = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-medium">Speakers Categories</h2>
      <div className="flex justify-between mt-5">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-3 group">
            <div className="w-20 h-20 overflow-hidden rounded-full">
              <Image
                width={80}
                height={80}
                src={category.image}
                alt={category.query}
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-sm font-medium group-hover:text-gray-800 transition-colors duration-300">
              {category.query.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersCategories;
