import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      width={1050}
      height={450}
      className="h-auto w-full object-contain"
      sizes="(max-width: 768px) 100vw, 1280px"
      quality={100}
      alt={props.alt}
      src={props.src}
      priority
    />
  );
};

export default PromoBanner;
