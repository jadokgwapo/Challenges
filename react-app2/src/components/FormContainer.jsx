import  Button from '@mui/material/Button'
import  Box from '@mui/material/Box'
import  Card from '@mui/material/Card'
import  CardContent from '@mui/material/CardContent'
import  Typography from '@mui/material/Typography'
import  CardActionArea from '@mui/material/CardActionArea'
import  TextField from '@mui/material/TextField'  

function Login() {
    return (
        <Card sx={{ maxWidth: 400, marginLeft: 40, marginTop: 5 }}>
        <CardActionArea>
        <CardContent>
        <Typography variant="h5" gutterBottom>
        Login
        </Typography>
    <Box component="form">
    <TextField
    fullWidth
    label="Username"
    name="username"
    margin="normal"
    />
    <TextField
    fullWidth
    type="password"
    label="Password"
    name="password"
    margin="normal"
    />
    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
    Login
    </Button>
    </Box>
    </CardContent>
    </CardActionArea>
    </Card>
    );
    }

function Register () {
    return (
      <Card sx={{ maxWidth: 400, marginLeft: 100, marginTop: -36 , marginRight: 50}}>
        <CardActionArea>
        <CardContent>
        <Typography variant="h5" gutterBottom>
        Register
        </Typography>
    <Box component="form">
    <TextField
    fullWidth
    label="Username"
    name="username"
    margin="normal"
    />
    <TextField
    fullWidth
    type="password"
    label="Password"
    name="password"
    margin="normal"
    />

    <TextField
    fullWidth
    label="First Name"
    name="firstname"
    margin="normal"
    />

    <TextField
    fullWidth
    label="Last Name"
    name="lastname"
    margin="normal"
    />
    
    <Button variant="contained" color="secondary" type="submit" sx={{ mt: 2 }}>
    Register
    </Button>
    </Box>
    </CardContent>
    </CardActionArea>
    </Card>
    );
}

export default function FormContainer() {
  return (
    <div>

      <Login />
      <Register />
    </div>
  );
}