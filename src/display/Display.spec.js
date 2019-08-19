// Test away!

import React from "react";

import Display from "./Display";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// import { render, fireEvent } from "@testing-library/react";

describe("<Display />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Display />); // generates a DOM tree

        // snapshots are a JSON representation of the DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it("displays 'Closed' if the closed prop is true", () => {
        const closed = true;
        const { getByTestId } = render(<Display closed={closed} />);
        const div = getByTestId("closedClass");
        expect(div.textContent).toBe("Closed");
    });
    it("displays 'Open' if the closed prop is false", () => {
        const closed = false;
        const { getByTestId } = render(<Display closed={closed} />);
        const div = getByTestId("closedClass");
        expect(div.textContent).toBe("Open");
    });
    it("displays 'Locked' if the locked prop is true", () => {
        const locked = true;
        const { getByTestId } = render(<Display locked={locked} />);
        const div = getByTestId("lockedClass");
        expect(div.textContent).toBe("Locked");
    });
    it("displays 'Unlocked' if the locked prop is false", () => {
        const locked = false;
        const { getByTestId } = render(<Display locked={locked} />);
        const div = getByTestId("lockedClass");
        expect(div.textContent).toBe("Unlocked");
    });
    it("when locked use the red-led class", () => {
        const locked = true;
        const { getByTestId } = render(<Display locked={locked} />);
        const div = getByTestId("lockedClass");
        expect(div).toHaveClass("red-led");
        expect(div).not.toHaveClass("green-led");
    });
    it("when closed use the red-led class", () => {
        const closed = true;
        const { getByTestId } = render(<Display closed={closed} />);
        const div = getByTestId("closedClass");
        expect(div).toHaveClass("red-led");
        expect(div).not.toHaveClass("green-led");
    });
    it("when unlocked use the green-led class", () => {
        const locked = false;
        const { getByTestId } = render(<Display locked={locked} />);
        const div = getByTestId("lockedClass");
        expect(div).toHaveClass("green-led");
        expect(div).not.toHaveClass("red-led");
    });
    it("when open use the red-led class", () => {
        const closed = false;
        const { getByTestId } = render(<Display closed={closed} />);
        const div = getByTestId("closedClass");
        expect(div).toHaveClass("green-led");
        expect(div).not.toHaveClass("red-led");
    });
});