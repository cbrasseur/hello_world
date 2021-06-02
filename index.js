const fs = require('fs');

module.exports = createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'Hello world');
};

createIndexFile();
