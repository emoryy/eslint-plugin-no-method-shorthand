/**
 * @fileoverview Don&#39;t allow method shorthands in object literals.
 * @author Barta Gábor
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-method-shorthand"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-method-shorthand", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var foo = { func() {} };",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
