import React, {useContext} from 'react';
import PropTypes from "prop-types";

import Button from "../Button";
import Title from '../Title';




import { ThemeContext } from '../../Context/ThemeContext';
export default function Header(props) {
    const { onToggleTheme } = useContext(ThemeContext);

    
    return (     

        <>
         <Title>{props.title}</Title>
         <Button  onClick={onToggleTheme}>
            Mudar Tema
         </Button>
         {props.children}
        
        </> 
    );
}

Header.prototype = {
    title: PropTypes.string,
    children: PropTypes.node,
};

Header.defaultProps = {
    title: `JSRildo'S Blog`,
};