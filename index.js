#! /usr/bin/env node
/********
load node module in interactive repl
you can access module variables and repl inside the module
Rui Azevedo <ruihfazevedo@gmail.com> [www.r-site.net]
**/
var cwd=process.cwd();
var fs=require("fs");
var target=process.argv.slice(2).join(" ");
var repl = require("repl").start("#>");
var ctx=repl.context;
ctx.global=global;
ctx.load=require("simple-loader")(ctx);//initialize load with a context
if (target)
  ctx.load(target);
else if(fs.existsSync("index.js"))
  ctx.load("index.js");
else
  ctx.load(cwd+"/"+(cwd.split("/").pop())+".js");
console.log("ready");
