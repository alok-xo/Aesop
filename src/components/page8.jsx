import React from "react";
import "../styles/page8.css";

const page8 = () => {
  return (
    <div>
      <div className="life">
        <h1>‘Life never becomes a habit to me. It's always a marvel.’</h1>
        <p className="mt-5">Katherine Mansfield</p>
      </div>
      <div className="footer">
        <div className="upperone">
          <div>
            <div className="prt1" id="orb">
              Subscribe to Aesop communications
            </div>
            <div className="p1txts">
              <input type="email" name="" id="" placeholder="Email adddress" />
              <span className="bi bi-arrow-right"></span>
              <div className="p1txtspara">
                <p className="mt-3">
                  <input type="checkbox" name="" />
                  &nbsp; Subscribe to receive communications from Aesop. By
                  subscribing, you confirm you have read and understood our
                  <u> privacy policy</u>.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div id="prt2">
              <div>
                <div className="ord">Orders and support</div>
                <div className="mt-2">
                  <li>Live assistance</li>
                  <li>
                    FAQs <span className="bi bi-arrow-up-right"></span>
                  </li>
                  <li>
                    Shipping <span className="bi bi-arrow-up-right"></span>
                  </li>
                  <li>
                    Returns <span className="bi bi-arrow-up-right"></span>
                  </li>
                  <li>Order history</li>
                  <li>Terms and conditions</li>
                </div>
              </div>
              <div>
                <div className="ord">Services</div>
                <div className="mt-2">
                  <li>Live assistance</li>
                  <li>Corporate gifts</li>
                  <li>Facial Appointment</li>
                  <li>Click and Collect</li>
                  <li>Video consultation</li>
                </div>
              </div>
              <div>
                <div className="ord">Location preferences</div>
                <div className="mt-2">
                  <li id="shipp">Shipping</li>
                  <li>
                    <u>Hong Kong SAR, China</u>
                  </li>
                  <li className="mt-4">Language</li>
                  <li>
                    <u>English</u>
                  </li>
                  <li>繁體中文</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="cmdo" className="upperone">
          <div>
            <div className="prt1" id="orb">
              Sustainability
            </div>
            <div className="p1txts">
              <div className="p1txtspara">
                <p className="mt-4">
                  All Aesop products are vegan, and we do not test our
                  formulations or ingredients on animals. We are Leaping Bunny
                  approved and a Certified B Corporation. Learn more
                </p>
              </div>
            </div>
          </div>
          <div>
            <div id="prt2">
              <div>
                <div className="ord">Orders and support</div>
                <div className="mt-2">
                  <li>Live assistance</li>
                  <li>Our story</li>
                  <li>Foundation</li>
                  <li>Careers</li>
                  <li>Privacy policy</li>
                  <li>Accessibility</li>
                  <li>Cookie Policy</li>
                </div>
              </div>
              <div>
                <div className="ord">Services</div>
                <div className="mt-2">
                  <li>
                    Instagram <span className="bi bi-arrow-up-right"></span>
                  </li>
                  <li>
                    Twitter <span className="bi bi-arrow-up-right"></span>
                  </li>
                  <li>
                    LinkedIn <span className="bi bi-arrow-up-right"></span>
                  </li>
                  <li>WeChat</li>
                  <li>
                    Weibo <span className="bi bi-arrow-up-right"></span>
                  </li>
                </div>
              </div>
              <div id="tobi" className="ord"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bones">
          <h3>&#169; Aesop</h3>
      </div>
    </div>
  );
};

export default page8;
