const React = require("react");
const moment = require("moment");


class Show extends React.Component {
  render() {
    const flight = this.props.flights;
    const destination = flight.destination;
    console.log(flight, "Schedule");

    return (
    <div>Show Page</div>,
    <div>
      <h1>Flight Schedule</h1>
        <p>Airport: {flight.airport}</p>
        <p>Airline: {flight.airline}</p>
        <p>Flight #: {flight.flightNo}</p>
        <p>Departure time:{" "}
          {moment(flight.departs).format("ddd, MM/DD/YYYY, hh:mm a")}</p>
          <a href={`/flights/${flight._id}/edit`}>Edit your Flight ?</a>
        <br />
        <h2>Destination:</h2>
        {destination.map((d, index) => (
          <div key={index}>
            <p>Airport: {d.airport}</p> {/* Include d.airport as a child */}
            <p>
              Arrival: {d.arrival ? d.arrival.toISOString() : ""} {/* Include d.arrival as a child */}
            </p>
          </div>
        ))}
        <form
          action={`/flights/HOOSE${flight._id}/destination?_method=PUT`}
          method="POST"
        >
          <label name="airport">Airport:</label>
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          Arrival Date:
          <input type="datetime-local" name="arrival" />
          <br />
          <br />
          <input type="submit" value="Add Destination" />
        </form>
        <br />
        <br />
        <a href="/flights">Back to Main Page</a>
      </div>
    );
  }
}

module.exports = Show;