import React from "react";

function ResultView(props) {
    const { results, selectedResult, setSelectedResult, isDarkMode } = props;

    return (
        <div className="col-md-9 mx-3">
                            <div className="border p-4 rounded">
                                <div className="result-label">
                                    <div className="table-responsive">
                                        <table
                                            className={`table border ${
                                                isDarkMode ? "text-light" : ""
                                            }`}
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="border px-5">
                                                        Name
                                                    </th>
                                                    <th className="border px-5">
                                                        Age
                                                    </th>
                                                    <th className="border px-5">
                                                        Subscription
                                                    </th>
                                                    <th className="border px-5">
                                                        Employment
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {results.map(
                                                    (result, index) => (
                                                        <tr
                                                            key={index}
                                                            onClick={() =>
                                                                setSelectedResult(
                                                                    index
                                                                )
                                                            }
                                                            className={
                                                                index ===
                                                                selectedResult
                                                                    ? "selected"
                                                                    : ""
                                                            }
                                                        >
                                                            <td>
                                                                {result.name}
                                                            </td>
                                                            <td>
                                                                {result.age}
                                                            </td>
                                                            <td>
                                                                {
                                                                    result.subscription
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    result.employment
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}

export default ResultView;
