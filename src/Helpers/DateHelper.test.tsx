import { formatDateYMD } from './DateHelper';

test("formatDateYMD shoud return yyyy-MM-dd if date was passed", () => {
    expect(formatDateYMD(new Date('2021-03-16T19:07:41.837Z'))).toBe("2021-03-16");
    expect(formatDateYMD(new Date('2021-02-16T19:07:41.837Z'))).toBe("2021-02-16");
})

test("formatDateYMD shoud return -- if date is null", () => {
    expect(formatDateYMD(null)).toBe("--");
})