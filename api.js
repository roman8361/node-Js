const express = require("express");
const router = express.Router(); // нужен чтобы обрабатывать маршруты
const User = require("./user");

// что вводим в браузере http://localhost:4000/api

router.get("/users", (req, res) => {
    User.find({}) // получаем все записи из БД
        .then(user => {
            res.send(user) // отправляем на UI все записи из БД
        });
});

router.post("/users", (req, res) => {
    User.create(req.body) // отправляем в базу пользователя
        .then(user => {
            res.send(user) // для взуализации отправляем, на UI то, что ушло в БД
        });
});

router.put("/users/:id", (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            User.findOne({_id: req.params.id})
                .then(user => {
                    res.send(user); // для взуализации отправляем, на UI то, изменилось
                });
        });
});

router.delete("/users/:id", (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(user => {
            res.send(user); // для взуализации отправляем, на UI то, что удалили
        });
});

module.exports = router;
