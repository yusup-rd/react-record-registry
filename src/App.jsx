import React, { useState, useEffect } from "react";
import "./index.css";
import FormView from "./components/FormView";
import ResultView from "./components/ResultView";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        subscription: "Subscribed",
        employment: "Not Employed",
    });

    const handleSubscriptionChange = (newSubscription) => {
        setFormData({
            ...formData,
            subscription: newSubscription,
        });
    };
    const handleEmploymentChange = (isChecked) => {
        const newEmploymentStatus = isChecked ? "Employed" : "Not Employed";
        setFormData({
            ...formData,
            employment: newEmploymentStatus,
        });
    };

    const [results, setResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [isEmployed, setIsEmployed] = useState(false);

    const handleInsert = () => {
        const { name, age, subscription } = formData;

        if (!name || !age || !subscription) {
            alert("Please enter all input fields.");
            return;
        }

        const newResult = { ...formData };
        setResults([...results, newResult]);
        setFormData({
            name: "",
            age: "",
            subscription: "Subscribed",
            employment: "Not Employed",
        });

        setIsEmployed(false);
    };

    const handleDelete = () => {
        if (selectedResult !== null) {
            const updatedResults = results.filter(
                (result, index) => index !== selectedResult
            );
            setResults(updatedResults);
            setSelectedResult(null);
        }
    };

    useEffect(() => {
        localStorage.setItem("results", JSON.stringify(results));
    }, [results]);

    useEffect(() => {
        const storedResults = localStorage.getItem("results");
        if (storedResults) {
            setResults(JSON.parse(storedResults));
        }
    }, []);

    const handleNameChange = (newName) => {
        setFormData({
            ...formData,
            name: newName,
        });
    };

    const handleAgeChange = (newAge) => {
        setFormData({
            ...formData,
            age: newAge,
        });
    };

    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        const root = document.documentElement;
        if (newMode) {
            root.style.setProperty("--background-color", "#454545");
            root.style.setProperty("--text-color", "white");
            root.style.setProperty(
                "--button-background",
                "var(--background-color-dark)"
            );
        } else {
            root.style.setProperty("--background-color", "#ffffff");
            root.style.setProperty("--text-color", "#213547");
            root.style.setProperty("--button-background", "#f9f9f9");
        }

        localStorage.setItem("darkMode", newMode ? "dark" : "light");
    };

    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode === "dark") {
            toggleMode();
        }
    }, []);

    return (
        <div
            className={`app-wrapper ${isDarkMode ? "dark-mode" : "light-mode"}`}
        >
            <div className="container mt-5">
                <div className="row">
                    <div className="d-flex">
                        <FormView
                            formData={formData}
                            handleNameChange={handleNameChange}
                            handleAgeChange={handleAgeChange}
                            handleSubscriptionChange={handleSubscriptionChange}
                            handleEmploymentChange={handleEmploymentChange}
                            handleInsert={handleInsert}
                            toggleMode={toggleMode}
                            handleDelete={handleDelete}
                            isDarkMode={isDarkMode}
                        />
                         <ResultView
                            results={results}
                            selectedResult={selectedResult}
                            setSelectedResult={setSelectedResult}
                            isDarkMode={isDarkMode}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
