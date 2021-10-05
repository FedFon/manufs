/**
 * File: Layout.js
 * Author: Fedfon
 * Purpose: This file is the component that structures the page.
 *          The navigation components will always be at the top and the redered components will follow under it.
 */
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
