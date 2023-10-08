import App from "./App";
import { render, waitFor, act, renderHook } from "@testing-library/react";
import useFetch from "./useFetch";
import { countryListQuery } from "./queries";

describe("App", () => {
  it("snap shot for app", async () => {
    const { data, loading, error } = await renderHook(useFetch, {
      query: countryListQuery,
    });
    console.log(data);
    expect(data).not.toBeNull();
  });
});
