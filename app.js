const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to the world of of full stack development');
})

app.get("/users", async (req, res) => {
    try {
        res.status(200).json({ message: "recieved data" });
    } catch (err) {
        res.status(500).json({ message: "internal server error" })
    }

});

app.post("/users", async (req, res) => {
   console.log(req.body);
    try {
        let { username, email, password, dateofbirth } = req.body;

        if (!username || !email || !password || !dateofbirth) {
            return res.status(400).json({ message: "please fill all the fields" })
        }
        else if (!username) {
            return res.status(400).json({ message: "username cannot be empty" })
        }

        else if (!email) {
            return res.status(400).json({ message: "email cannot be empty" })
        }
        else if (password.length < 8 || password.length > 16) {
            return res.status(400).json({ message: "password should be in range between 8 to 16" })
        }
        else if (!dateofbirth) {
            return res.status(400).json({ message: "date of birth is required to fill" })
        }
        res.status(200).json({ message: `data received as name: ${username}, email: ${email}, password: ${password}, date of birth: ${dateofbirth}` });
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" });

    }
});

let PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})