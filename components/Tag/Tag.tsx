import React from "react";
import { ITagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "s",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: ITagProps): JSX.Element => {
  const cnDiv = cn(styles.tag, className, {
    [styles.s]: size === "s",
    [styles.m]: size === "m",
    [styles.ghost]: color === "ghost",
    [styles.red]: color === "red",
    [styles.grey]: color === "gray",
    [styles.green]: color === "green",
    [styles.primary]: color === "primary",
  });

  return (
    <div className={cnDiv} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
