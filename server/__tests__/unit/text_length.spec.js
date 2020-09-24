import AnalyzeService from '../services/analyze'

describe("textLength", () => {
    it("should return withSpaces 12 and withoutSpaces 10 for hello hi hei", () => {
        expect(AnalyzeService.textLength("hello hi hei")).toEqual({ withSpaces : 12, withoutSpaces: 10})
    });

    it("should return withspaces 7 and withoutspaces 5 for hello with two trailing spaces", () => {
        expect(AnalyzeService.textLength("hello  ")).toEqual({ withSpaces : 7, withoutSpaces: 5})
    });

    it("should return withSpaces 0 and withoutSpaces 0 for empty string", () => {
        expect(AnalyzeService.textLength("")).toEqual({ withSpaces : 0, withoutSpaces: 0})
    });


});