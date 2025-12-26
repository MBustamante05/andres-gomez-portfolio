type GalleryCardProps = {
  image: string;
  title: string;
  imageCount: string;
};

export const GalleryCard = ({ image, title, imageCount }: GalleryCardProps) => {
  return (
    <div className="w-full h-full flex flex-col text-center justify-center items-center overflow-hidden">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-3 sm:p-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="text-gray-400 sm:text-gray-600 text-sm sm:text-base">
          {imageCount}
        </p>
      </div>
    </div>
  );
};
