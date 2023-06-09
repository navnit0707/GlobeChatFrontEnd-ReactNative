import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import login_icon from "../../../assets/login_icon.png";
function Home() {
  return (
    <>
      <div className="home-container">
        <img
          src="https://pbs.twimg.com/media/CnX1wcEXEAAOGcM.jpg"
          className="home-image"
          alt="GlobeChat"
        />
        <p className="home-text">
          Hey! Welcome to <span>GlobeChat</span>
        </p>
        <p className="home-description">
          A place where you can contact with anyone without worrying about
          processes like phone verification or email
        </p>

        <Link to="/login">
          <button className="login-button">
            <img src={login_icon} alt="login icon" />
            <span>Login</span>
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
