import axios from 'axios';

const host = window.location.hostname;

const baseURL = `http://${host}:8080/api`;
export const IMAGES_BASE_URL = `http://${host}:8080/uploads/`;

const clienteAxios = axios.create({
    // Esta es la URL de nuestro backend.
    baseURL: baseURL
});

export default clienteAxios;