import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { Category } from '@/constants/Constants';
import { RootState } from '@/redux/store';

// Define a type for the slice state
// Latest note always at the end of the array
export interface NotesState {
    [Category.Work]: string[],
    [Category.Life]: string[],
    [Category.Health]: string[],
}
  
// Define the initial state using that type
// For debugging Go to delete all notes to restore initial state if hydration fills with empty state
const initialState: NotesState = {
    [Category.Work]: [],
    [Category.Life]: [],
    [Category.Health]: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  // Redux toolkit detects "mutation" here, though not reassignment
  reducers: {
    addNote: (state, action: PayloadAction<{category: typeof Category[keyof typeof Category] , note: string}>) => {
        state[action.payload.category].push(action.payload.note)
    },
    deleteAll: (state) => {
        return initialState
    },
  },
});

export const { addNote, deleteAll } = notesSlice.actions;

export const selectWorkNotes = (state: RootState) => state.notes[Category.Work];
export const selectLifeNotes = (state: RootState) => state.notes[Category.Life];
export const selectHealthNotes = (state: RootState) => state.notes[Category.Health];
// Memoized Selector
export const selectAllNotes = createSelector([selectWorkNotes, selectLifeNotes, selectHealthNotes], (a, b, c) => {
    return {
        [Category.Work]: a,
        [Category.Life]: b,
        [Category.Health]: c,
    }
})

export default notesSlice.reducer;