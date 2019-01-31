const toHex = (value: number) => ("0" + value.toString(16)).slice(-2)

export interface objectColor {
    rgb: string
    hex: string
    rgba: (alpha: number) => string
    grayscale: string
}

export const getColors = (red: number, green: number, blue: number) => {
    let gray = (red * 0.3 + green * 0.59 + blue * 0.11);

    return {
        rgb: `rgb(${red},${green},${blue})`,
        rgba: (alpha: number) => `rgba(${red},${green},${blue},${alpha})`,
        hex: '#' + toHex(red) + toHex(green) + toHex(blue),
        grayscale: `rgb(${gray},${gray},${gray})`
    } as objectColor
}

export class ColorCorrector {
    static darker(hex: string, percent: number) {
        return ColorCorrector.colorCorrection(hex, -percent);
    }
    static lighten(hex: string, percent: number) {
        return ColorCorrector.colorCorrection(hex, percent);
    }

    static colorCorrection(hex: string, percent: number) {
        let pound = (hex[0] === "#");

        if (pound) hex = hex.slice(1);

        const n = parseInt(hex, 16);
        const p = Math.round(2.55 * percent);

        const R = (n >> 16) + p;
        const B = (n >> 8 & 0x00FF) + p;
        const G = (n & 0x0000FF) + p;

        return (pound ? "#" : "") + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
    }
};