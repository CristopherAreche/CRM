import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";
import axios from "axios";
import { putUser } from "../../services/authServices";

const API_URL_BOSS = `${process.env.REACT_APP_URL}/dashboard_boss`;

const API_URL_ALLS_BOSS = `${process.env.REACT_APP_URL}/boss`;

export const getBoss = createAsyncThunk("boss/getBoss", async (bossId) => {
  const response = await axios.get(`${API_URL_BOSS}?id=${bossId}`);
  return response.data;
});

export const putBoss = createAsyncThunk("boss/putBoss", async (payload) => {
  try {
    const { data } = await axios.put(API_URL_ALLS_BOSS, payload);
    await swal(
      "Modificación",
      `Tus datos han sido actualizados correctamente`,
      "success"
    );

    return data;
  } catch (error) {
    await swal("Error", `${error.response.data.error}`, "error");
    return error.response.data.error;
  }
});

const initialState = {
  bossDashboard: [],
  boss: {},
  status: "idle",
  loading: false,
  error: null,
};

export const bossSlice = createSlice({
  name: "boss",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoss.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBoss.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "success";
        state.bossDashboard = action.payload;
      })
      .addCase(getBoss.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putUser.fulfilled, (state, action) => {
      });
  },
});

export default bossSlice.reducer;
