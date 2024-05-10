import Button from 'src/components/atoms/button'
import Icon from 'src/components/atoms/icon'
import searchWhite from 'src/assets/img/icons/search/search_white.svg'

import classes from './style.module.scss'
import { useState } from 'react'
import classNames from 'classnames'


type PropsType = {
    placeholder?: string
}

const SearchField = ({placeholder}:PropsType) => {

    const [isFocus, setFocus] = useState(false)
    const [isHover, setHover] = useState(false)

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} 
            className={classNames(classes.container, isFocus ? classes.field__focus : null, isHover && !isFocus ? classes.field__hover : null)}>
            <div className={classes.wrapper}>
                <input placeholder={placeholder} type="text" className={classes.field}/>
                <Button className={classes.button} variant='icon' icon={
                    <Icon path={searchWhite}/>
                }></Button>
            </div>
        </div>
    )
}

export default SearchField