import Header from '../components/Header';
import { Container } from '@mantine/core';
import HeroImage from '../assets/hero_image.png';
import styles from '../styles/Home.module.scss';


function Home() {
  return (
    <Container 
    size="xl"
    >
      <Header pageTitle="Home Page" />
     <img src={HeroImage} alt="hero" className={styles.heroImage} />
    </Container>
  );
}

export default Home;
