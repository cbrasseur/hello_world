const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'Salut les ESI CYB 25-27 !');
};

createIndexFile();

module.exports = createIndexFile;
