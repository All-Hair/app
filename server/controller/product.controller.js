const db = require("../models");
const Product = db.Product;
const Op = db.Sequelize.Op;
module.exports = {
// Create and Save a new Product

    create : async (req, res) => {
        try {
            
            // Validate request
            if (!req.body.name) {
              res.status(400).send({
                message: "Content can not be empty!"
              });
              return;
            }
          
            // Create a product
            const product = {
              brand: req.body.brand,
              name: req.body.name,
              price: req.body.price,
              stack: req.body.stack,
              color: req.body.color,
              category: req.body.category,
              description: req.body.description,
              date: req.body.date,
              image: req.body.image,
            };
          
            // Save product in the database
            await  Product.create(product)
                res.send("product created successfuly");
        } catch (error) {
            res.status(500).send({
              message:
                error.message || "Some error occurred while creating the product."
            })
            
        }
    },

      // get all products

 findAll :async (req, res) => {
try {
  let data = await  Product.findAll()
    
        res.send(data)
    
} catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving tutorials."
    });
    
}

  }

}
