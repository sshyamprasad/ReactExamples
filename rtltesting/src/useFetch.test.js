import { render, waitFor, act, renderHook } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useFetch from "./useFetch"; // Replace with the correct path to your hook
import { countryListQuery } from "./queries";

// Define a mock server for handling GraphQL requests
const server = setupServer(
  rest.post("https://countries.trevorblades.com/graphql", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ data: { sampleData: "Mocked response" } })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useFetch custom hook", () => {
  it("fetches data successfully", async () => {
    // const query = "sample GraphQL query";
    let hookResult;

    renderHook(() => {
      hookResult = useFetch(countryListQuery);
    });

    await act(async () => {
      await hookResult.waitForNextUpdate();
    });

    expect(hookResult.result.current.loading).toBe(false);
    expect(hookResult.result.current.error).toBe(null);
    expect(hookResult.result.current.data).toEqual({
      sampleData: "Mocked response",
    });
  });

  it.skip("handles API errors", async () => {
    const query = "invalid GraphQL query";
    server.use(
      rest.post(
        "https://countries.trevorblades.com/graphql",
        (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "Server Error" }));
        }
      )
    );

    let hookResult;

    renderHook(() => {
      hookResult = useFetch(query);
    });

    await act(async () => {
      await hookResult.waitForNextUpdate();
    });

    expect(hookResult.result.current.loading).toBe(false);
    expect(hookResult.result.current.error).not.toBe(null);
    expect(hookResult.result.current.data).toBe(null);
  });
  it.skip("test 2+2 is 4", () => {
    expect(2 + 2).toBe(4);
  });
});
