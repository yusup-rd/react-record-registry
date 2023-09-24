import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function AgeInput({ age, onAgeChange }) {
    const handleAgeChange = (action) => {
        const currentAge = parseInt(age) || 18;
        if (action === "increment") {
            onAgeChange(currentAge + 1);
        } else if (action === "decrement" && age > 18) {
            onAgeChange(currentAge - 1);
        }
    };

    return (
        <div className="mb-3 d-flex align-items-stretch form-floating">
            <input
                type="number"
                className="form-control flex-grow-1"
                id="age"
                name="age"
                value={age}
                placeholder="Age"
                style={{
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                }}
                onChange={(e) => onAgeChange(e.target.value)}
                required
            />
            <label htmlFor="age">Age</label>
            <button
                type="button"
                className="btn ml-2 p-0 custom-color"
                style={{
                    borderRadius: "0",
                    width: "50px",
                }}
                onClick={() => handleAgeChange("decrement")}
            >
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <button
                type="button"
                className="btn ml-2 p-0 custom-color"
                style={{
                    borderBottomLeftRadius: "0",
                    borderTopLeftRadius: "0",
                    width: "50px",
                }}
                onClick={() => handleAgeChange("increment")}
            >
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
        </div>
    );
}

export default AgeInput;
