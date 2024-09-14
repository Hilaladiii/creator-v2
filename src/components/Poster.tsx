interface PosterProps {
  title: string;
  description: string;
}

const Poster = ({ title, description }: PosterProps) => {
  return (
    <div className="w-full h-[60vh] bg-[url('/images/poster.png')] bg-no-repeat bg-cover flex flex-col justify-center pl-64">
      <div className="max-w-sm">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p className="text-xl leading-10">{description}</p>
      </div>
    </div>
  );
};

export default Poster;
