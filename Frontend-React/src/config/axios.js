import axios from 'axios';

const host = window.location.hostname;

const baseURL = `http://${host}/api`;
export const IMAGES_BASE_URL = `http://${host}/uploads/`;

const clienteAxios = axios.create({
    // Esta es la URL de nuestro backend.
    baseURL: baseURL
});

export default clienteAxios;