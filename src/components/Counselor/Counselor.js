import './Counselor.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Counselor = () => {
    return (
    <div>
      
      <NavBar/>

        <center>
          <br/>
      <h1><i>Meet our Counsellors!</i></h1>
      <br />
      <div className="card">
        <img className='image' src={require('./c4.jpg')} alt="Avatar" />
        <div className="ccontainer">
          <h4><b>Apoorva Arora</b></h4>
          <p>
            Specialized in guiding students in architecture field for 8 years
          </p>  <br/>
          <button type="button" className='cbutton'>Read More!</button>
        </div>
      </div>
      <br />
      <div className="card">
        <img className='image' src={require('./c4.jpeg')} alt="Avatar" />
        <div className="ccontainer">
          <h4><b>Sahil Mehta</b></h4>
          <p>15 years of experience in Psychological studies</p>  <br/>
          <button type="button" className='cbutton'>Read More!</button>
        </div>
      </div>
      <br />
      <div className="card">
        <img className='image' src={require('./c7.jpeg')} alt="Avatar" />
        <div className="ccontainer">
          <h4><b>Ashima Khanna</b></h4>
          <p>
            Architect & Engineer , 6 years of experience in guiding students for
            higher education in engineering studies
          </p>  <br/>
          <button type="button" className='cbutton'>Read More!</button>
        </div>
      </div>
      
    </center>
<br/>
    <Footer/>

    </div>
    );
}

export default Counselor;