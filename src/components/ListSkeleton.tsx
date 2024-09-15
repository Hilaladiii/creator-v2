import SkeletonCard from "@/components/SkeletonCard";

const ListSkeleton = () => {
  return (
    <div className="w-full flex flex-row gap-16">
      {[...Array(3)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default ListSkeleton;
