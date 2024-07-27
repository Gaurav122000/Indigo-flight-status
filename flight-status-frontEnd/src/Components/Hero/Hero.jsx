import './Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; 

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className='hero-explore'>
                <p>Check Flight Status</p>
                <Link to='/Status'>
                <FontAwesomeIcon icon={faArrowRight} fade size="2xl" style={{color: "#000099",}} />
                </Link>
            </div>
            <div className='hero-dot-play'>
                <ul className='hero-dots'>
                    <li onClick={() => setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)}className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                </ul>
                <div className='hero-play'>
                    <FontAwesomeIcon icon={playStatus ? faPause : faPlay} size="2xl" style={{color: playStatus ? "#fafafa" : "#f1f2f4"}} onClick={() => setPlayStatus(!playStatus)}/>
                    <p>See the Video</p>
                </div>
            </div>

        </div>
    )
}

export default Hero;