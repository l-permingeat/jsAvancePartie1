const fs = require('fs');
const folder = require('os').homedir();
function getIcon(item) {
    if (item.isDirectory()) {

        return '🌷';
    }
    return '📁';

}
async function list(path) {
    const items = await fs.promises.readdir(path, { withFileTypes: true });
    for (const item of items) {
        console.log(getIcon(item) + ' ' + item.name);
    }
    return items.length;
}

console.log('Hello');
