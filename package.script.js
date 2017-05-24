module.exports = {
    "eslint": "eslint --ext .js,.jsx --color -c ./.eslintrc.json --cache --ignore-path ./.eslintignore ./src/main/webapp/js/**",
    "eslint--fix": "eslint --fix --ext .js,.jsx --color -c ./.eslintrc.json --cache --ignore-path ./.eslintignore ./src/main/webapp/js/**",
    "cp-pre-commit": "cp ./pre-commit ./.git/hooks/pre-commit && chmod +x ./.git/hooks/pre-commit",
    "postinstall": "npm run cp-pre-commit -s"
}
