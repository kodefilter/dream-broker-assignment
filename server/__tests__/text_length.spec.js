import AnalyzeService from '../services/analyze'

describe("textLength", () => {
    it("should return withSpaces 12 and withoutSpaces 10 for hello hi hei", () => {
        expect(AnalyzeService.textLength("hello hi hei")).toEqual({ withSpaces : 12, withoutSpaces: 10})
    });


});