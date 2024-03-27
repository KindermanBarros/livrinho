import { useContext, useRef } from 'react';
import {
  Button,
  Container,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../firebase';

function App() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    if (!email || !password) {
      console.error('Email and password are required');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Failed to create account: ', error);
    }
  };

  const signIn = async () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    if (!email || !password) {
      console.error('Email and password are required');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Failed to sign in: ', error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Failed to sign out: ', error);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Failed to sign in with Google: ', error);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firebase Authentication
          </Typography>
          {user && (
            <Button color="inherit" onClick={signOut}>
              Sign Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {!user ? (
        <Container maxWidth="sm">
          <Box sx={{ mt: 4 }}>
            <TextField inputRef={emailRef} label="Email" fullWidth />
            <TextField
              inputRef={passwordRef}
              label="Password"
              type="password"
              fullWidth
              sx={{ mt: 2 }}
            />
            <Box sx={{ mt: 2 }}>
              <Button
                onClick={createAccount}
                variant="contained"
                fullWidth
                sx={{ mb: 1 }}
              >
                Sign Up
              </Button>
              <Button
                onClick={signIn}
                variant="outlined"
                fullWidth
                sx={{ mb: 1 }}
              >
                Sign In
              </Button>
              <Button onClick={signInWithGoogle} variant="outlined" fullWidth>
                Sign In with Google
              </Button>
            </Box>
          </Box>
        </Container>
      ) : (
        <Typography variant="h4" component="div" align="center" sx={{ mt: 4 }}>
          Welcome {user ? user.email : ''}
        </Typography>
      )}
    </>
  );
}

export default App;
