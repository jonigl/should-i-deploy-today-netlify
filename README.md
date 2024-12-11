# Should I Deploy Today - Netlify

## Vite 

- Running locally `npm run dev`
- Building dist `npm run build`

## UI Framework

- [Magic UI](https://magicui.design/). If you are curious enough check: [Install and configure Vite](https://magicui.design/docs/installation/vite)
  - Also check this [issue answer](https://github.com/shadcn-ui/ui/issues/4677#issuecomment-2323108511) to fix some issues with shadcdn 
- Install [tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) vscode extension 
  - Dark mode fixed following [this](https://github.com/shadcn-ui/ui/issues/515#issuecomment-1834219536) 

## Netlify

- Intall Netlify cli `npm install netlify-cli -g`
- If you want to use Netlify Functions add this dependency `npm install @netlify/functions`
  - To test your app including your netlify function you can run this `netlify dev`
  - Remeber to rename .env.example file to .env and set your envars for local runs

# About the base template

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
