import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./footer.css";
function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* collum1 */}
            <div className="col col1">
              <h4>Kontakty</h4>
              {
                <ul className="list-unstyled">
                  <li>Matěj Stýblo </li>
                  <li>TEL:775 123 080</li>
                  <li>Přým 516 01</li>
                </ul>
              }
            </div>
            {/* collum2 */}
            <div className="col col2">
              <h4>Místo</h4>
              <ul className="list-unstyled">
                <li>sdsadasda</li>
                <li>sdsadadad</li>

                <li>ycxdasdas das y</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p className="col-sm ">
              &copy;{new Date().getFullYear()} Křepelky{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
