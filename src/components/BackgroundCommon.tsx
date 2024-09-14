const BackgroundColor = () => {
  return <div className="w-full h-[50vh] bg-yellow50" />;
};

const BackgroundImage = () => {
  return (
    <div className="w-full h-[60vh] bg-[url('/images/poster.png')] bg-no-repeat bg-cover flex flex-col justify-center pl-64" />
  );
};

export { BackgroundColor, BackgroundImage };
