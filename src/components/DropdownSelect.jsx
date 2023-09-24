import Select from "react-select";
import "../index.css";

const DropdownSelect = ({ selectedOption, onSubscriptionChange }) => {
    const options = [
        { value: "Subscribed", label: "Subscribed" },
        { value: "Not Subscribed", label: "Not Subscribed" },
        { value: "Other", label: "Other" },
    ];

    const colorStyles = {
        control: (styles, { isFocused, isSelected }) => ({
            ...styles,
            boxShadow: isSelected
                ? "0 0 0 0.1rem green"
                : isFocused
                ? "0 0 0 0.1rem green"
                : "none",
            height: "58px",
            display: "flex",
        }),
        valueContainer: (styles) => ({
            ...styles,
            height: "inherit",
            borderRadius: "5px 0 0 5px",
            overflowY: "auto",
        }),

        option: (styles, { isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isSelected
                    ? "#252525"
                    : isFocused
                    ? "green"
                    : "gray",
                color: isSelected ? "white" : isFocused ? "white" : null,
            };
        },
        indicatorSeparator: (styles) => ({
            ...styles,
            display: "none",
        }),
        dropdownIndicator: (styles, { isFocused, isSelected }) => ({
            ...styles,
            color: isFocused || isSelected ? "white" : "white",
            backgroundColor: isFocused || isSelected ? "#252525" : "grey",
            borderTopRightRadius: "3px",
            borderBottomRightRadius: "3px",
            height: "100%",
            alignItems: "center",
        }),
    };

    return (
        <Select
            options={options}
            value={options.find((option) => option.value === selectedOption)}
            onChange={(selectedOption) => {
                onSubscriptionChange(selectedOption.value);
            }}
            styles={colorStyles}
            classNamePrefix="custom-select"
        />
    );
};

export default DropdownSelect;
