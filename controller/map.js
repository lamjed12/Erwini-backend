
var Map = require("../model/map");

// Get all maps
exports.getMaps = async (req, res) => {
  try {
    const maps = await Map.find();
    res.status(200).json(maps);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new map
module.exports.create = async (req, res) => {

  try {
    const map = await Map.create({
        polygons: req.body.polygons
    });
    res.status(201).json(map);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a map
// exports.delete = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await Map.findByIdAndDelete(id);
//     if (deleted) {
//       res.status(200).json({ message: 'Map deleted successfully' });
//     } else {
//       res.status(404).json({ error: 'Map not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
exports.delete = (req, res) => {
    const id = req.params.id;
    Map.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ error: 'Map not found'});
        } else {
            res.status(200).json({ message: 'Map deleted successfully' });
        }
      })
      .catch((err) => {
        res.status(500).send({ error: 'Internal server error' });
      });
  };
  