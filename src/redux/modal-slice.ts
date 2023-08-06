import { Show } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
  show: Show | null;
  isPlay: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  show: null,
  isPlay: false,
};

export const modalSlide = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = action.payload;
    },
    show: (state, action: PayloadAction<Show | null>) => {
      state.show = action.payload;
    },
    play: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, play, show } = modalSlide.actions;

export default modalSlide.reducer;
