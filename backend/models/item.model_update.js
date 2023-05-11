const mongoose = require("mongoose");

const ItemModel = require('./path/to/itemModel');

module.exports.updateItems = async () => {
  try {
    const result = await ItemModel.updateMany(
      {},
      {
        $set: {
          'image.0.image_url': '../../frontend/public/assets/pictures/t-shirt_aquila.png',
          'size.0.name': 'S',
          'size.0.quantity': 10,
          'size.1.name': 'M',
          'size.1.quantity': 10,
          'size.2.name': 'L',
          'size.2.quantity': 10,
          'size.3.name': 'XL',
          'size.3.quantity': 10,
          'size.4.name': 'XXL',
          'size.4.quantity': 10
        }
      }
    );
    console.log(result.nModified + ' documents modifiés');
  } catch (error) {
    console.error(error);
  }
};
