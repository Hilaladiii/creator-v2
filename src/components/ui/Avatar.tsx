import Image from "next/image";

interface AvatarProps {
  imageUrl?: string;
}

const Avatar = ({ imageUrl }: AvatarProps) => {
  return (
    <div className="">
      <Image
        alt="Avatar"
        src={imageUrl || "/images/placeholder.jpg"}
        className="size-9 rounded-full"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Avatar;
