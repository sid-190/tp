import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const readArticle = () => {
    navigate(`/ArticlePage`);
  };

  const chatNow = () => {
    navigate(`/ChatOption`);
  };

  const callNow = () => {
    navigate(`/Lobby`);
  };

  return (
    <div className="parent-div">
      {/* This is NavBar Component */}
      <NavBar />

      {/* This will be main-page video section */}
      <div className="video-call">
        <div className="vid-images">
          <img src={require("./video-call.jpg")} alt="video-call" />
        </div>
        <div className="video-info">
          <div className="vid-sub-heading">
            <h1>VIDEO CONFERENCING</h1>
          </div>{" "}
          <br />
          <br />
          <div className="sub-headingvideo-info">
            <p>
              Connect with our counsellors on video call and speak out all your
              problems virtually itself!{" "}
            </p>
            <h4>Confused about how to use it ?</h4>
            <p>
              Just enter the room number, join the room and connect with your
              counsellor !
            </p>
            <button className="hp-btn" onClick={callNow}>
              Call Now !
            </button>
          </div>
        </div>
      </div>

      {/* This will be main-page chat section */}
      <div className="chat">
        <div className="chat-info">
          <div className="chat-sub-heading">
            <h1>CHAT WITH THE COUNSELLOR</h1>
          </div>{" "}
          <br />
          <br />
          <div className="sub-headingchat-info">
            <p>
              Message the counsellor and vent out all your problems there and
              then itself!{" "}
            </p>
            <h4>Benefit of choosing Chat Process?</h4>
            <p>
              Message the counsellor on your chosen time and day at just a click
              away!
            </p>
            <button className="hp-btn" onClick={chatNow}>
              Chat Now !
            </button>
          </div>
        </div>
        <div className="chat-images">
          <img src={require("./chat.avif")} alt="chat-images" height="600px" />
        </div>
      </div>

      {/* This will be main-page article section */}
      <div className="article">
        <div className="article-images">
          <img src={require("./article.avif")} alt="articles" height="400px" />
        </div>
        <div className="article-info">
          <div className="article-sub-heading">
            <h1>EXPLORE LATEST ARTICLES</h1>
          </div>{" "}
          <br />
          <br />
          <div className="sub-headingarticle-info">
            <p>
              Choose any genre of your choice and enjoy reading latest updates
              about it!{" "}
            </p>
            <h4>Why read Articles?</h4>
            <p>
              Reading our Articles help us keep ourselves updated on daily basis
              by knowing what's going around in the world!
            </p>
            <button className="hp-btn" onClick={readArticle}>
              Read Now !
            </button>
          </div>
        </div>
      </div>

      {/* This will be main-page review section */}
      <div className="testimonials">
        <div className="inner">
          <h1>Our Happy Clients</h1>
          <div className="border-client"></div>
          <div className="row">
            <div className="col">
              <div className="testimonial">
                <img src={require("./ehsan-ahmadi.jpg")} alt="Happy customer" />
                <div className="name">Ehsan Ahmadi</div>
                <p>
                  “I was searching for economical online counselling services
                  and found this amazing platform. Consultify is really the best
                  online therapy website and I got connected to the professional
                  counselor who helped me immensely in my journey. Out of all,
                  this is the best choice if you want to plan and execute your
                  future in an optimized way.”
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={require("./radu-florin.jpg")} alt="Happy customer" />
                <div className="name">Radu Florin</div>
                <p>
                  This is the best Career Counselling I have ever had in my
                  life. I have never seen someone do such an in-depth analysis
                  of one's character and analyse needs based on it. During the
                  counselling, I felt as if my mind was being read and revealed.
                  Your character will be examined perfectly and your interests
                  will be brought out from the nutshell giving you complete
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img
                  src={require("./stefany-stefancik.jpg")}
                  alt="Happy customer"
                />
                <div className="name">Stefany Stefancik</div>
                <p>
                  It's been a very warm and informative interaction with
                  Consultify. The counsellor explained in detail the aptitude
                  and personality traits of our child and provided clearly the
                  career options that we could assess further.The report of
                  Consultify provides in depth the details of the child's
                  characteristics and career options, and the visuals are a
                  treat to the eye.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This is Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;
