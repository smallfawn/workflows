const fs = require('fs');

// 读取 README.md 文件内容
const readme = fs.readFileSync('README.md', 'utf8');

// 更新状态表格
const updatedReadme = readme.replace(/🟢️ \| 签到 \| WEB \| [^\n]* \| [^\n]* \| [^\n]* \| [^\n]* \| [^\n]* \| [^\n]* \| [^\n]* \|/g, (match) => {
  // 根据需要更新状态
  // 这里可以根据具体的逻辑来判断状态是否需要更新，例如从 API 获取最新的状态信息

  // 示例：将状态改为红色
  return match.replace('🟢️', '🔴');
});

// 将更新后的内容写入 README.md 文件
fs.writeFileSync('README.md', updatedReadme, 'utf8');
