const express = require("express");
const { setItem, getItem, editItem, deleteItem, likeItem, dislikeItem, getSingleItem } = require("../controllers/item.controller");
const router = express.Router();

router.get("/", getItem);

router.get("/:id", getSingleItem);

router.post("/", setItem );

router.put("/:id", editItem);

router.delete("/:id", deleteItem);

router.patch("/like-post/:id", likeItem);

router.patch("/dislike-post/:id", dislikeItem);


module.exports = router