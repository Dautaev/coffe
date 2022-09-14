const Drink = require("../models/Drink.model");

module.exports.drinksContoller = {
    
    // получение всех напитков
    getDrinks: async (req, res) => {
        const {name, price} = req.body;
        try {
            const drinksList = await Drink.find({}, {name: 1, price: 1});
            res.json(drinksList)
        } catch (error) {
            res.json(`${error.message}: Ошибка при получении всех напитков`)
        }
    },

    // получение напитков в наличии
    getDrinksInStock: async (req, res) => {
        const {name, price} = req.body;
        try {
            const drinksInStockList = await Drink.find({
                inStock: true
            }, {name: 1, price: 1})
            res.json(drinksInStockList)
        } catch (error) {
            res.json(`${error.message}: Ошибка при получении напитков, которые есть в наличии`)
        }
    },

    // подробная информация о конкретном напитке
    getDrinkInfo: async (req, res) => {
        try {
            const drinkInfo = await Drink.find({
                _id: req.params.id
            })
            res.json(drinkInfo)
        } catch (error) {
            res.json(`${error.message}: Ошибка при получении информации о напитке`)
        }
        
    },

    // добавить напиток
    addDrinks: async (req, res) => {
        const {name, price, inStock, coffeine, capacity, description} = req.body;
        try {
            await Drink.create({
                name,
                price,
                inStock,
                coffeine,
                capacity,
                description
            })
            res.json("Напиток добавлен")
        } catch (error) {
            res.json(`${error.message}: Ошибка при добавлении напитка`)
        }
    },

    // удалить напиток
    deleteDrink: async (req, res) => {
        try {
            await Drink.findByIdAndRemove(req.params.id)
            res.json("напиток удален")
        } catch (error) {
            res.json(`${error.message}: ошибка при удалении напитка`)
        }
    },

    // изменение напитка
    patchDrink: async (req, res) => {
        try {
            const {name, price, inStock, coffeine, capacity, description} = req.body;
            await Drink.findByIdAndUpdate(req.params.id, {
                $set: {name, price, inStock, coffeine, capacity, description}
            })
            res.json("напиток изменен")
        } catch (error) {
            res.json(`${error.message}: ошибка при изменени напитка`)
        }
    }
}