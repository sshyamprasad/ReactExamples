import React from "react";
import { renderHook, act, render } from "@testing-library/react";
import useCounter from "./useCounter"; // Replace with the correct path to your hook
import useFetch from "./useFetch";
import { countryListQuery } from "./queries";
import CounterOne from "./CounterOne";
describe("useCounter custom hook", () => {
  it("should increment count", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it.only("useFetch", async () => {
    const { result } = await renderHook(async () => useFetch(countryListQuery));
    console.log(result);
    const myMock = jest.fn();
    console.log(myMock());
  });
  it("should decrement count", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });

  it("should initialize count with a custom initial value", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toBe(10);
  });
});
