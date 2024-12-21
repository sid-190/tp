import './AboutUs.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return(
        <div>

          <NavBar/>

        <div className="heading">
      <h1>About Us</h1>
      <p>
        To select the right career path, you need to have the right counselor!
      </p>
    </div>
    <div className="acontainer">
      <section className="about">
        <div className="about-image">
          <img src={require('./aboutus.jpg')} alt="" />
        </div>
        <div className="about-content">
          <h2>We believe in Counseling the Best</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laboriosam asperiores aliquam amet ab impedit, doloribus
            repellendus! Sunt, dolor quas quos a sapiente ex nisi laborum id!
            Animi, quia nobis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laboriosam asperiores aliquam amet ab impedit, doloribus
            repellendus! Sunt, dolor quas quos a sapiente ex nisi laborum id!
            Animi, quia nobis! 
          </p>
          <a href="" className="read-more">Read More</a>
        </div>
      </section>
    </div>

    <Footer/>
    
    </div>
    );
}

export default AboutUs;