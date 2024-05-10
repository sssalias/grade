import numeral from 'numeral'

export const parseNumber = (num: number) => {
    return numeral(num).format('0.0a')
}