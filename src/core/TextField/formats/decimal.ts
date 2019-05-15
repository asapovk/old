export default (value: string, decimalCount: number) => {
    value = value.replace(/[\,]/g, '.')

    if (value == '.') {
        value = '0.'
    }

    if (RegExp(`^$|^0$|^0{1}\\.([0-9]{1,${decimalCount}})?$|^[1-9][0-9]*\.?([0-9]{1,${decimalCount}})?$`, 'g').test(value)) {
        return value
    }

    return null
}