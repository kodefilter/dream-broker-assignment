import AnalyzeService from '../../services/analyze'

describe("wordCount", () => {
    it("should return 3 for hello hi hei", () => {
        expect(AnalyzeService.wordCount("hello hi hei")).toEqual(3)
    });

    it("should return 1 for hello with trailing 2 spaces", () => {
        expect(AnalyzeService.wordCount("hello  ")).toEqual(1)
    });

    it("should return 0 for empty string", () => {
        expect(AnalyzeService.wordCount("")).toEqual(0)
    });
});