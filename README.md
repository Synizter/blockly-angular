# Blockly for Temi in Angular
## How to use
- `git clone https://github.com/Synizter/blockly-angular`
- `cd blockly-angular`
- `npm install`
- `npm start`

If there's no error, webapp will be access on localhost:4200

TODO
[x] Add default var-ext key in case program start with blockly

Limitation
1. Primitive data type support only (for Blockly variable declaration)
2. variable name `name` is prohibited as it's a reserve word
3. Variable which contain dot (.) will be replaced with underscore (_)
