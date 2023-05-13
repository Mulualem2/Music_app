import Input from "@mui/material/Input"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { setMusicSlice } from "../redux/slice/music"
import { addMusicSlice, editMusicSlice } from "../redux/slice/musics"
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_MUSIC, UPDATE_MUSIC_BY_ID } from "../redux/types"
import Divider from "@mui/material/Divider"
const MyForm = () => {

    const music = useSelector(state => state.music)
    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setMusicSlice({ ...music, [prop]: event.target.value }))
    }
    const handleSubmit = () => {
        music.id === 0 ? dispatch({ type: CREATE_MUSIC, music: { ...music, id: nanoid(8) } }) : dispatch({ type: UPDATE_MUSIC_BY_ID, music })

        dispatch(setMusicSlice({
            id: 0,
            name: '',
            artist: '',
            genre: ''
        }))
    }
    return <>
        <>

            <Input style={{ margin: '10px' }} onChange={handleChange('name')} placeholder="Enter Music Name" value={music.name} fullWidth />
            <Input style={{ margin: '10px' }} onChange={handleChange('artist')} placeholder="Enter Artist" value={music.artist} fullWidth />
            <Input style={{ margin: '10px' }} onChange={handleChange('genre')} placeholder="Enter Genre" value={music.genre} fullWidth />
            <Button style={{ margin: '10px'}} onClick={() => handleSubmit()} fullWidth variant="contained">CREATE</Button>
        </>
    </>
}
export default MyForm