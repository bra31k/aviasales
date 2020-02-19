import React from "react";

import "./index.css";

interface ISort {
    sort: 'price' | 'duration' | null,
    setSort: Function,
}

const Sort = ({sort, setSort}: ISort) => {
    return (
        <div className="radio-sort">
            <div className="radio-sort-container">
                <input
                    id="cheap"
                    name="sort"
                    type="radio"
                    className="radio-sort__item"
                    value="price"
                    checked={sort === `price`}
                    onChange={(event) => setSort(event.target.value)}
                />
                <label htmlFor="cheap" className="radio-sort__label">
                    Самый дешевый
                </label>
            </div>

            <div className="radio-sort-container">
                <input
                    id="quick"
                    name="sort"
                    type="radio"
                    className="radio-sort__item"
                    value="duration"
                    checked={sort === `duration`}
                    onChange={(event) => setSort(event.target.value)}
                />
                <label htmlFor="quick" className="radio-sort__label">
                    Самый быстрый
                </label>
            </div>
        </div>
    );
};

export default Sort;
