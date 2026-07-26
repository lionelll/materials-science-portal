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

三元相图正式地址确认后，只需替换 `src/data/tools.ts` 中的 `TERNARY_URL`。
