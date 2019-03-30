let mysql = require("mysql");
let inquirer = require("inquirer");

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "NOPASSWORDFORYOU",
  database: "bamazon"
});

function displayInventory() {
  // Construct the db query string
  let queryStr = "SELECT * FROM products";

  // Make the db query
  con.query(queryStr, function(err, data) {
    if (err) throw err;

    console.log("Existing Inventory: ");
    console.log("...................\n");

    var strOut = "";
    for (var i = 0; i < data.length; i++) {
      strOut = "";
      strOut += "Item ID: " + data[i].item_id + "  //  ";
      strOut += "Product Name: " + data[i].product_name + "  //  ";
      strOut += "Department: " + data[i].department_name + "  //  ";
      strOut += "Price: $" + data[i].price + "\n";

      console.log(strOut);
    }

    console.log("---------------------------------\n");
    customerPrompt();
  });
}

function customerPrompt() {
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "input",
        message: "What item would you like to buy? Please enter the item ID?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many of this item would you like to buy?"
      }
    ])
    .then(function(input) {
      var item = input.item_id;
      var quantity = input.quantity;

      // Query db to confirm that the given item ID exists in the desired quantity
      var queryStr = "SELECT * FROM products WHERE ?";

      con.query(queryStr, {item_id: item}, function(err, data) {
        if (err) throw err;
        if (data.length === 0) {
          console.log("ERROR: Invalid Item ID. Please select a valid Item ID.");
          customerPrompt();
        } else {
          var productData = data[0];

          // If the quantity requested by the user is in stock
          if (quantity <= productData.stock_quantity) {
            console.log("Congratulations, the product you requested is in stock! Placing order!");

            // Construct the updating query string
            var updateQueryStr = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE item_id = " + item;

            // Update the inventory
            con.query(updateQueryStr, function(err, data) {
              if (err) throw err;

              console.log("Your oder has been placed! Your total is $" + productData.price * quantity);
              console.log("Thank you for shopping with us!");
              console.log("\n--------------------------------------------------------\n");

              // End the database con
              con.end();
            });
          } else {
            console.log("Sorry, there is not enough product in stock, your order can not be placed as is.");
            console.log("Please modify your order.");
            console.log("\n----------------------------------------------------------\n");

            customerPrompt();
          }
        }
      });
    });
}

con.connect(err => {
  if (err) throw err;
  displayInventory();
});
