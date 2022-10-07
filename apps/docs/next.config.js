const withTM = require("next-transpile-modules")(["@woffu/ui", "@woffu/data"]);

module.exports = withTM({
  reactStrictMode: true,
});
