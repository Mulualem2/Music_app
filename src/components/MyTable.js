import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setMusicSlice } from '../redux/slice/music';
import { deleteMusicSlice } from '../redux/slice/musics';
import Button from '@mui/material/Button';
import { DELETE_MUSIC_BY_ID, GET_MUSICS } from '../redux/types';

export default function MyTable() {
    const rows = useSelector(state => state.musics)
    const dispatch = useDispatch()
    React.useEffect(() => dispatch({ type: GET_MUSICS }), [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Music Name</TableCell>
                        <TableCell align="right">Artist</TableCell>
                        <TableCell align="right">Genre</TableCell>
                        <TableCell align="right">Update</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.artist}</TableCell>
                            <TableCell align="right">{row.genre}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch(setMusicSlice(row))} fullWidth variant="contained">Update</Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch({ type: DELETE_MUSIC_BY_ID, id: row.id })} fullWidth variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}