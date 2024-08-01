import Video from "../views/Video";
import Trending from "../views/Trending";
import Sales from "../views/Sales";
import New from "../views/New";
import useDeviceTypeFinder from "../components/Hooks/useDeviceTypeFinder";

const Home = () => {
  const { device } = useDeviceTypeFinder();

  return (
    <>
      {device === "desktop" ? (
        <Video />
      ) : device === "tablet" ? (
        <img
          src="./images/luxury-shop.jpg"
          alt="luxury shop"
          className="grayscale"
        />
      ) : (
        <img
          src="./images/luxury-shop-1.jpg"
          alt="luxury shop"
          className="grayscale"
        />
      )}
      <Trending />
      <New />
      <Sales />
    </>
  );
};

export default Home;
