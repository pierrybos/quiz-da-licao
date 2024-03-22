import Image from "next/image";

const Logo = ({ onClick, src, width, height, alt }) => {
  return (
    <div className="logo">
      <Image
        src={src}
        onClick={onClick}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default Logo;
