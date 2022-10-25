const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
    res.send(`port is running at`)
})
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})