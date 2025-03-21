import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default tseslint.config([
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}"],
  },

  pluginVue.configs["flat/base"],
  {
    name: "vue/custom",
    // https://eslint.vuejs.org/rules/
    rules: {
      // 关闭标签换行规则，本意是 multiline 值为 always，但和 Vue.Volar 冲突，所以改为 never
      "vue/html-closing-bracket-newline": [
        "warn",
        {
          singleline: "never",
          multiline: "never",
          selfClosingTag: {
            singleline: "never",
            multiline: "never",
          },
        },
      ],
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }],
      "vue/max-attributes-per-line": [
        "warn",
        {
          singleline: 99,
          multiline: 1,
        },
      ],
    },
  },
]);
