import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-card">

        <h1 className="hero-title">
          Campus Connect
        </h1>

        <p className="hero-sub">
          Smart Placement Management Portal
        </p>

        <div className="hero-btns">

          <Link to="/student-login">
            <button className="hero-btn">
              Student Login
            </button>
          </Link>

          <Link to="/admin-login">
            <button className="hero-btn">
              Admin Login
            </button>
          </Link>

        </div>

        <div style={{marginTop:"15px"}}>
          <Link to="/register">
            <button
              style={{
                width:"250px"
              }}
            >
              Student Registration
            </button>
          </Link>
        </div>

        <div className="stats">

          <div>
            <h2>120+</h2>
            <p>Jobs Posted</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2>200+</h2>
            <p>Placements</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;