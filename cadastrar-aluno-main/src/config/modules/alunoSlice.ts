import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { criarAluno } from '../../services/api.service';
import { Aluno } from '../../model/aluno.model';

export const criarAlunoAsync = createAsyncThunk(
  'aluno/criarAluno',
  async (alunoData: { nome: string, email: string, senha: string, tipo: "M" | "T" | "F" }) => {
    try {
      const response = await criarAluno(alunoData);
      return response;
    } catch (error) {
      throw new Error('Algo deu errado ao criar o aluno.');
    }
  }
);

const alunoSlice = createSlice({
  name: 'aluno',
  initialState: {
    aluno: null as Aluno | null,
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(criarAlunoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(criarAlunoAsync.fulfilled, (state, action: PayloadAction<Aluno | null, string, { arg: { nome: string, email: string, senha: string, tipo: "M" | "T" | "F" }, requestId: string, requestStatus: 'fulfilled' }>) => {
        state.status = 'succeeded';
        state.aluno = action.payload;
      })
      .addCase(criarAlunoAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Algo deu errado ao criar o aluno.';
      });
  }
});

export default alunoSlice.reducer;
