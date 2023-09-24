import React from "react";
import NameInput from "./NameInput";
import AgeInput from "./AgeInput";
import DropdownSelect from "./DropdownSelect";
import CheckEmploy from "./CheckEmploy";
import SwitchMode from "./SwitchMode";

function FormView(props) {
    const {
        formData,
        handleNameChange,
        handleAgeChange,
        handleSubscriptionChange,
        handleEmploymentChange,
        handleInsert,
        toggleMode,
        handleDelete,
        isDarkMode,
    } = props;

    return (
        <div className="col-md-3 ml-5">
                            <form
                                className="border p-4 rounded position-relative"
                                aria-label="Insert Row"
                            >
                                <label className="flaoting-label position-absolute top-0 translate-middle">
                                    Insert Row
                                </label>
                                {/* Name input */}
                                <NameInput
                                    name={formData.name}
                                    onNameChange={handleNameChange}
                                />
                                {/* Age input */}
                                <AgeInput
                                    age={formData.age}
                                    onAgeChange={handleAgeChange}
                                />
                                {/* Subscription dropdown */}
                                <DropdownSelect
                                    selectedOption={formData.subscription}
                                    onSubscriptionChange={
                                        handleSubscriptionChange
                                    }
                                />
                                {/* Checkbox */}
                                <CheckEmploy
                                    isEmployed={
                                        formData.employment === "Employed"
                                    }
                                    onEmploymentChange={handleEmploymentChange}
                                />
                                {/* Insert Button */}
                                <button
                                    type="button"
                                    className="btn custom-color w-100"
                                    onClick={handleInsert}
                                >
                                    Insert
                                </button>
                                <hr />
                                {/* Switch mode */}
                                <SwitchMode onToggleMode={toggleMode} />
                                {/* Delete Button */}
                                <button
                                    type="button"
                                    className="btn custom-color w-100"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
    );
}

export default FormView;
