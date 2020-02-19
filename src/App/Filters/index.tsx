import React from "react";

import Checkbox from "./Checkbox";

import "./index.css"

interface IFilters {
    setFilter: Function;
    filters: Array<number>;
}

const Filters = ({setFilter, filters}: IFilters) => {
    const onChangeFilter = (changedFilers: Array<string>, checked: boolean) => {
        const filtersToInt = changedFilers.map((filter) => +filter);

        if (checked) {
            setFilter([...filters, ...filtersToInt])
        } else {
            setFilter(filters.filter((filter) => !filtersToInt.includes(filter)))
        }
    };

    return (
        <div className="filters">
            <div className="filters-title">
                Количество пересадок
            </div>
            <div className="filters-content">
                <Checkbox
                    name=""
                    label="Все"
                    value={[`0`, `1`, `2`, `3`]}
                    checked={[0, 1, 2, 3].every((value) => filters.includes(value))}
                    onChange={onChangeFilter}
                />
                <Checkbox
                    name="0"
                    label="Без пересадок"
                    value={[`0`]}
                    checked={filters.includes(0)}
                    onChange={onChangeFilter}
                />
                <Checkbox
                    name="1"
                    label="1 пересадка"
                    value={[`1`]}
                    checked={filters.includes(1)}
                    onChange={onChangeFilter}
                />
                <Checkbox
                    name="2"
                    label="2 пересадки"
                    value={[`2`]}
                    checked={filters.includes(2)}
                    onChange={onChangeFilter}
                />
                <Checkbox
                    name="3"
                    label="3 пересадки"
                    value={[`3`]}
                    checked={filters.includes(3)}
                    onChange={onChangeFilter}
                />
            </div>
        </div>
    )
};

export default Filters;
