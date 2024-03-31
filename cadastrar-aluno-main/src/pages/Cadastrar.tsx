import { useDispatch } from 'react-redux';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useState } from 'react';

const validarEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validarSenha = (senha: string) => {
   return senha.length >= 5;
};

export default function Cadastrar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [student, setStudent] = useState('');

  const handleChange = (event: any) => {
      setStudent(event.target.value);
  };


  const cadastrarUsuario = (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const senha = e.target.password.value;
    const confirmarSenha = e.target.confirmPassword.value;

    if (!email || !senha || !confirmarSenha) {
      return alert('Preencha todos os campos');
    } else if (senha !== confirmarSenha) {
      return alert('Senhas diferentes');
    } else if (!validarEmail(email)) {
      return alert('E-mail inválido');
    } else if (!validarSenha(senha)) {
      return alert('Senha inválida');
    } else {
      dispatch({ type: 'criar-usuario', payload: { email, senha } });
      navigate('/bem-vindo');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <VpnKeyIcon sx={{ fontSize: '40px', marginBottom: '10px' }} />
      <br />
      <Typography variant="h4" gutterBottom>
        Cadastre-se
      </Typography>
      <form onSubmit={cadastrarUsuario} style={{ width: '300px' }}>
      <TextField
          fullWidth
          label="Nome"
          name="nome"
          type="nome"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Endereço de Email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Senha"
          name="password"
          type="password"
          variant="outlined"
          margin="normal"
          required
        />
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Aluno</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={student}
                        onChange={handleChange}
                        label="Aluno"
                    >
                        <MenuItem value="M">M</MenuItem>
                        <MenuItem value="F">F</MenuItem>
                        <MenuItem value="T">T</MenuItem>
                    </Select>
                </FormControl>

                <br />
                <br />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Cadastre-se
        </Button>
      </form>
      <Typography variant="body2" gutterBottom style={{ marginTop: '16px' }}>
        Já tem uma conta? <Link to="/">Faça login</Link>
      </Typography>
    </Box>
  );
}