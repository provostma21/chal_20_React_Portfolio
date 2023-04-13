import React from 'react';
import '../../styles/Home.css';
import '../../styles/Header.css';
import '../../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Card} from 'react-bootstrap';
import projects from '../../assets/projects/projects';

const styles = {
  img: {
    height: '200px',
    width: '250px%',
    margin: 'auto',    
  },
  card: {
    color: '#FFF4E9',
    width: '200px',
  },
};

export default function Portfolio() {
  
    const element= projects.map((project, index) =>
    <div key={index} className='project-grid-item'>
      <a 
        key={index}
        href={project.link}
        target='_blank'
        rel='noopener noreferrer'
        className='mx-auto d-block'
      >
        <img src={project.image} alt={project.name} className='mx-auto d-block'
        style={styles.img}/>
      </a>
      <div className='text-center'>
        <h3 className='text-center'>{project.name}</h3>
        <button className='btn btn-primary'>
        <a href={project.repoLink} target='_blank' rel='noopener noreferrer'
        >GitHub Link</a>
        </button>
      </div>
    </div>)
  
  return (
    <div className="portfolio">
      
      <Container>
        <div className="header">
            <h1>My Work</h1>
        </div>
        <Card>
        <Row xs={1} md={2}>          
            {element}                  
        </Row>
        </Card>
      </Container>
    </div>

  );
}