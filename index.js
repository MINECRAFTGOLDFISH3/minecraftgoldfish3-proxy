import { ChemicalServer } from "chemicaljs";
import express from "express";

const chemical = new ChemicalServer({
    default: "rammerhead",
    uv: true,
    scramjet: false,
    rammerhead: true,
    hostname_blacklist: [ /google\.com/, /reddit\.com/ ],
    hostname_whitelist: [ /example\.com/ ]
});

const port = process.env.PORT || 8080;

chemical.app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

chemical.listen(port, () => {
    console.log(`Chemical example styled listening on port ${port}`);
});