import AnalyzeService from '../services/analyze'

describe("characterCount", () => {
    it("should return character count for hello hi hei", () => {
        expect(AnalyzeService.characterCount("hello hi hei")).toEqual([{'e':2},{'h':3},{'i':2},{'l':2},{'o':1}])
    });

    it("should return empty array for empty string", () => {
        expect(AnalyzeService.characterCount("")).toEqual([])
    });

});