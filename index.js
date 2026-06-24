const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'Salut, les CDA 2026 de CESI');
};

createIndexFile();

module.exports = createIndexFile;
