import { render, screen, waitFor } from "@testing-library/react";
import Asnc from "./App";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ categories: ["Category 1", "Category 2"] })
  })
);
describe("App", () => {
  test("render categories", async () => {
    render(<Asnc />);
    await waitFor(() => screen.getByText("Category 1"));
    // expect(screen.getByText("Category 1")).toBeInTheDocument();
  });
});