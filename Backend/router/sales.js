const express = require("express");
const app = express();
const sales = require("../controller/sales");

// Add Sales
app.post("/add", sales.addSales);

// Get All Sales
app.get("/get/:userID", sales.getSalesData);
app.get("/getmonthly", sales.getMonthlySales);


app.get("/get/:userID/totalsaleamount", sales.getTotalSalesAmount);

module.exports = app;



// https://abundant-stellar-peach.glitch.me/api/sales/add POST
// https://abundant-stellar-peach.glitch.me/api/sales/get GET
