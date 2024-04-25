const {Car} = require("../models");

const carPage = async (req,res) => {
    try {
        const cars = await Car.findAll()
        console.log(cars)
        res.render("cars/index.ejs", {
            cars,
            message: req.flash("message",""),
        }); 
    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};

// render halaman
const createCarPage = async (req, res) => {
    try {
        res.render("cars/create.ejs")
    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};
// proses masukin data ke database
const createCar = async (req, res) => {
    try {
        await Car.create(req.body);
        req.flash("message", "Ditambah");
        res.redirect("/cars");
    } catch (err) {
        console.log (err.message);
    }

}
const editCarPage = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);

        res.render("cars/edit.ejs", {
            car,
        }); //ngerender halaman ejs dengan ngeprint juga data customersnya

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};

const editCar = async (req, res) => {
    try {
        await Car.update(req.body, {
            where: {
                id: req.params.id,
            },
        }); // seq tau mana yg diupdate berdasarkan dan yg diupdate dari frontend

        req.flash("message","Diedit")
        res.redirect ("/cars") // res direct ke halaman customer

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};
const deleteCar = async (req, res) => {
    try {
        await Car.destroy({
            where: {
                id: req.params.id,
            },
        }); // seq tau mana yg diupdate berdasarkan dan yg diupdate dari frontend

        res.redirect ("/cars") // res direct ke halaman customer

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs", {
            message: err.message,
        });
    }
};

module.exports = {
    carPage,
    createCarPage,
    createCar,
    editCarPage,
    editCar,
    deleteCar,

};