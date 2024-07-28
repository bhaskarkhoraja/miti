const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        // Changes that affect the build system or dependency-only changes
        "build",
        // Changes to CI workflows
        "ci",
        // Documentation-only changes
        "docs",
        // A new feature
        "feat",
        //A bug fix
        "fix",
        // A code change that improves performance
        "perf",
        // A code change that neither fixes a bug nor adds a feature
        "refactor",
        // A commit that reverts a previous commit
        "revert",
        // Changes that do not affect the meaning of the code
        "style",
        // Adding missing tests or correcting existing tests
        "test",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        // Dependency-related changes
        "deps",
        // ESLint-related changes
        "eslint",
        // Prettier-related changes
        "prettier",
        // TypeScript-related changes
        "typescript",
        // Portfolio-related changes
        "portfolio",
        // Web-technologies-related changes in documentation
        "web",
      ],
    ],
    "scope-empty": [2, "never"],
  },
  ignores: [
    // Ignores commits which starts with "chore(what was changed): "
    (commit) => /^chore\([a-zA-Z0-9-]+\):\s(?:\S\s*){5,}/.test(commit),
  ],
}

export default config
