import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex align-items-center justify-content-center min-h-screen">
            {children}
        </section>
    )
}

export default Layout