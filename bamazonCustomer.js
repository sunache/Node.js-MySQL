var mysql = require('mysql');
var inquirer = require("inquirer");
var colors = require("colors");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon_DB",
    port: "8889"
});

inquirer.prompt([

    {
        type: "confirm",
        message: "THANKS FOR VISINTG OUR STORE! Would you like to see the list of products?",
        name: "confirm",
        default: true,
    }

]).then(function (inquirerResponse) {
    if (inquirerResponse.confirm) {
        productList();

    } else {
        console.log("\nThat's okay, Please visit us back soon! \n");
    }
    });



function total() {
    inquirer.prompt([

        {
            type: "input",
            message: "Please type the product's ID that you would like to purchase?",
            name: "item_id",
        },
        {
            type: "input",
            message: "How many units would you like to purchase?",
            name: "stock_quantity",
        }
    ]).then(function (inquirerResponse) {
          var query = "SELECT * FROM products";
        con.query(query, function(err, result, fields) {
            if (err) throw err;
            if (inquirerResponse.stock_quantity > result[(inquirerResponse.item_id)-1].stock_quantity) {
                console.log("Insufficient Quanitity! Let's try again...".red);
                total();
                
            }
            else {
                console.log("Your total for " + inquirerResponse.stock_quantity + " " + result[(inquirerResponse.item_id) - 1].product_name + " would be $" + inquirerResponse.stock_quantity * result[(inquirerResponse.item_id) - 1].price + ".");
               placingOrder();
            }     
         

        });
      });


}



function productList() {
    con.connect(function (err) {
        if (err) throw err;

        var query = "SELECT * FROM products"
        con.query(query, function (err, result, fields) {
            if (err) throw err;
        
            console.log("Here Is The List Of Products On Sale!".yellow);
            console.log("_____________________________________".yellow);
            var s = " ";
            for (var i = 0; i < result.length; i++) {
                console.log(result[i].item_id + s + result[i].product_name + s + result[i].department_name + s + "$".red + result[i].price);
            console.log("_____________________________________".yellow);

            }
             total();

            
        
        });
    });
   
}

function placingOrder() {
    inquirer.prompt([
        {
          type: "confirm",
          message:"Would you like to place an order?",
          name: "confirm",
          default: true,
        },
      ]).then(function(inquirerResponse) {
        if (inquirerResponse.confirm) {
          console.log("Your order has been completed!".green);
          
        } else {
          console.log("\nThat's fine :) Use the coupon 'SAVE20' to get 20% OFF on your next order!\n");
        }
      });
    
    
}




