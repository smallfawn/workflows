const fs = require('fs');

// 创建一个对象
const data = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

// 将对象转换为JSON字符串
const jsonData = JSON.stringify(data, null, 2);

// 写入JSON文件
fs.writeFile('data.json', jsonData, (err) => {
  if (err) throw err;
  console.log('JSON文件已创建');
});
