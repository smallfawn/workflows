const fs = require('fs');

// 创建demo.json文件
const data = { message: 'Hello, world!' };
fs.writeFileSync('demo.json', JSON.stringify(data));

console.log('demo.json文件创建成功！');
