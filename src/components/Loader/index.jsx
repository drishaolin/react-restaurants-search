
import Lottie from "react-lottie";
import animationData from "../../assets/restaurants-loading.json";

export default function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <Lottie options={defaultOptions}/>
    )
}
