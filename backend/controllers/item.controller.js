const ItemModel = require ("../models/item.model");

module.exports.getItem = async (req, res) => {
    const item = await ItemModel.find();
    res.status(200).json(item);
}

module.exports.getSingleItem = async (req,res) => {
  const item = await ItemModel.findById(req.params.id);
  res.status(200).json(item);
}

module.exports.setItem = async (req, res) => {
    const item = await ItemModel.create({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        price: req.body.price,
        image: req.body.image,
        size: req.body.size
    })
    res.status(200).json(item)
  };

module.exports.editItem = async (req, res) => {
    const item = await ItemModel.findById(req.params.id);

    if (!item) {
        res.status(400).json({ message : "Ce vêtement n'existe pas"});
    }

    const updateItem = await ItemModel.findByIdAndUpdate(item, req.body, {
        new: true,
    });

    res.status(200).json(updateItem);
};

module.exports.deleteItem = async (req, res) => {
    const item = await ItemModel.findById(req.params.id);
  
    if (!item) {
      res.status(400).json({ message: "Cet item n'existe pas" });
    }
    await item.deleteOne({ _id: item })
    res.status(200).json("Item supprimé " + req.params.id);
  };
  
  module.exports.likeItem = async (req, res) => {
    try {
      await ItemModel.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { likers: req.body.userId } },
        { new: true }
      ).then((data) => res.status(200).send(data));
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  module.exports.dislikeItem = async (req, res) => {
    try {
      await ItemModel.findByIdAndUpdate(
        req.params.id,
        { $pull: { likers: req.body.userId } },
        { new: true }
      ).then((data) => res.status(200).send(data));
    } catch (err) {
      res.status(400).json(err);
    }
  };