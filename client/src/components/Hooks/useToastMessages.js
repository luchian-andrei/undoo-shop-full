import { Slide, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import useDeviceTypeFinder from "./useDeviceTypeFinder";

const useToastMessages = () => {
  const { device } = useDeviceTypeFinder();

  const cartStatusMessage = () => {
    toast.success("Product added in cart !", {
      position: device === "mobile" ? "top-center" : "bottom-right",
      transition: Slide,
      hideProgressBar: true,
      icon: (
        <FontAwesomeIcon
          icon={faBasketShopping}
          style={{ color: "orange", fontSize: "20px" }}
        />
      ),
    });
  };

  const favoritesStatusMessage = (favoriteProduct) => {
    if (favoriteProduct === false) {
      toast.success("Added in 'favorites' !", {
        position: device === "mobile" ? "top-center" : "bottom-left",
        transition: Slide,
        hideProgressBar: true,
        icon: (
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "red", fontSize: "20px" }}
          />
        ),
      });
    } else {
      toast.warning("Removed from 'favorites' !", {
        position: device === "mobile" ? "top-center" : "bottom-left",
        transition: Slide,
        hideProgressBar: true,
        icon: (
          <FontAwesomeIcon
            icon={faHeartBroken}
            style={{ color: "red", fontSize: "20px" }}
          />
        ),
      });
    }
  };

  return { cartStatusMessage, favoritesStatusMessage };
};

export default useToastMessages;
