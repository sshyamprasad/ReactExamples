import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import Asnc from "./Asnc"; // Replace with the correct path to your component

// Mock the fetch function to return a sample response
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ categories: ["Category1", "Category2"] }),
  })
);

describe("Asnc component", () => {
  it("fetches and displays categories", async () => {
    let getByText, queryByText;

    render(<Asnc />);

    await waitFor(() => {
      getByText = render.getByText;
      queryByText = render.queryByText;
    });

    // Ensure that loading message is not displayed
    expect(queryByText("Loading...")).toBeNull();

    // Ensure that categories are displayed
    expect(getByText("Categories")).toBeInTheDocument();
    expect(getByText("Category1")).toBeInTheDocument();
    expect(getByText("Category2")).toBeInTheDocument();
  });

  it("handles fetch error", async () => {
    // Mock fetch to return an error
    global.fetch = jest.fn(() => Promise.reject("Fetch error"));

    let getByText, queryByText;

    render(<Asnc />);

    await waitFor(() => {
      getByText = render.getByText;
      queryByText = render.queryByText;
    });

    // Ensure that loading message is not displayed
    expect(queryByText("Loading...")).toBeNull();

    // Ensure that error message is displayed
    expect(getByText("Error: Response not ok!")).toBeInTheDocument();
  });
});
