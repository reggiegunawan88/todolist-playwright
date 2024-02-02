module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter, sans-serif'],
      },
    },
    screens: {
      // => @media (min-width: 360px) { ... }
      mobileS: '360px',
      // => @media (min-width: 480px) { ... }
      mobileM: '480px',
      // => @media (min-width: 640px) { ... }
      mobileL: '640px',
      // => @media (min-width: 768px) { ... }
      tablet: '768px',
      // => @media (min-width: 960px) { ... }
      laptop: '960px',
      // => @media (min-width: 1024px) { ... }
      laptopM: '1024px',
      // => @media (min-width: 1280px) { ... }
      laptopL: '1280px',
      // => @media (min-width: 1440px) { ... }
      desktopL: '1440px',
      // => @media (min-width: 1920px) { ... }
      desktopFullHD: '1920px',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      6.5: '1.68rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      13.8: '3.8rem',
      16: '4rem',
      18: '4.375rem',
      20: '5rem',
      24: '6rem',
      24.4: '6.4rem',
      31: '7rem',
      31.5: '7.5rem',
      31.8: '7.85rem',
      32: '8rem',
      33: '8.7rem',
      36: '9rem',
      37: '9.375rem',
      40: '10rem',
      41: '10.625rem',
      44: '11rem',
      45: '11.26rem',
      46: '11.9rem',
      48: '12rem',
      50: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      68: '17rem',
      72: '18rem',
      76: '19rem',
      80: '20rem',
      81: '21rem',
      83: '22rem',
      84: '22.5rem',
      85: '23rem',
      96: '24rem',
      97: '26.5rem',
      105: '29.75rem',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      serif: ['Lora', 'serif'],
      system: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      sans: ['PT Sans', 'Arial', 'Verdana', 'Helvetica', 'sans-serif'],
      chronicle: ['Chronicle Display', 'serif'],
      'sans-default': ['PT Sans'],
    },
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
      '8xl': '6rem', // 96px
      '9xl': '8rem', // 144px
    },
    maxWidth: {
      xs: '20rem', // 320px
      sm: '30rem', // 480px
      md: '44.5rem', // 712px
      lg: '50rem', // 800px
      xl: '60rem', // 960px
      '2xl': '70rem', // 1120px
      '3xl': '80rem', // 1280px
      '4xl': '90rem', // 1440px
      '5xl': '100rem', // 1600px
      full: '100%',
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      90: '0.9',
      100: '1',
    },
  },
  plugins: [],
};
