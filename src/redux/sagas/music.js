import { getMusicsAPI, getMusicByIdAPI, createMusicAPI, updateMusicAPI, deleteMusicByIdAPI } from '../../apis/index'
import { setMusicSlice } from '../slice/music'
import { addMusicSlice, deleteMusicSlice, editMusicSlice, getMusicsSlice } from '../slice/musics'
import { CREATE_MUSIC, DELETE_MUSIC_BY_ID, GET_MUSICS, GET_MUSIC_BY_ID, UPDATE_MUSIC_BY_ID } from '../types'
import { put, takeEvery } from 'redux-saga/effects'
export function* getMusicsSaga() {
    const musics = yield getMusicsAPI()
    yield put(getMusicsSlice(musics.data))
}

export function* getMusicByIdSaga(action) {
    yield getMusicByIdAPI(action.id)
    yield put(setMusicSlice(action.id))
}
export function* createMusicSaga(action) {
    yield createMusicAPI(action.music)
    yield put(addMusicSlice(action.music))
}

export function* updateMusicSaga(action) {
    yield updateMusicAPI(action.music)
    yield put(editMusicSlice(action.music))
}

export function* deleteMusicByIdSaga(action) {
    yield deleteMusicByIdAPI(action.id)
    yield put(deleteMusicSlice(action.id))
}

export function* watchMusicsAsync() {
    yield takeEvery(GET_MUSICS, getMusicsSaga)
    yield takeEvery(GET_MUSIC_BY_ID, getMusicByIdSaga)
    yield takeEvery(CREATE_MUSIC, createMusicSaga)
    yield takeEvery(UPDATE_MUSIC_BY_ID, updateMusicSaga)
    yield takeEvery(DELETE_MUSIC_BY_ID, deleteMusicByIdSaga)
}