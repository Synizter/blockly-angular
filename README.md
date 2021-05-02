# Blockly for Temi in Angular
## How to use
Install dependencies using `npm install`
run webapp locally using `npm start` or `ng serve`
If there's no error, webapp will be access on localhost:4200

## TODO
- [x] remove variable declaration from generated code
- [x] workaround . and _ tranform by blockly (regrex)
- [x] arrange variable type to external (vars-ext) and internal variable (vars-int). vars-int specify variable which will be used only in blockly workspace.
- [x] remove declaration of variable of vars-ext from output code

## Limitation
-  PREFERRED NOT TO use _ in varaible, use camel case instead