const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'Bonjour les CDA, on est le 30/06/2025');
};

createIndexFile();

module.exports = createIndexFile;
