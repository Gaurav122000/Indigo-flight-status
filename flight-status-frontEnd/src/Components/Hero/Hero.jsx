import './Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className='hero-explore'>
                <p>Explore the features</p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" fade size="xs" style={{color: "#000099",}} />
            </div>
            <div className='hero-dot-play'>
                <ul className='hero-dots'>
                    <li onClick={() => setHeroCount(0)} className={heroCount===0?"hero-dot orango":"hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount===1?"hero-dot orango":"hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)}className={heroCount===2?"hero-dot orango":"hero-dot"}></li>
                </ul>

            </div>

        </div>
    )
}

export default Hero;