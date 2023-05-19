const React = require("react");
class New extends React.Component {
  render() {
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    const defaultDeparture = oneYearFromNow.toISOString().substr(0, 16);

    
    return (
    
    <div>Flights</div>;
    <div>
        <h1>Book</h1>
        <form action="/flights" method="POST">
          <label name="airport">Airport:</label>
          <select name="airport" defaultValue="SAN">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
        
          Airline:{" "}
          <select name="airline">
            <option value="American">American</option>
            <option value="Southwest">Southwest</option>
            <option value="United">United</option>
          </select>
          <br />
          <br />
          Flight Number: <input type="number" name="flightNo" />
          <br />
          <br />
          Date:{" "}
          <input
            type="datetime-local"
            name="departs"
            defaultValue={defaultDeparture}
          />
          <br />
          <br />
          <input type="submit" value="Add" />
        </form>
        <br />
          <br />
        <a href="/flights">Go Back</a>
      </div>
    );
  }
}
module.exports = New;