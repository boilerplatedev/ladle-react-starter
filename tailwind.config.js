module.exports = {
  // ladle adds `data-theme=dark` to the body: https://github.com/tajo/ladle/blob/main/packages/ladle/lib/app/src/addons/theme.tsx#L35
  darkMode: ['class', '[data-theme="dark"]'],
  presets: [
    // Custom Tailwind Preset. This will be part of the exported package - which can then be easily imported into child projects
    require('./src/tailwind.preset'),
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
