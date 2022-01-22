import React from "react";
import "./home.css";
import { useSelector } from "react-redux";

function Home() {
  const language = useSelector((state) => state.lang);
  return (
    <>
      <div className="con">
        <div className="fadediv">
          <div className="pagecontent">
            <div className="container main">
              <div dir={language == "العربية" ? "rtl" : "ltr"}>
                <div className="row text-center">
                  <h1
                    style={{
                      display: language == "العربية" ? "block" : "none",
                    }}
                    className="fs-1"
                  >
                    Unlimited movies, TV shows, and more.
                  </h1>

                  <h1
                    style={{
                      display: language == "العربية" ? "none" : "block",
                    }}
                    className="fs-1"
                  >
                    عدد لا حصر له من الأفلام والعروض التلفزيونية، وغيرها.
                  </h1>
                </div>
                <div className="row text-center ">
                  <h3
                    style={{
                      display: language == "العربية" ? "block" : "none",
                    }}
                    className="fs-4"
                  >
                    Watch anywhere. Cancel anytime.
                  </h3>
                  <h3
                    style={{
                      display: language == "العربية" ? "none" : "block",
                    }}
                    className="fs-4"
                  >
                    شاهد حيثما كنت. يمكنك الإلغاء متى شئت.
                  </h3>
                </div>
                <div className="row text-center">
                  <h4
                    style={{
                      display: language == "العربية" ? "block" : "none",
                    }}
                    className="fs-6 mt-3"
                  >
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h4>
                  <h4
                    style={{
                      display: language == "العربية" ? "none" : "block",
                    }}
                    className="fs-6 mt-3"
                  >
                    هل أنت جاهزٌ للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء عضويتك
                    أو إعادة تشغيلها.
                  </h4>
                </div>
              </div>
              <div className="row mt-3 text-center">
                <div className="col-8 clos">
                  <input
                    type="email"
                    htmlFor="email"
                    className="inputhome"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="col-4 clos">
                  <button className="input-element regbtn" type="submit">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
