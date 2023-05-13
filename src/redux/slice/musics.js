import { createSlice } from "@reduxjs/toolkit";

const musics = createSlice({
    name: 'musics',
    initialState: [{
        id: 0,
        name: '',
        artist: '',
        genre: ''
    }],
    reducers: {
        getMusicsSlice: (state, action) => {
            state = action.payload
            return state
        },
        addMusicSlice: (state, action) => {
            state.push(action.payload)
            return state
        },
        editMusicSlice: (state, action) => {
            state = state.map(i => i.id == action.payload.id ? action.payload : i)
            return state
        },
        deleteMusicSlice: (state, action) => {
            state = state.filter(i => i.id !== action.payload)
            return state
        }
    }
})
export const { getMusicsSlice, addMusicSlice, editMusicSlice, deleteMusicSlice } = musics.actions
export default musics.reducer