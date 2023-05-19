const React = require("react");

class Edit extends React.Component {
  render() {
    const flight = this.props.flights;
    console.log(flight, "Change flight");
    const destination = this.props.flights.destination;
    console.log(destination[0]);
    return (
        <div>
          <h1>Change my Flight </h1>
          <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
          <label name="airport">Airport: </label>
          <select name="airport" defaultValue="SAN">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
        <br />
        <br />
        Arrival Date: {" "}
        <input type="Date" name="arrival" defaultValue={flight.arrival} />
        <br />
        <br />
        <input type="submit" value="Submit Changes" />
      </form>
      <a href="/flights">Back to Main Page</a>
      </div>
    );
  }
}

module.exports = Edit;