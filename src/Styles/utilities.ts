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