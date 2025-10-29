import React from "react";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <main className="contain-content mx-auto h-full bg-gradient-to-br from-purple-500 to-pink-500">
                {children}
            </main>
        </React.Fragment>
    );
}