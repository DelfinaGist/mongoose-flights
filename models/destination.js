const { Schema, model } = require("mongose");

const destinationSchema = new Schema({
    airport: { type: String, enum: ["AUS", "DAL", "LAX", "SAN", "SEA"], required: true,
    },
    arrival: { type: Date,
    },
});

const Destination = model("Destination", destinationSchema);

module.exports = destinationSchema;