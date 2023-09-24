import React from "react";

function NameInput({ name, onNameChange }) {
    return (
        <div className="mb-3 form-floating">
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => onNameChange(e.target.value)}
                required
            />
            <label htmlFor="name">Name</label>
        </div>
    );
}

export default NameInput;
