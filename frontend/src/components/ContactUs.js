import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Material-UI logo component
const MaterialUILogo = (props) => (
  <SvgIcon {...props}>
    <path d="M7.09 0c-1.47 0-2.61.52-3.42 1.57l11.11 15.06L18.53 1.6A5.7 5.7 0 0 0 16.57 0h-9.48zm4.3 2.6c.54 0 1.03.2 1.48.62L2.06 18.52c-.13.19-.2.4-.2.63 0 .56.45 1.02 1.02 1.02.23 0 .44-.07.62-.2L17.78 2.3c.4-.4.62-.9.62-1.48 0-.44-.18-.83-.48-1.13-.3-.3-.7-.48-1.13-.48a1.64 1.64 0 0 0-1.14.48L7.77 13.14 5.77 11l8.26-8.3c.34-.36.74-.54 1.17-.54z" />
  </SvgIcon>
);

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    });
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <MaterialUILogo sx={{ m: 1, bgcolor: 'secondary.main', width: 80, height: 80 }} />
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Your Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="message"
                  label="Your Message"
                  name="message"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Back to Home
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ContactUs;
