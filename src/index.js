const terms = require('./terms.json'); // terms.json ファイルを読み込む

module.exports = function(context) {
    const { Syntax, RuleError, report, getSource } = context;
    return {
        [Syntax.Str](node) {
            const text = getSource(node); // テキストの取得
            terms.forEach(term => {
                // 正規表現を用いて、正確な表記かどうかをチェック
                const correctRegExp = new RegExp(`\\b${term.correct}\\b`, 'ig'); // 大文字小文字を無視した正確な表記のパターン
                let match;

                while ((match = correctRegExp.exec(text)) !== null) {
                    // 正確なキャピタライゼーションで書かれているかをチェック
                    if (match[0] !== term.correct) {
                        const ruleError = new RuleError(`It is correct to write "${term.correct}" exactly, with proper capitalization.`, {
                            index: match.index
                        });
                        report(node, ruleError);
                    }
                }

                // 不正な表記があるかチェック
                term.incorrect.forEach(incorrectTerm => {
                    const incorrectRegExp = new RegExp(`\\b${incorrectTerm}\\b`, 'g');
                    while ((match = incorrectRegExp.exec(text)) !== null) {
                        const ruleError = new RuleError(`It is correct to write "${term.correct}".`, {
                            index: match.index
                        });
                        report(node, ruleError);
                    }
                });
            });
        }
    };
};
