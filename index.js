const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'Bonjour les DFS, on est le 30/01/2026');
};

createIndexFile();

module.exports = createIndexFile;
