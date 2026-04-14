module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-6px) translateX(3px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.7, filter: 'blur(0px)' },
          '50%': { opacity: 1, filter: 'blur(2px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
};