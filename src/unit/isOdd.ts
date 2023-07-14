export const isOdd = (value: any) => {
    if (typeof value === 'number') {
        return value % 2 === 0
    }
    throw Error('Это не число')
}