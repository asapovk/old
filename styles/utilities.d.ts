export interface objectColor {
    rgb: string;
    hex: string;
    rgba: (alpha: number) => string;
    grayscale: string;
}
export declare const getColors: (red: number, green: number, blue: number) => objectColor;
export declare class ColorCorrector {
    static darker(hex: string, percent: number): string;
    static lighten(hex: string, percent: number): string;
    static colorCorrection(hex: string, percent: number): string;
}
