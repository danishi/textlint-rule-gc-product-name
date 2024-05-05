const terms = require('./terms.json');

module.exports = function(context) {
    const { Syntax, RuleError, report, getSource } = context;
    return {
        [Syntax.Str](node) {
            const text = getSource(node);
            terms.forEach(term => {
                // Check for correct notation using regular expressions.
                const correctRegExp = new RegExp(`\\b${term.correct}\\b`, 'ig'); // Exact case-insensitive spelling pattern.
                let match;

                while ((match = correctRegExp.exec(text)) !== null) {
                    // Check if it is written with accurate capitalization.
                    if (match[0] !== term.correct) {
                        const ruleError = new RuleError(`Correct to write "${term.correct}" exactly, with proper capitalization.`, {
                            index: match.index
                        });
                        report(node, ruleError);
                    }
                }

                // Check for incorrect descriptions.
                term.incorrect.forEach(incorrectTerm => {
                    const incorrectRegExp = new RegExp(`\\b${incorrectTerm}\\b`, 'g');
                    while ((match = incorrectRegExp.exec(text)) !== null) {
                        const ruleError = new RuleError(`Correct to write "${term.correct}".`, {
                            index: match.index
                        });
                        report(node, ruleError);
                    }
                });
            });
        }
    };
};
