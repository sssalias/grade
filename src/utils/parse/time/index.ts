export const parseTime = (second:number) => {
    return new Date(second * 1000).toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1");
}