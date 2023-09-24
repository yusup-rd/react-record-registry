function SwitchMode({ onToggleMode }) {
    return (
        <div className="form-check form-switch my-3">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={onToggleMode}
            />
            <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
            >
                Mode
            </label>
        </div>
    );
}
export default SwitchMode;
