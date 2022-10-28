
import "../../Styles/HomePage/top.css";
function TopSection() {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h1>Find Your Train Ticket From The Larget Resale Market Place</h1>
          <p className="search-text">
            Find Your Train Tickets From any Station and Any Place Country Wide
          </p>
          <form className="search">
            <div>
              <input type="text" placeholder="Enter Keyword.." />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TopSection;
