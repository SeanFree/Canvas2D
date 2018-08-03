'use strict';

module.exports = {
    "recurseDepth": 10,
    "tags": {
        "allowUnknownTags": true
    },
    "source": {
        "include": ["src/lib"],
        "exclude": ["src/test"],
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    plugins: ['plugins/markdown'],
    "templates": {
        "cleverLinks": true,
        "monospaceLinks": true,
        "default": {
            "outputSourceFiles": true
        }
    },
    "opts": {
        "destination": "docs",
        "recurse": true,
        "readme": "README.md"
    }
};