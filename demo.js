const fs = require('fsconst path = require('path');

// 仓根目录
const rootDir = process.cwd();

// 创建demo.json文件的绝对路径
const demoFilePath = path.join(rootDir, 'demo.json');

// 创建demo.json
const data = { message: 'Hello, world!' };
fs.writeFileSync(demoFilePath, JSON.stringify(data));

console.log('demo.json文件创建成功！');
