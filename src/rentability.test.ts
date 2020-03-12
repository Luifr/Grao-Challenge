import { getRentability } from "./rentability";

test('GetRentability with default parameters', () => {
  expect(getRentability({})).toBe(104.25);
});

test('GetRentability with custom parameters', () => {
  expect(getRentability({ totalWeeks: 72 })).toBe(108.68);
  expect(getRentability({ initialValue: 250 })).toBe(260.63);
  expect(getRentability({ selic: 0.65 })).toBe(165);
  expect(getRentability({ initialValue: 400, selic: 0.02, totalWeeks: 40 })).toBe(408.9);
});