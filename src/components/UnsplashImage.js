const UnsplashImage = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt={title} className="img" />
    </div>
  );
};

export default UnsplashImage;
