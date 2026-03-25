import { renderHook, waitFor } from "@testing-library/react";
import usePatients from "./usePatients";

globalThis.fetch = jest.fn();

describe("usePatients", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch patients successfully", async () => {
    const mockData = {
      users: [{ id: 1, firstName: "John", lastName: "Doe" }],
    };

    (globalThis.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => usePatients());

    await waitFor(() => {
      expect(result.current.patients).toEqual(mockData.users);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should handle fetch error", async () => {
    (globalThis.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("API failed"),
    );

    const { result } = renderHook(() => usePatients());

    await waitFor(() => {
      expect(result.current.error).toBe("Failed to fetch patients");
    });

    expect(result.current.loading).toBe(false);
  });
});
