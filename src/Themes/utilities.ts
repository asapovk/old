const toHex = (value: number) => ("0" + value.toString(16)).slice(-2)

export const getColors = (red: number, green: number, blue: number) => {
    return {
        rgb: `rgb(${red},${green},${blue})`,
        rgba: (alpha: number) => `rgba(${red},${green},${blue},${alpha})`,
        hex: '#' + toHex(red) + toHex(green) + toHex(blue)
    }
}