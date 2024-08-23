module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    // Desativa a regra para variáveis não usadas
    'no-unused-vars': 'off',
    // Desativa a regra para o uso de console
    'no-console': 'off',
    // Desativa a regra de indentação
    'indent': 'off',
    // Outras regras que você deseja desativar
  },
};
