module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {

    textColor: theme => ({
      ...theme("colors"),
      primary: "#F0C987",
      secondary: "#FC440F"
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
