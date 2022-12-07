import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F15A2A',
      contrastText: '#fff',
    },
    secondary: {
      main: '#a29c99',
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: 40,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.87)',
      wordBreak: 'break-word',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 34,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 26,
      },
    },
    h2: {
      fontSize: 32,
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.87)',
      wordBreak: 'break-word',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 30,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 23,
      },
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.87)',
      wordBreak: 'break-word',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 23,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 21,
      },
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.87)',
      wordBreak: 'break-word',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 19,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 17,
      },
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.87)',
      wordBreak: 'break-word',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 17,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 16,
      },
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      color: 'rgba(0, 0, 0, 0.87)',
      wordBreak: 'break-word',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 15,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 14,
      },
    },
    body1: {
      fontSize: 20,
      fontWeight: 400,
      color: '#353755',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 18,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 14,
      },
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      color: '#353755',
      '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
        fontSize: 15,
      },
      '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
        fontSize: 13,
      },
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: 8,
          '&.Mui-focused': {
            border: '1px solid rgba(0, 0, 0, 0.12)',
          },
        },
        inputMultiline: {
          borderRadius: 8,
          padding: 10,
        },
        multiline: {
          padding: 0,
        },
        notchedOutline: {
          borderColor: 'transparent',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontSize: 16,
          color: 'rgba(0, 0, 0, 0.87)',
          marginBottom: '8px',
          fontWeight: '600',
          '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
            fontSize: 14,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: 'capitalize',
          fontSize: 18,
          fontWeight: '600',
          borderRadius: '4',
          '@media screen and (min-device-width: 768px) and (max-device-width: 1024px)': {
            fontSize: 16,
          },
          '@media screen and (min-device-width: 320px) and (max-device-width: 767px)': {
            fontSize: 14,
          },
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: '#E17512',
              boxShadow: 'none',
              color: '#fff',
              border: '1px solid #E17512',
              textTransform: 'capitalize',
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              backgroundColor: '#fff',
              boxShadow: 'none',
              color: '#E17512',
              border: '1px solid #E17512',
              textTransform: 'capitalize',
            }),
          '&:hover': {
            backgroundColor: '#D26F13',
            boxShadow: 'none',
            border: '1px solid #D26F13',
            color: '#ffffff',
          },
          '&.Mui-disabled': {
            backgroundColor: '#F6F7F8',
            color: 'rgba(0, 0, 0, 0.38)',
            border: '1px solid #F6F7F8',
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
