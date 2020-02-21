import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import Checkbox from "./index";

let container: Element;

beforeEach(() => {
    container = document.createElement(`div`);
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

it("sort changes value when clicked", () => {
    const onChange = jest.fn();

    act(() => {
        render(
            <Checkbox
                label="Checkbox"
                name="checkbox"
                value="value"
                onChange={onChange}
            />,
            container
        );
    });

    const checkbox: HTMLInputElement | null = document.querySelector(`[id=id-checkbox]`);

    if (!checkbox) {
        return;
    }

    expect(checkbox.value).toBe(`value`);
    expect(checkbox.name).toBe(`checkbox`);
    expect(checkbox.checked).toBe(false);

    act(() => {
        checkbox.dispatchEvent(new MouseEvent(`click`, {bubbles: true}));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toBe(true);
});
