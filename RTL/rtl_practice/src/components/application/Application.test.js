import {getByText, render, screen } from "@testing-library/react"
import { Application } from "./Application";
describe("Application", ()=> {
    it("renders correctly", ()=> {
        render(<Application />)
        const h1 = screen.getByRole("heading", {name: "Application Form", level:1});
        const h2 = screen.getByRole("heading", {name: "Please fill your details", level:2});
        const paragraph = screen.getByText("All fields are mandatory");

        expect(h1).toBeInTheDocument();
        expect(h2).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {name: "Name"});
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {name: "Bio"});
        expect(bioElement).toBeInTheDocument();

        const conditionsCheckbox = screen.getByRole("checkbox", {name: "Please accept terms and conditions"})
        expect(conditionsCheckbox).toBeInTheDocument();

        const conditionsCheckbox1 = screen.getByLabelText("Please accept terms and conditions");
        expect(conditionsCheckbox1).toBeInTheDocument();
    });
})