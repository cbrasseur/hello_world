const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', 'Bonjour, c\'est bientôt l\'heure de l\'évaluation');
};

createIndexFile();

module.exports = createIndexFile;
