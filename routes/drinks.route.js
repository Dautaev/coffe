const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controller");
const route = Router();

route.get("/drinks", drinksContoller.getDrinks);
route.post("/drinks", drinksContoller.addDrinks);
route.get("/drinks/in-stock", drinksContoller.getDrinksInStock);
route.get("/drinks/:id", drinksContoller.getDrinkInfo);
route.delete("/drinks/:id", drinksContoller.deleteDrink);
route.patch("/drinks/:id", drinksContoller.patchDrink);

module.exports = route;
