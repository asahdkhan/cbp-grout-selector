import { GlobalStyles } from '@mui/material';

const Styles = () => {
  return (
    <GlobalStyles
      styles={{
        '.NoUnderline': {
          textDecoration: 'none!important',
        },
        '.DialogHeadingBox': {
          display: 'flex',
          justifyContent: 'space-between',
        },
        'body	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent',
        },
        'body	.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover': {
          borderColor: 'transparent',
        },
        '.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-outlined': {
          fontWeight: '400',
          lineHeight: '15px',
        },
        '.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-outlined.Mui-focused': {
          opacity: '0',
        },
        '.MuiInputBase-input.MuiOutlinedInput-input': {
          padding: '6px 10px',
          height: 'auto',
        },
        '.MuiAutocomplete-root .MuiFormLabel-filled': {
          display: 'none',
        },
        '.MuiAutocomplete-root .MuiOutlinedInput-root': {
          padding: '0px 9px;'
        },
        '.MuiAutocomplete-root .MuiInputLabel-root': {
          marginBottom: '0px',
          transform: 'translate(14px, 22px) scale(1)',
        },
        'body .MuiAutocomplete-inputRoot': {
          lineHeight: '14px',
        },
        '.MuiFormControl-root.MuiTextField-root': {
          width: '100%',
        },
        '.MuiInputBase-root.MuiOutlinedInput-root': {
          width: '100%',
        },
        'body .MuiDialogActions-root': {
          justifyContent: 'center',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingBottom: '24px',
        },
        '.CommonModalButton': {
          minWidth: '130px',
          lineHeight: '25px',
          fontWeight: '400',
        },
        '.FullWidthButton': {
          width: '100%',
        },
        'body .DialogActionsBlock': {
          display: 'block',
        },
        'body a': {
          color: '#E17512',
          cursor: 'pointer',
        },
        'a:hover': {
          color: 'rgba(0, 0, 0, 0.87)',
        },
        '.UnderLineLink': {
          borderBottom: '1px solid #E17512',
        },
        '.UnderLineLink:hover': {
          borderBottom: '1px solid transparent',
        },
        '.SignUpBox': {
          marginLeft: '0px!important',
        },
        'body .MuiPaper-root.MuiDialog-paper': {
          margin: '10px',
        },
        '.CommonFormControl': {
          marginBottom: '20px',
        },
        '.CommonFormControl:last-child': {
          marginBottom: '0px',
        },
        '.MuiButtonBase-root.MuiButton-root.NoHoverBg:hover': {
          backgroundColor: 'transparent',
        },
        '.LightSkyBlue': {
          backgroundColor: '#F1F3F9',
        },
        'body .CommonGrayButton': {
          color: 'rgba(0, 0, 0, 0.87)',
          border: '1px solid #e0e0e0',
          backgroundColor: '#fff',
        },
        'body .CommonGrayButton:hover': {
          color: '#fff',
          border: '1px solid #E17512',
        },
        '@media screen and (min-device-width: 320px) and (max-device-width: 480px)': {
          'body .MuiPaper-root.MuiDialog-paper': {
            width: '90%',
          },
        },
      }}
    />
  );
};

export default Styles;
