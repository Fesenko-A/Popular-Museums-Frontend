import React from "react";

function Contacts() {
  return (
    <div style={{ margin: "1rem" }} className="fading-in">
      <div className="text-center">
        <h6>
          У разі виникнення питань, пропозицій щодо покращення та співпраці:
        </h6>
        <p>
          Електронна пошта:&nbsp;
          <a href="mailto:tohafesenkolovep@gmail.com">
            tohafesenkolovep@gmail.com
          </a>
        </p>
      </div>
      <div style={{ width: "80%" }} className="mx-auto">
        <iframe
          width="100%"
          height="500px"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%BF%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0+(%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%9F%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}

export default Contacts;
