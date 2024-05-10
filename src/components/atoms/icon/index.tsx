import classes from 'src/components/atoms/icon/style.module.scss'


export type PropsType = {
    path?: string
    alt?: string
    size?: {
        height: number,
        width: number
    }
}

const Icon = ({path, alt, size}:PropsType) => {
    return (
        <div className={classes.wrapper} style={{width: size?.width, height: size?.height}}>
            <img className={classes.img} src={path} onError={ ({currentTarget}) => {
                currentTarget.onerror = null
                if (alt) {
                    currentTarget.src = alt
                }
            } }/>
        </div>
    )
}

export default Icon