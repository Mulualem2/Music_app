import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export const getMusicsAPI = async () => axios.get('/musics')

export const getMusicByIdAPI = async (id) => axios.get(`/musics/${id}`)

export const createMusicAPI = async (music) => axios.post(`/musics`, music)

export const updateMusicAPI = async (music) => axios.put(`/musics/${music.id}`, music)

export const deleteMusicByIdAPI = async (id) => axios.delete(`/musics/${id}`)