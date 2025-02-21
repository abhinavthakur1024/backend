const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON input

// POST endpoint to process input
app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const user_id = "abhinavthakur__24";  
    const email = "aabhinav2401@gmail.com";  
    const roll_number = "22BCS15897"; 

    const numbers = data.filter(item => !isNaN(item)); 
    const alphabets = data.filter(item => isNaN(item)); 

    
    const highest_alphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

  
    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});


app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
