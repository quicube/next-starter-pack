import * as React from "react";
import { render, screen } from "@testing-library/react";

import Home from "~/pages/home";


describe("Home", () => {
    test("renders Home Component", () => {
        render(<Home />);

        screen.debug();
    })
})