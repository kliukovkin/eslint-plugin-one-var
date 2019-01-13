import * as espree from "espree";
import traverse from "babel-traverse";
import * as fs from "fs";

export function fixer(code) {
    const ast = espree.parse(code, {
        ecmaVersion: 6,
    });
    console.log(typeof ast);
    fs.writeFileSync('src/result', ast.toString());
}