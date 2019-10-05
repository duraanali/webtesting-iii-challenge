// Test away!

import React from "react";

import Controls from "./Controls";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

// import { render, fireEvent } from "@testing-library/react";

describe("<Controls />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Controls />); // generates a DOM tree

        // snapshots are a JSON representation of the DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
    });
});