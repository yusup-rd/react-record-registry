import "../index.css";
import React, { useState, useEffect } from "react";

function CheckEmploy({ isEmployed, onEmploymentChange }) {
    const [isChecked, setIsChecked] = useState(isEmployed);

    useEffect(() => {
        setIsChecked(isEmployed);
    }, [isEmployed]);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onEmploymentChange(newCheckedState);
    };

    return (
        <div className="form-check my-3">
            <input
                className="form-check-input custom-checkbox"
                type="checkbox"
                id="flexCheckDefault"
                onChange={handleCheckboxChange}
                checked={isChecked}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Employed
            </label>
        </div>
    );
}

export default CheckEmploy;
