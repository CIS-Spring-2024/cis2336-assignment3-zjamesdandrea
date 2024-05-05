import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// When opening a terminal, run the following to turn the server on:
// first enter - cd "C:\Users\zjame\OneDrive\CIS 2336\Assignment 4&5\cis2336-assignment4-zjamesdandrea\cis2336-assignment3-zjamesdandrea\HTML"
// second enter - node server.mjs
// You will then get confirmation that the server is up and running.

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post("/order", (request, response) => {
    const items = request.body.items;
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    response.status(200).json({ total: total.toFixed(2) });
});

app.get("/calculate-total", (request, response) => {
    const items = JSON.parse(request.query.items);
    let total = 0;

    const prices = {
        "Cheese Burger": 4.99,
        "Club Sandwich": 5.49,
        "Chicken Salad Sandwich": 6.49,
        "Pepperoni Pizza": 8.99,
        "Cheese Pizza": 7.99,
        "Chicken Caesar Salad": 6.99,
        "Mac and Cheese": 3.99,
        "French Fries": 2.99,
        "Coleslaw": 1.99,
        "Soup": 4.49,
        "Side Salad": 3.49,
        "Coke": 1.99,
        "Diet Coke": 1.99,
        "Dr Pepper": 1.99,
        "Sprite": 1.99,
        "Water": 1.49
    };

    items.forEach(item => {
        if (item.item && prices[item.item]) {
            total += prices[item.item] * item.quantity;
        }
    });

    response.status(200).json({ total: total.toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});