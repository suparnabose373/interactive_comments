const express = require('express');
const {CommentModel} = require('../models/commentModel');
const router = express.Router();

router.get('/getCommentList', async (req, res) => {
    try {
        const data = await CommentModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// router.post('/addNewItem', async (req, res) => {
//     const data = new CartModel({
//         itemId: req.body.itemId,
// 		price: req.body.price,
// 		title: req.body.title,
//         quantity: req.body.quantity,
//         totalAmount: req.body.totalAmount
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// });

module.exports = router;