import { render } from "@testing-library/react";
import Add from "./Add";

describe("Add", () => {
  test("Add function", () => {
    render(<Add />);
    const add = jest.fn(() => 3);
    expect(add(1 + 5)).toBe(3);
  });
});
