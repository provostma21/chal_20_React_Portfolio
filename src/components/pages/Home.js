import ProfileImg from '../../assets/images/port_photo.jpg';
import '../../styles/Home.css';
import '../../styles/Header.css';


const styles = {
    img: {
        width: "15%",
        height: "15%",
        alignContent: 'center',
    },
};

export default function Home() {
    return (
      <div className="home">
        <div className="header">
            <h1>Home Page</h1>
        </div>
        <img src={ProfileImg} style={styles.img} class='Profile' alt='Matt'></img>
        <h2>About Me</h2>
            <p>
            Hello there and thank you for taking the time to visit my portfolio! My name is Matthew Provost. I was born in New Haven, Connecticut and have lived in Connecticut for practically all of my life. My interest in computers sparked years ago when I saw the MMORPG World of Warcraft. After that I switched from console to PC gaming which then lead to me modifying my first computer followed by my first PC build. After that I became more interested in the internal functions of computers. I started to spend time looking into coding and then joined a bootcamp affiliated with Columbia University to become a Full-Stack software developer. I have much to learn but I'm also very excited about the journey I am on. Feel free to take a look at my work and let me know what you think. Thank you very much for your time!
            </p>
      </div>
    );
  }