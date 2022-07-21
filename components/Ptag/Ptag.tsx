import React from 'react';
import {IPtagProps} from "./Ptag.props";
import cn from "classnames";
import styles from "./Ptag.module.css";

export const Ptag = ({size = 'm', children, className, ...props}: IPtagProps): JSX.Element => {
    const cnP = cn(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
    });

    return (
        <p className={cnP} {...props}>
            {children}
        </p>
    );
};

export default Ptag;