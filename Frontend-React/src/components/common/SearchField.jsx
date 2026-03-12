import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

export default function SearchField({ onLocationFound }) {
    const map = useMap();

    useEffect(() => {
        const provider = new OpenStreetMapProvider();
        const searchControl = new GeoSearchControl({
            provider: provider,
            style: 'bar',
            showMarker: false,
            autoClose: true,
            keepResult: true,
            searchLabel: 'Busca una dirección...',
        });

        map.addControl(searchControl);

        map.on('geosearch/showlocation', (result) => {
            onLocationFound(result.location.label, result.location.y, result.location.x);
        });

        return () => map.removeControl(searchControl);
    }, [map, onLocationFound]);

    return null;
}