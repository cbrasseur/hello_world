const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'Bonjour les DFS');
};

createIndexFile();

module.exports = createIndexFile;
