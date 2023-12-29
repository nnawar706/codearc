import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex align-items-center justify-content-center mt-8">
            {children}
        </section>
    )
}

export default Layout