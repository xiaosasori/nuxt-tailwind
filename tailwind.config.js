/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '72': '18rem',
        '80': '20rem'
      },
      padding: {
        '5/6': '83.3333333%'
      },
      colors: {
        lime: colors.lime,
        gray: colors.trueGray
      }
    },
    customForms: theme => ({
      // horizontalPadding: defaultTheme.spacing[3],
      // verticalPadding: defaultTheme.spacing[2],
      lineHeight: theme('lineHeight.snug'),
      // fontSize: defaultTheme.fontSize.base,
      borderColor: 'transparent',
      // borderWidth: defaultTheme.borderWidth.default,
      borderRadius: theme('borderRadius.lg'),
      backgroundColor: theme('colors.gray.700'),
      focusBorderColor: 'transparent',
      focusShadow: 'none',
      // boxShadow: defaultTheme.boxShadow.none,
      checkboxSize: '1.5em',
      radioSize: '1.5em',
      // checkboxIcon: `<svg viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>`,
      // radioIcon: `<svg viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
      checkedColor: theme('colors.indigo.500'),
      selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
      // selectIconOffset: defaultTheme.spacing[2],
      // selectIconSize: '1.5em',
    })
  },
  variants: {
    outline: ['responsive', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
