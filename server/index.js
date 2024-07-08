const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "view"));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());

async function main() {
    app.get("/", (req, res) => {
        res.render('Home.ejs');
    })
    app.listen(3000, () => {
        console.log("Server running on port 3000");
        console.log("http://localhost:3000");
    });
}
main()