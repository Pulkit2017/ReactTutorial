
import React, { Component } from "react";
import './TodoApp.css'
import {

    useNavigate,
    useParams,
    Link,

} from "react-router-dom";


class Home extends Component {
    render() {
      const {
        getEverydayVideoP,
        keepYourAudienceE,
        signUpToGetASam,
        promotionalVideoEx,
        facebook,
        twitter,
        instagram,
        designedFor,
        linkedin,
        tiktok,
        youtube,
        snapchat,
        spanText1,
        spanText2,
        spanText3,
        needHelp,
        pricing,
        cart,
        logIn,
        signUp,
        weAreSolvingYour,
        planYourCalendarW,
        trendOnSocialPlat,
        facebookNegative2Props,
        group11Props,
        facebookNegative3Props,
        tikTokNegativeProps,
        twitterNegative2Props,
        footerProps,
      } = this.props;
  
      return (
        <div className="container-center-horizontal">
          <div className="homescreen">
            <div className="flex-col">
              <div className="group-container">
                <div className="overlap-group4">
                  <div className="rectangle-6"></div>
                  <div className="group-6">
                    <div className="group-5">
                      <h1 className="get-everyday-video-plato-bold-black-40px">
                        {getEverydayVideoP}
                      </h1>
                      <p className="keep-your-audience-elato-normal-black-16px-2">
                        {keepYourAudienceE}
                      </p>
                      <p className="sign-up-to-get-a-samlato-normal-black-16px-2">
                        {signUpToGetASam}
                      </p>
                    </div>
                    <div className="overlap-group">
                      <div className="promotional-video-exlato-bold-white-24px">
                        {promotionalVideoEx}
                      </div>
                    </div>
                  </div>
                  <div className="flex-row">
                    <div className="facebook-container">
                      <FacebookNegative />
                      <div className="facebooklato-normal-white-12px">
                        {facebook}
                      </div>
                    </div>
                    <div className="twitter-container">
                      <TwitterNegative />
                      <div className="twitterlato-normal-white-12px">
                        {twitter}
                      </div>
                    </div>
                    <div className="instagram-container">
                      <InstagramNegative />
                      <div className="instagramlato-normal-white-12px">
                        {instagram}
                      </div>
                    </div>
                    <div className="flex-col-1">
                      <div className="designed-forlato-normal-white-16px-2">
                        {designedFor}
                      </div>
                      <FacebookNegative className={facebookNegative2Props.className} />
                      <div className="linkedinlato-normal-white-12px">
                        {linkedin}
                      </div>
                    </div>
                    <div className="tiktok-container">
                      <TikTokNegative />
                      <div className="tiktoklato-normal-white-12px">
                        {tiktok}
                      </div>
                    </div>
                    <div className="youtube-container">
                      <YouTubeNegative />
                      <div className="youtubelato-normal-white-12px">
                        {youtube}
                      </div>
                    </div>
                    <div className="flex-col-2">
                      {/* <img className="vector" src="vector-93.svg" /> */}
                      <div className="snapchatlato-normal-white-12px">
                        {snapchat}
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group2">
                    <p className="refer-to-a-friendlato-normal-white-12px">
                      <span className="lato-normal-white-12px">{spanText1}</span>
                      <span className="lato-black-white-12px">{spanText2}</span>
                      <span className="lato-normal-white-12px">{spanText3}</span>
                    </p>
                  </div>
                  <div className="need-helplato-bold-white-20px">
                    {needHelp}
                  </div>
                  <div className="pricinglato-bold-white-20px">
                    {pricing}
                  </div>
                  <div className="group-45">
                    <IconmonstrShoppingCart51 />
                    <div className="cartlato-bold-white-20px">
                      {cart}
                    </div>
                  </div>
                  <div className="group-21">
                    <div className="iconmonstr-cat-3-1"></div>
                    <div className="log-inlato-bold-white-20px">
                      {logIn}
                    </div>
                  </div>
                  <Frame10>{group11Props.children}</Frame10>
                </div>
                <Group11 />
              </div>
              <div className="flex-row-1">
                {/* <img className="notospiral-calendar" src="noto-spiral-calendar.svg" /> */}
                <div className="your-container">
                  <div className="plan-your-calendar-wlato-bold-black-40px">
                    {signUp}
                  </div>
                  <p className="we-are-solving-yourlato-normal-black-16px-2">
                    {weAreSolvingYour}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-row-2">
              <div className="flex-col-3">
                <div className="trend-on-social-platlato-bold-black-40px">
                  {planYourCalendarW}
                </div>
                <p className="in-addition-to-provilato-normal-black-16px-2">
                  {trendOnSocialPlat}
                </p>
              </div>
              <div className="group-85">
                {/* <img
                  className="fluentarrow-trending-checkmark-24-filled"
                  src="fluent-arrow-trending-checkmark-24-filled.svg"
                /> */}
                <div className="flex-row-3">
                  <FacebookNegative className={facebookNegative3Props.className} />
                  <LinkedInNegative />
                  <div className="lozenge"></div>
                  {/* <img className="vector-1" src="vector-111.svg" /> */}
                  <TikTokNegative className={tikTokNegativeProps.className} />
                  <InstagramNegative2 />
                  <TwitterNegative className={twitterNegative2Props.className} />
                </div>
              </div>
            </div>
            <Footer
              facebookNegativeProps={footerProps.facebookNegativeProps}
              facebookNegativeProps2={footerProps.facebookNegativeProps2}
              facebookNegativeProps3={footerProps.facebookNegativeProps3}
              facebookNegativeProps4={footerProps.facebookNegativeProps4}
              facebookNegativeProps5={footerProps.facebookNegativeProps5}
            />
          </div>
        </div>
      );
    }
}
  
  class FacebookNegative extends Component {
    render() {
      const { className } = this.props;
  
      return <div className={`facebook-negative ${className || ""}`}></div>;
    }
  }
  
  class TwitterNegative extends Component {
    render() {
      const { className } = this.props;
  
      return (
        <div className={`twitter-negative ${className || ""}`}>
          {/* <img className="vector-2" src="vector-95.svg" /> */}
        </div>
      );
    }
  }
  
  class InstagramNegative extends Component {
    render() {
      const { className } = this.props;
  
      return (
        <div className={`instagram-negative ${className || ""}`}>
          <div className="group">
            <div className="vector-container">
              {/* <img className="vector-3" src="vector-97.svg" />
              <img className="vector-4" src="vector-98.svg" /> */}
            </div>
          </div>
        </div>
      );
    }
  }
  
  class TikTokNegative extends Component {
    render() {
      const { className } = this.props;
  
      return (
        <div className={`tik-tok-negative ${className || ""}`}>
          {/* <img className="vector-5" src="vector-101.svg" /> */}
        </div>
      );
    }
  }
  
  class YouTubeNegative extends Component {
    render() {
      const { className } = this.props;
  
      return (
        <div className={`you-tube-negative ${className || ""}`}>
          {/* <img className="vector-6" src="vector-100.svg" /> */}
        </div>
      );
    }
  }
  
  class IconmonstrShoppingCart51 extends Component {
    render() {
      return (
        <div className="iconmonstr-shopping-cart-5-1">
          {/* <img className="vector-7" src="vector-24.svg" /> */}
        </div>
      );
    }
  }
  
  class Frame10 extends Component {
    render() {
      const { children } = this.props;
  
      return (
        <div className="frame-10">
          <div className="sign-uplato-black-white-18px">
            {children}
          </div>
        </div>
      );
    }
  }
  
  class Group11 extends Component {
    render() {
      return (
        <div className="group-11">
          {/* <img className="logo-1" src="logo-2.png" /> */}
          <div className="the-infographic-companylato-bold-black-24px">
            The Infographic Company
          </div>
        </div>
      );
    }
  }
  
  class LinkedInNegative extends Component {
    render() {
      return (
        <div className="linked-in-negative-2">
          {/* <img className="vector-8" src="vector-118.svg" /> */}
        </div>
      );
    }
  }
  
  class InstagramNegative2 extends Component {
    render() {
      return (
        <div className="instagram-negative-2">
          <div className="vector-container-1">
            {/* <img className="vector-9" src="vector-114.svg" />
            <img className="vector-10" src="vector-115.svg" /> */}
          </div>
        </div>
      );
    }
  }
  
  class Footer extends Component {
    render() {
      const { facebookNegativeProps, facebookNegativeProps2, facebookNegativeProps3, facebookNegativeProps4, facebookNegativeProps5 } =
        this.props;
  
      return (
        <div className="footer">
          <div className="flex-row-4">
            <div className="flex-row-5lato-normal-zumthor-18px">
              <div className="flex-col-4">
                <div className="group-8">
                  {/* <img className="logo-2" src="logo-2.png" /> */}
                  <div className="the-infographic-company-1lato-bold-white-24px">
                    The Infographic Company
                  </div>
                </div>
                <div className="the-infographic-comp">
                  The Infographic Company started with a vision to bring innovation to the video content industry. <br />
                  <br />
                  We, as a company are building digital video content that is informative, expressive &amp; adaptive.
                </div>
                <div className="copyright">
                  © 2022, The Infographic Company
                </div>
              </div>
              <div className="group-9">
                <div className="place">
                  Home
                </div>
                <div className="group-9-item">
                  About Us
                </div>
                <div className="group-9-item">
                  FAQs
                </div>
                <div className="group-9-item">
                  Our Products
                </div>
                <div className="group-9-item">
                  Pricing
                </div>
              </div>
              {/* <img className="line-6" src="line-6.svg" /> */}
              <div className="group-10lato-normal-zumthor-18px">
                <div className="privacy-policy">
                  Privacy Policy
                </div>
                <div className="terms-of-service">
                  Terms of Service
                </div>
                <div className="help">
                  Help
                </div>
              </div>
            </div>
            <div className="flex-col-5">
              <div className="follow-uslato-bold-white-24px">
                Follow us
              </div>
              <div className="negative-container">
                <InstagramNegative className={facebookNegativeProps.className} />
                <FacebookNegative className={facebookNegativeProps2.className} />
                <TwitterNegative className={facebookNegativeProps3.className} />
              </div>
              <div className="flex-col-6">
                <div className="negative-container-1">
                  <FacebookNegative className={facebookNegativeProps4.className} />
                  <YouTubeNegative className={facebookNegativeProps5.className} />
                </div>
                <div className="powered-by-content-machinelato-normal-zumthor-18px">
                  Powered by Content Machine.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  const facebookNegative2Data = {
    className: "linked-in-negative",
  };
  
  const frame10Data = {
    children: "SIGN UP",
  };
  
  const facebookNegative3Data = {
    className: "facebook-negative-1",
  };
  
  const tikTokNegative2Data = {
    className: "tik-tok-negative-1",
  };
  
  const twitterNegative2Data = {
    className: "twitter-negative-1",
  };
  
  const instagramNegative3Data = {
    className: "instagram-negative-1",
  };
  
  const facebookNegative4Data = {
    className: "facebook-negative-2",
  };
  
  const twitterNegative3Data = {
    className: "twitter-negative-2",
  };
  
  const facebookNegative5Data = {
    className: "linked-in-negative-1",
  };
  
  const youTubeNegative2Data = {
    className: "you-tube-negative-1",
  };
  
  const footerData = {
    facebookNegativeProps: instagramNegative3Data,
    facebookNegativeProps2: facebookNegative4Data,
    facebookNegativeProps3: twitterNegative3Data,
    facebookNegativeProps4: facebookNegative5Data,
    facebookNegativeProps5: youTubeNegative2Data,
  };
  
  const homeData = {
    getEverydayVideoP: "Get Everyday Video Posts For Your Social Media & Website.",
    keepYourAudienceE: "Keep your audience engaged with video posts.",
    signUpToGetASam: "Sign up to get a sample & know how it will work.",
    promotionalVideoEx: "Promotional video explaining the product",
    facebook: "Facebook",
    twitter: "Twitter",
    instagram: "Instagram",
    designedFor: "DESIGNED FOR",
    linkedin: "Linkedin",
    tiktok: "Tiktok",
    youtube: "Youtube",
    snapchat: "Snapchat",
    spanText1: "Refer to a friend & ",
    spanText2: "get 5% discount",
    spanText3: " on your next purchase",
    needHelp: "Need Help?",
    pricing: "Pricing",
    cart: "Cart",
    logIn: "Log in",
    signUp: "Plan Your Calendar With Video Content In Advance.",
    weAreSolvingYour: (
      <>
        We are solving your every day need of video content.
        <br />
        <br />
        Our infographic content will keep your audience engage while you focus on the core communication.
      </>
    ),
    planYourCalendarW: "Trend On Social Platforms By Sheer Force Of Togetherness.*",
    trendOnSocialPlat: (
      <>
        In addition to providing you with video content, we also provide you with the opportunity to be part of trending content.
        <br />
        Wondering how?
        <br />
        As our user base will increase we will have Users sharing social media post. As we provide #tags with our content &amp; if all users
        will share the #tags Voila! <br />
        You can make your social posts trend on Social platforms.
      </>
    ),
    facebookNegative2Props: facebookNegative2Data,
    group11Props: frame10Data,
    facebookNegative3Props: facebookNegative3Data,
    tikTokNegativeProps: tikTokNegative2Data,
    twitterNegative2Props: twitterNegative2Data,
    footerProps: footerData,
  };
  class FigmaComponent extends React.Component {
    render() {
      return <Home {...homeData} />;
    }
  }
  
  export default FigmaComponent;
  
  
// function FigmaComponentWithNavigate(homeData) {
//     const navigate = useNavigate();

//     return <FigmaComponent {...homeData} navigate={navigate} />
// }


// export default FigmaComponentWithNavigate
