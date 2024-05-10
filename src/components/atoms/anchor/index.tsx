import { useEffect, useState } from 'react'
import Button from '../button'
import Icon from '../icon'

import classes from './style.module.scss'

import arrowWhite from 'src/assets/img/icons/arrow/arrow_white.svg'

import { scrollTo } from 'src/utils/scroll'
import classNames from 'classnames'

const Anchor = () => {

    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 200) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);


    console.log(isVisible);
    

    return (
        <Button 
            className={classNames(classes.container, isVisible ? classes.is__visible : classes.is__not__visible)} 
            onClick={() => scrollTo(0)} 
            variant='filled_violet' 
            icon={<Icon path={arrowWhite}/>}
        />
    )
}

export default Anchor