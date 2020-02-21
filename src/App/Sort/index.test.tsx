import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import Sort from "./index";
import {sortType} from "../index";

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
    const setSort = jest.fn();
    const sort: sortType = `duration`;

    act(() => {
        render(
            <Sort
                sort={sort}
                setSort={setSort}
            />,
            container
        );
    });

    const quickRadioButton: Element | null = document.querySelector(`[id=quick]`);
    const cheapRadioButton: Element | null = document.querySelector(`[id=cheap]`);

    if (!quickRadioButton || !cheapRadioButton) {
        return;
    }

    act(() => {
        quickRadioButton.dispatchEvent(new MouseEvent(`click`, {bubbles: true}));
    });

    expect(setSort).toHaveBeenCalledTimes(0);

    act(() => {
        cheapRadioButton.dispatchEvent(new MouseEvent(`click`, {bubbles: true}));
    });

    expect(setSort).toHaveBeenCalledTimes(1);
});
