nit
===

node command line tool to load node module in interactive repl

lets you repl inside a module environment

### usage

`nit [filename]`

load filename into repl environment

`nit`

load file current folder `index.js` or `current_folder_name.js` into repl environment

`devmon filename`

call `nit` REPL and watch the target file, reload on file change

<hr>

#### snit (deprecated)

~~shell script using nodemon + nit to reload on change~~
