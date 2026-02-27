#微博批量删除工具包

一款安全可控的自动化工具，用于批量删除微博。

本项目提供：

- 控制台版本（快速使用）

- Tampermonkey 用户脚本版本（专业工具）

- 防风险延迟系统

- 开始/暂停控制器

- 自动滚动支持

---

## 功能

- 中速安全删除

- 随机延迟以降低风险

- 开始/暂停 UI 面板

- 自动滚动检测

- 支持 100-10,000 条微博（渐进模式）

---

## 版本类型

### 1️⃣ 控制台版本

📂 /console/weibo-delete-console.js

使用方法：

1. 打开网页版微博首页，确保所有微博都已加载出来（目前只支持1000条以内。因为作者本人微博没有那么多条，不知道更多的微博主页长啥样，不好写脚本内容，如有愿意提供实验账号的感激不尽）

2. 按 F12 → 控制台（如果无法粘贴，记得先清空控制台然后输入“允许粘贴”后回车）

3. 复制并粘贴脚本

4. 按 Enter 键开始删除，大概删除十几条会暂停一下，防止被微博限制，可以自己修改脚本设置等待间隔，建议不要改太短
 
5. 右上角出现控制器，按开始会自动运行脚本，删除过程中请勿关闭或刷新网页，删除完毕后点击暂停即可，刷新一次页面后控制器自动消失

---

### 2️⃣ Tampermonkey 版本

📂 /userscript/weibo-delete.user.js

步骤：

1. 安装 Tampermonkey

2. 创建新用户脚本

3. 粘贴用户脚本内容

4. 保存并刷新微博页面

---

## 安全提示

- 本工具模拟人机交互

- 请勿过度删除

- 使用风险自负

- 作者不对账号限制负责

---

## 更新计划

- [ ] 按日期范围删除

- [ ] 智能验证码检测暂停

- [ ] 大规模模式（10,000+ 条微博）

- [ ] UI 主题自定义

---

## 许可

MIT 许可
------------------------------------------------------------------------------------------------
# Weibo Batch Delete Toolkit

A safe and controllable automation tool for batch deleting Weibo posts.

This project provides:

- Console version (quick usage)
- Tampermonkey userscript version (professional tool)
- Anti-risk delay system
- Start / Pause controller
- Auto-scroll support

---

## Features

- Medium-speed safe deletion
- Random delay to reduce risk
- Start / Pause UI panel
- Auto scroll detection
- Supports 100–10,000 posts (gradual mode)

---

## Version Types

### 1️⃣ Console Version

📂 /console/weibo-delete-console.js

How to use:

1. Open Weibo homepage
2. Press F12 → Console
3. Copy and paste script
4. Press Enter

---

### 2️⃣ Tampermonkey Version

📂 /userscript/weibo-delete.user.js

Steps:

1. Install Tampermonkey
2. Create new script
3. Paste the userscript content
4. Save and refresh Weibo page

---

## Safety Notice

- This tool simulates human interaction
- Do not delete too aggressively
- Use at your own risk
- The author is not responsible for account restrictions

---

## Roadmap

- [ ] Delete by date range
- [ ] Smart captcha detection pause
- [ ] Large scale mode (10,000+ posts)
- [ ] UI theme customization

---

## License

MIT License