import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text",
        {
            text: "Compute Engine is a product of Google Cloud.",
        }
    ],
    invalid: [
        {
            text: `ComputeEngine is a product of Google Cloud.`,
            errors: [
                {
                    message: 'Correct to write "Compute Engine".',
                    range: [0, 1]
                }
            ]
        },
        {
            text: `Compute Engine is a product

of Google cloud.`,
            errors: [
                {
                    message: 'Correct to write "Google Cloud" exactly, with proper capitalization.',
                    range: [32, 33]
                }
            ]
        },
    ]
});
