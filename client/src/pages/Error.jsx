import { NavLink } from "react-router-dom";
export const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className="content">
                    <h2 className="header">404</h2>
                    <h4>Sorry! Page not found</h4>
                    <p>
                        Oops! It seems like the page you're looking for does not exist.
                        If you believe there is an issue, feel free to report it, and we'll
                        look into it.
                    </p>
                    <div className="btns">
                        <NavLink to="/" className="btn-i">Return Home</NavLink>
                        <NavLink to="/contact" className="btn-i">Report Problem</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}