# 材料科学可视化工具集门户

畅研材料科学可视化工具集的独立入口页。页面集中展示已上线与筹备中的材料科学教学工具，仅负责导航，不包含各工具的业务逻辑。

## 开发与构建

```bash
npm install
npm run dev
npm run build
npm run preview
```

构建产物位于 `dist/`，可直接静态部署。

## 新增工具

1. 在 `src/data/tools.ts` 的 `tools` 数组中追加配置。
2. 如需新的缩略图类型，在 `ThumbKind` 中增加类型，并在 `src/components/ToolThumb.tsx` 中增加对应的内联 SVG 分支。

三元相图测试地址为 `http://123.57.11.145:8080/ternary/`，入口配置位于 `src/data/tools.ts` 中的 `TERNARY_URL`。

二元相图测试地址为 `http://123.57.11.145:8080/binary/`，入口配置位于 `src/data/tools.ts` 中的 `BINARY_URL`。

## 测试环境部署

`dev` 分支通过 GitHub Actions 自动部署到 `http://123.57.11.145:8080/`，服务器目录为 `/var/www/materials-portal-dev`。晶体结构、三元相图和二元相图测试站分别位于同一服务的 `/crystal/`、`/ternary/` 与 `/binary/` 子路径。
