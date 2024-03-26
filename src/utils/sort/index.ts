export const getMaxValue = (array:any[], key:string) => {
    return array.reduce((acc, curr) => acc[key] > curr[key] ? acc : curr)[key]
}