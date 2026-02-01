import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { portfolioService } from "../../services/portfolioService";
import { portfolioData as initialData } from "../../data/content";

export const fetchPortfolioData = createAsyncThunk(
    "portfolio/fetchData",
    async () => {
        const data = await portfolioService.getPortfolioData();
        return data;
    }
);

interface PortfolioState {
    data: typeof initialData | null;
    loading: boolean;
    error: string | null;
}

const initialState: PortfolioState = {
    data: null,
    loading: false,
    error: null,
};

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPortfolioData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPortfolioData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload as typeof initialData;
            })
            .addCase(fetchPortfolioData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch portfolio data";
            });
    },
});

export default portfolioSlice.reducer;
