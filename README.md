# 江苏智安油气安全科技有限公司网站

这是江苏智安油气安全科技有限公司的官方企业展示网站。

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📦 GitHub Pages 部署

### 自动部署 (推荐)

本项目配置了 GitHub Actions，可以自动部署到 GitHub Pages：

1. **Fork 或 Clone 本项目到你的 GitHub 账户**
2. **推送代码到 main 分支**
3. **在 GitHub 仓库设置中启用 Pages**
   - 进入 `Settings` > `Pages`
   - Source 选择 `GitHub Actions`
4. **等待部署完成**
   - 访问 `https://你的用户名.github.io/仓库名称/`

### 手动部署

如果需要手动部署：

```bash
# 构建项目
npm run build

# 安装 gh-pages (如果没有安装)
npm install -g gh-pages

# 部署到 GitHub Pages
npm run deploy
```

### 部署后配置

部署成功后，你可能需要：

1. **更新 vite.config.ts 中的 base 路径**
   ```typescript
   base: '/你的仓库名称/', // 更改为你的实际仓库名称
   ```

2. **确保仓库是公开的** (GitHub Pages 免费版只支持公开仓库)

3. **等待几分钟让部署生效**

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **类型检查**: TypeScript
- **样式**: Tailwind CSS
- **路由**: React Router
- **图标**: Lucide React

## 📱 功能特性

- ✅ 响应式设计
- ✅ 现代化UI界面
- ✅ 企业信息展示
- ✅ 产品技术介绍
- ✅ 联系方式管理
- ✅ SEO优化

## 📞 联系方式

- **电话**: 18642746271
- **邮箱**: 591291210@qq.com
- **地址**: 江苏省连云港市海州区苍梧路59号 (江苏海洋大学科技园)

## 📄 许可证

本项目为企业内部使用，版权归江苏智安油气安全科技有限公司所有。