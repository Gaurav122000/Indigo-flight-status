import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData = [
    {text1: "Stay Informed", text2:"on your Flight"},
    {text1: "Delivering", text2:"Aviation Intelligence"},
    {text1: "Get live ", text2:"notification on your phone"},
  ]
  //creating props
  const [heroCount, setHeroCount] = useState(0);
  //for play / pause the video
  const [playStatus, setPlayStatus] = useState(false);
  //useEffect hook for changing the slides, useEffect only execute once then after that setInterval execute every 3 sec
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {return count===2?0:count+1})
    }, 6000);
  },[])

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