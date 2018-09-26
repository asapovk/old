export interface GetColor {
    rgb: string;
    hex: string;
    rgba: (alpha: number) => string;
}
export declare const getColors: (red: number, green: number, blue: number) => GetColor;
