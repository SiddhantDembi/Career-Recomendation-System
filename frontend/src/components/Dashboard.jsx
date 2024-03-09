import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dash-container1">
          <h1 className="dashboard-title">Welcome to Career Wise!</h1>
          <p className="dashboard-desc">
            Unlock Your Career Potential with Personalized Recommendations!{" "}
            <br />
            Discover Your Path to Success! <br /> Are you feeling uncertain
            about your career choices? <br /> Let us guide you towards a
            fulfilling and rewarding career journey. Our personalized
            recommendations are designed to match your skills, interests, and
            aspirations.
          </p>
        </div>
        <div className="dash-container2">
          <div className="dash-container2-div1">
            <h2>How It Works</h2>
          </div>
          <div className="dash-container2-div2">
            <ul>
              <li>
                <u>Profile Creation:</u> <br />
                Begin by creating your personal profile. Share your skills,
                interests, and career goals to help us understand you better.
              </li>
              <li>
                <u>Assessment:</u>
                <br />
                Our advanced assessment tools analyze your profile to identify
                your strengths and areas for growth.
              </li>
              <li>
                <u>Personalized Recommendations:</u>
                <br />
                Receive tailored career recommendations based on your unique
                profile and assessment results.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}