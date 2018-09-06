module.exports = {
    "parserOptions": {
        "ecmaVersion": 6
    },
    "extends": "google",
    "rules": {
        "indent": ["error", 4],
        "max-len": [1, 120, 2, {"ignoreComments": false}],
        "brace-style": ["error", "stroustrup"],
    }
};