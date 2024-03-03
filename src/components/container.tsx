import React from "react";

interface ContainerProps {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto px-0">
            {children}
        </div>
    );
}