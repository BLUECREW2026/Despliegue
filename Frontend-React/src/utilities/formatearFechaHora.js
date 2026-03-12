export const formatearFechaHora = (fechaISO) => {
    if (!fechaISO) return { fecha: '', hora: '' };

    const objetoFecha = new Date(fechaISO);

    const dia = String(objetoFecha.getDate()).padStart(2, '0');
    const mes = String(objetoFecha.getMonth() + 1).padStart(2, '0');
    const anio = objetoFecha.getFullYear();
    const fecha = `${dia}-${mes}-${anio}`;

    const horas = String(objetoFecha.getHours()).padStart(2, '0');
    const minutos = String(objetoFecha.getMinutes()).padStart(2, '0');
    const hora = `${horas}:${minutos}`;

    return { fecha, hora };
};