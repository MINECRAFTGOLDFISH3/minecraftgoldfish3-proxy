import { ChemicalServer } from "chemicaljs";
import express from "express";

const chemical = new ChemicalServer();

const port = process.env.PORT || 8080;

chemical.app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

chemical.error((req, res) => {
    res.status(404);
    res.send("404 Error");
});

chemical.listen(port, () => {
    console.log(`Chemical example styled listening on port ${port}`);
});