import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData = [
    {text1: "Dive Into", text2:"what you love"},
    {text1: "Indulge", text2:"your passions"},
    {text1: "Give in to", text2:"what you love"},
  ]
  //creating props
  const [heroCount, setHeroCount] = useState(0);
  //for play / pause the video
  const [playStatus, setPlayStatus] = useState(false);
  //pass the props playStatus, heroCount
  return (
    <div>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]} // so that our text also change with the image
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
    />
    </div>
  )
}
export default App;