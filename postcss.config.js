module.exports = {
  plugins: [
    require("autoprefixer")({}),
    require("css-mqpacker")({ sort: true }),
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedProperties: true
    }),
    require("cssnano")({})
  ]
};
