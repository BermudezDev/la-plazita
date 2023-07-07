import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HashLink = () => {
  let location = useLocation();
  useEffect(() => {
    if(location.hash){
      let element = document.querySelector(location.hash);
      element.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }
  }, [location.hash]);

  return null;
};

export default HashLink;