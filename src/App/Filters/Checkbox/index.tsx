import React, {ChangeEvent} from "react";

import "./index.css"

interface ICheckbox {
    label?: string;
    name: string;
    value?: string | Array<string>;
    checked?: boolean;
    onChange: Function;
}

const Checkbox = ({label, checked, name, onChange, value}: ICheckbox) => {
    const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => onChange(value, event.target.checked);

    return (
        <div className="filters-content__item">
            <input
                id={`id-${name}`}
                name={name}
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChangeCheckbox}
            />
            <label htmlFor={`id-${name}`}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
