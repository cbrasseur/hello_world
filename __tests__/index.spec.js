const fs = require('fs');
const createIndexFile = require('../index');

test("hello_world", () => {
    createIndexFile();

    const content = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf-8');

    expect(content).toEqual('Bonjour les CDA, on est le 30/06/2025');
})
