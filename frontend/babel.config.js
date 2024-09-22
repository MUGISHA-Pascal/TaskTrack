module.exports = {
  presets: [
    "@babel/preset-env", // Transpiles modern JavaScript to a format that browsers understand
    "@babel/preset-react", // Transpiles JSX to JavaScript
    "@babel/preset-typescript", // Adds TypeScript support
  ],
  plugins: [
    // Add any Babel plugins you need here
    "@babel/plugin-transform-runtime", // Optional: helps with code reuse and reduces duplication
  ],
};
