import React from "react";

export interface ContainerProps {
    children?: React.ReactNode;
 
    className?: string;

    maxWidth?: string | number;

    padding?: string;

    center?: boolean;

    style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
    children,
    className,
    center = true,
    style,
}) => {
    const computedStyle: React.CSSProperties = {
        boxSizing: "border-box",
        width: "100%",
        margin: center ? "0 auto" : undefined,
        ...style,
    };

    const finalClassName = `sm:px-[108px] px-[32px] ${className || ''}`.trim();

    return (
        <div className={finalClassName} style={computedStyle}>
            {children}
        </div>
    );
};

export default Container;