const mongoose = require('mongoose');

var map_schema = new mongoose.Schema({
    polygons: [
        [
          { lat: { type: Number }, lng: { type: Number } }
        ]
      ]
});

const Map = mongoose.model('Map', map_schema);

module.exports = Map;
