const React = require("react");
const moment = require("moment");
class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div>Index Page</div>,
        <ul>
          {flights.map((flight, x) => {

            return (
              <li key={x}>
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