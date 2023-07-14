import { isOdd } from "../isOdd";

describe("Функциональность isOdd", () => {
  it("работает успешно при ожидаемом параметре", () => {
    expect(isOdd(1)).toBe(false);
  });
  it("работает успешно при неожидаемом типе параметра", () => {
    expect(() => isOdd("")).toThrowErrorMatchingSnapshot();
  });
});
