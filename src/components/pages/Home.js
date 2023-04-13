import ProfileImg from '../../assets/images/port_photo.jpg';
import '../../styles/Home.css';
import '../../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';


const styles = {
    img: {
        width: "15%",
        height: "15%",
        alignContent: 'center',
    },
    card: {
      color: '#FFF4E9',
      width: '200px',
    },
};

export default function Home() {
    return (
      <div className="App">
      <div className="home">
        <div className="header">
            <h1>Matthew M. Provost</h1>
        </div>
        <Container className='container'>
        <Card className="mb-3" style={{ color: '#FFF4E9' }}>
          <Card.Img src={ProfileImg} style={styles.img}  class='rounded mx-auto d-block' alt='Matt'/>
            <Card.Body>
              <Card.Title style={{color: '#000'}}>About Me</Card.Title>
              <Card.Text style={{ color: "#000"}}>
                Hello there and thank you for taking the time to visit my portfolio! My name is Matthew Provost. 
                I was born in New Haven, Connecticut and have lived in Connecticut for practically all of my life. 
                My interest in computers sparked years ago when I saw the MMORPG World of Warcraft. After that I switched 
                from console to PC gaming which then lead to me modifying my first computer followed by my first PC build. After that I became more interested in the internal functions of computers. I started to spend time looking into coding and then joined a bootcamp affiliated with Columbia University to become a Full-Stack software developer. I have much to learn but I'm also very excited about the journey I am on. Feel free to take a look at my work and let me know what you think. Thank you very much for your time!
              </Card.Text>
            </Card.Body>
        </Card>
        </Container>
      </div>
      </div>
    );
  }