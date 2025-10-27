import Header from "@/components/header";
import React from "react";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            {/* <Header/> */}
           {children}
        </React.Fragment>
    );
}