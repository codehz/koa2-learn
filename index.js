"use strict";

require("babel-core/register")(
    {
        presets: ['es2015-node5','stage-3','es2015']
    }
);
 
require("babel-polyfill");
 
require("./app.js");