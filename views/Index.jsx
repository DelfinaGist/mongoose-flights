const React = require("react");
const moment = require("moment");

class Index extends React.Component {
  render() {
    const { flights } = this.props;

    const flightStyle = {
      backgroundColor: "lightblue",
      padding: "10px",
      margin: "5px",
      borderRadius: "5px",
      fontWeight: "bold",
    };

    const linkStyle = {
      color: "blue",
      textDecoration: "underline",
      cursor: "pointer",
    };

    return (
      <div>
      <h1 style={{ color: "red" }}>Mongoose Flights</h1>
      <a href="/flights/new" style={linkStyle}>
          Click Here: Book a Flight!
        </a>
        
        <ul>
          {flights.map((flight, x) => {

            return (
              <li key={x} style={flightStyle}>
                <a href={`/flights/${flight._id}`}>
                  {flight.airline}
                  {"      "}
                  {moment(flight.departs).format("ddd MM/DD/YYYY, hh:mm a")}
                </a>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;