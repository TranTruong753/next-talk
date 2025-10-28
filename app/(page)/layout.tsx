import React from "react";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
           {children}
        </React.Fragment>
    );
}