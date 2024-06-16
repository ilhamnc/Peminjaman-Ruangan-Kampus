const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express()

app.get('/', (req, res) => {
    res.send({ message: "Success Connected, Welcome!" })
})

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
})