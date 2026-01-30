# GitHub Pages 部署指南

本指南将帮助您将江苏智安油气安全科技有限公司网站部署到 GitHub Pages。

## 📋 准备工作

### 1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称建议使用：`zhian-oil-gas-safety` 或您喜欢的名称
4. 选择 "Public"（GitHub Pages 免费版只支持公开仓库）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 2. 推送代码到 GitHub

在您的本地项目目录中执行：

```bash
# 初始化 git 仓库（如果还没有初始化）
git init

# 添加远程仓库地址（替换为您的实际仓库地址）
git remote add origin https://github.com/您的用户名/zhian-oil-gas-safety.git

# 添加所有文件到 git
git add .

# 提交代码
git commit -m "Initial commit: 江苏智安油气安全科技网站"

# 推送到 main 分支
git branch -M main
git push -u origin main
```

## 🚀 启用 GitHub Pages

### 步骤 1：访问仓库设置

1. 在 GitHub 上打开您的仓库
2. 点击顶部的 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages" 选项

### 步骤 2：配置 Pages

1. 在 "Source" 部分，选择 "GitHub Actions"
2. 不要选择 "Deploy from a branch"，因为我们使用 GitHub Actions

### 步骤 3：配置自定义域名（可选）

如果您有自己的域名：

1. 在 "Custom domain" 字段中输入您的域名
2. 点击 "Save"
3. 在您的域名提供商处添加 CNAME 记录：
   - 主机名：`www`
   - 记录值：`您的用户名.github.io`

## ⚙️ 配置调整

### 更新 vite.config.ts

在部署之前，您需要更新 `vite.config.ts` 文件中的 `base` 路径：

```typescript
export default defineConfig({
  // ...
  base: '/zhian-oil-gas-safety/', // 替换为您的实际仓库名称
  // ...
})
```

### 更新 README.md

更新 `README.md` 文件中的链接，确保它们指向正确的 GitHub Pages URL。

## 🔄 自动化部署

我们的项目已经配置了 GitHub Actions 工作流：

1. 每当代码推送到 `main` 分支时
2. GitHub Actions 会自动运行构建
3. 将构建结果部署到 GitHub Pages

### 工作流文件位置

```yaml
.github/workflows/deploy.yml
```

### 部署过程

1. 代码推送到 main 分支
2. GitHub Actions 自动开始构建
3. 安装依赖 (`npm install`)
4. 构建项目 (`npm run build`)
5. 部署到 GitHub Pages
6. 部署完成后，您会收到邮件通知

## 🌐 访问您的网站

部署完成后，您的网站将可以通过以下地址访问：

- 如果使用 GitHub 默认域名：
  `https://您的用户名.github.io/仓库名称/`

- 如果使用自定义域名：
  `https://您的域名/`

## 🔧 故障排除

### 网站无法访问

1. **检查构建日志**
   - 在 GitHub 仓库中点击 "Actions" 选项卡
   - 查看最新的 workflow run
   - 查看构建和部署日志

2. **检查文件结构**
   - 确保 `dist` 目录包含构建后的文件
   - 检查 `index.html` 是否在正确位置

3. **等待 DNS 传播**
   - 自定义域名可能需要 24-48 小时才能生效

### 样式或资源加载失败

1. **检查 base 路径**
   - 确保 `vite.config.ts` 中的 `base` 路径与仓库名称匹配

2. **检查相对路径**
   - 确保所有资源使用相对路径

### 404 错误

1. **检查页面路径**
   - 由于使用 HashRouter，可能需要特殊配置
   - 确保所有路由路径正确

## 📞 技术支持

如果在部署过程中遇到问题，请检查：

1. GitHub 仓库设置中的 Pages 配置
2. Actions 标签页中的构建日志
3. 浏览器开发者工具中的控制台错误

## 🎉 完成

恭喜！您的江苏智安油气安全科技有限公司网站现在已经成功部署到 GitHub Pages！

**网站地址**: `https://您的用户名.github.io/仓库名称/`

---

*注意：请确保您的仓库是公开的，并且遵循 GitHub Pages 的使用条款。*