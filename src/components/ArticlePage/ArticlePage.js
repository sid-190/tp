import "./ArticlePage.scss";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const ArticlePage = () => {
  return (
    <div>

      <NavBar/>

      {/* <h1 className="text-center text-danger text-capitalize my=5">Articles</h1> */}
      <div className="acontainer text-center">
        <div className="row">
          <div className="col">
            <div className="acard">
              <img
                src="https://ypspatiala.in/blog/wp-content/uploads/2020/02/career-counselling.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  The importance of career counselling in today’s time
                </h5>
                <p className="card-text">
                  In today’s extremely tough competitive world people are
                  continuously losing hope to survive on this planet, due to
                  various reasons like large population, tough competitions, and
                  various difficulties that children are facing but gradually
                  students are realizing that they want to pursue a career in
                  which they are passionate about.
                </p>
                <a
                  href="https://timesofindia.indiatimes.com/readersblog/aadityakanchanblogs/the-importance-of-career-counselling-in-todays-time-32875/"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src="https://www.brainchecker.in/assets/front/images/career-counsellors-in-nashik.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Challenges and opportunities in efforts towards inclusive
                  education: reflections from India
                </h5>
                <p className="card-text">
                  Across the globe, the Salamanca Statement has provided the
                  strongest impetus for drawing attention to the education of
                  some of the most marginalised groups. In India, it has had a
                  significant and specific impact on the provision of schooling
                  opportunities for children with disabilities.
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src="https://d3bat55ebwjhsf.cloudfront.net/expert-article/user_abhilasharai29%40gmail.comrai/career_counselling_for_students.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Increasing students’ career readiness through career guidance
                </h5>
                <p className="card-text">
                  Career guidance in this sense describes a range of
                  school-based interventions which seek to prepare young people
                  for their transition to their post-secondary school lives and
                  to empower them to be successful in their lives and careers.
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/03069885.2021.1937515"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src={require("./c4.jpg")}
                alt="video-call"
                className="card-img-top"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Challenges and opportunities in efforts towards inclusive
                  education: reflections from India
                </h5>
                <p className="card-text">
                  The Salamanca Statement has served as the primary catalyst for
                  raising awareness of the education of some of the most
                  marginalised communities worldwide. It has had a notable and
                  particular effect on the availability of educational options
                  for children with disabilities in India.
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src={require("./c5.webp")}
                alt="video-call"
                className="card-img-top"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Check out the latest Article here
                </h5>
                <p className="card-text">
                  People constantly lose hope that they will survive in today's
                  fiercely competitive world for a variety of reasons, including
                  the sheer number of people on the planet, the intensity of
                  competition, and the difficulties children face. However,
                  students are gradually realising that they want to pursue a
                  career that they are passionate about.
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src={require("./c6.jpg")}
                alt="video-call"
                className="card-img-top"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Latest Article available here!</h5>
                <p className="card-text">
                  In this context, the term "career guidance" refers to a
                  variety of school-based interventions that aim to enable youth
                  to succeed in both their personal and professional life and to
                  help them transition to post-secondary education.
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src={require("./c7.jpg")}
                alt="video-call"
                className="card-img-top"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Know the importance of Career!
                </h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dolor sit amet consectetur adipiscing elit. Integer feugiat
                  scelerisque varius morbi enim nunc faucibus a pellentesque. Ut
                  sem viverra aliquet eget. Egestas egestas fringilla phasellus
                  faucibus scelerisque. 
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src={require("./c8.png")}
                alt="video-call"
                className="card-img-top"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Let's have a look at this!
                </h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dolor sit amet consectetur adipiscing elit. Integer feugiat
                  scelerisque varius morbi enim nunc faucibus a pellentesque. Ut
                  sem viverra aliquet eget. Egestas egestas fringilla phasellus
                  faucibus scelerisque. 
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="acard">
              <img
                src={require("./c9.jpg")}
                alt="video-call"
                className="card-img-top"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Benefits of knowing the Right path to career
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dolor sit amet consectetur adipiscing elit. Integer feugiat
                  scelerisque varius morbi enim nunc faucibus a pellentesque. Ut
                  sem viverra aliquet eget. Egestas egestas fringilla phasellus
                  faucibus scelerisque.  
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys"
                  className="btn btn-primary"
                >
                  <br/>
                  <button className="abutton">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
      
    </div>
  );
};

export default ArticlePage;
