export const scrollTo = (value:number) => {
    window.scrollTo({
        top: value,
        behavior: 'smooth'
    })
}