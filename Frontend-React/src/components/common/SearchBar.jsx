export default function SearchBar({
    query,
    onChange,
    onClear,
    placeholder = '¿A qué evento quieres ir?',
}) {
    const handleInput = (e) => onChange(e.target.value);
    return (
        <div className="input-group">
            <input
                type="text"
                value={query}
                onChange={handleInput}
                className="form-control bg-white"
                placeholder={placeholder}
            />
            {query && (
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClear}
                >
                    Limpiar
                </button>
            )}
        </div>
    );
} 