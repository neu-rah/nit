nit
===

node command line tool to load node module in interactive repl

lets you repl inside a module environment

### usage ###

**nit [filename]** load filename into repl environment

**nit** load index.js or `cwd`.js into repl environment

trigger debugging actions inside your module

    var DEBUG=module.id==="repl";


snit
====

shell script using nodemon + nit to reload on change
