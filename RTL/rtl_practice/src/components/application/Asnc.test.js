import {getByText, render, screen } from "@testing-library/react"
import { Application } from "./Application";
describe.skip("Application", ()=> {
    it("renders correctly", ()=> {
        render(<Application />)
    });
})