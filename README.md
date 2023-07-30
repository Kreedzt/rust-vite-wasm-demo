# Vite 本地手动导入 Rust 生成的 Wasm

## 启动项目

1. 进入 wasm-web-app 目录
2. 执行: `pnpm i` 安装依赖后执行 `pnpm run dev`
3. 手动将 `rust-wasm` 目录下生成的 pkg 目录复制到 `assets` 中, 之后使用代码见 `App.tsx`