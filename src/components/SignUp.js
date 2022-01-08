import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
//import { onSignUpUser } from "../../Helpers/API/apiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom';
const SignupSchema = Yup.object().shape({
  company_name: Yup.string().min(3, "Too Short!").required("Required"),
  person_name: Yup.string().min(3, "Too Short!").required("Required"),
  mobile_number: Yup.number().min(10, "Too Short!"),
  password: Yup.string().min(5, "Too Short!").required("Required"),
  email_address: Yup.string().email("Invalid email").required("Required"),
});
function SignUp() {
  const history = useHistory();
  const [response, setResponse] = useState();
  
  const onHandleSubmitData = async (e) => {
   // const d = await onSignUpUser(e);
   // setResponse(d);
  };
  useEffect(() => {
    if (response) {
      if (response.message.includes("Suc")) {
        toast.success(response.message);
        setTimeout(() => {
          history.push("/subscription");
        }, 5000);
      } else {
        toast.error(response.message);
      }
    }
  }, [response, history]);
  return (
    <div className="sign-up-section">
      <div className="sign-up-bg">
        <Container>
          <div className="sign-up-quote-section">
            <svg
              width="204"
              height="57"
              viewBox="0 0 204 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.251404"
                width="55.9102"
                height="55.8627"
                rx="10"
                fill="#005D91"
              />
              <path
                d="M17.2748 17.5146H13.7856V14.0254H17.2748V17.5146Z"
                fill="white"
              />
              <path
                d="M42.1245 17.5146H38.6353V14.0254H42.1245V17.5146Z"
                fill="#8CC540"
              />
              <path
                d="M17.2748 42.3402H13.7856V38.851H17.2748V42.3402Z"
                fill="white"
              />
              <path
                d="M29.6992 29.9528H26.2109V26.4636H29.6992V29.9528Z"
                fill="white"
              />
              <path
                d="M23.4909 23.7462H20.0063V20.257H23.4909V23.7462Z"
                fill="white"
              />
              <path
                d="M23.4868 23.7406H19.9985V20.2514H23.4868V23.7406Z"
                fill="white"
              />
              <path
                d="M23.4909 35.872H20.0063V32.3828H23.4909V35.872Z"
                fill="white"
              />
              <path
                d="M23.4868 35.8683H19.9985V32.3791H23.4868V35.8683Z"
                fill="white"
              />
              <path
                d="M35.6147 23.7406H32.1255V20.2514H35.6147V23.7406Z"
                fill="#8CC540"
              />
              <path
                d="M35.6147 35.8683H32.1255V32.3791H35.6147V35.8683Z"
                fill="#8CC540"
              />
              <path
                d="M42.1245 42.3402H38.6353V38.851H42.1245V42.3402Z"
                fill="#8CC540"
              />
              <path
                d="M66.7468 34.945C66.1965 34.945 65.9179 34.6559 65.9179 34.0813V22.2399C65.9014 22.1266 65.9113 22.011 65.9469 21.9022C65.9825 21.7934 66.0428 21.6943 66.1231 21.6127C66.2034 21.531 66.3014 21.4691 66.4097 21.4317C66.5179 21.3943 66.6333 21.3824 66.7468 21.3971H79.2081V23.0688H67.5931V33.2733H79.2255V34.945H66.7468ZM77.3936 29.0243V27.3526H79.0653V29.0243H77.3936Z"
                fill="white"
              />
              <path
                d="M98.1509 34.945V21.4006H99.84V34.945H98.1509Z"
                fill="white"
              />
              <path
                d="M123.053 34.945V23.0723H120.938L114.415 33.4753C114.361 33.6213 114.263 33.7472 114.134 33.8361C114.006 33.9249 113.854 33.9725 113.698 33.9725C113.542 33.9725 113.39 33.9249 113.261 33.8361C113.133 33.7472 113.035 33.6213 112.98 33.4753L106.311 23.0723H104.221V34.945H102.55V22.2434C102.535 22.1273 102.547 22.0094 102.586 21.899C102.624 21.7885 102.688 21.6885 102.771 21.6068C102.855 21.5251 102.957 21.4639 103.068 21.4281C103.179 21.3923 103.298 21.3829 103.413 21.4006H106.795C106.934 21.3993 107.071 21.4339 107.193 21.501C107.315 21.5681 107.418 21.6654 107.492 21.7837L113.684 31.4518L119.768 21.8046C119.835 21.6884 119.925 21.5875 120.033 21.5085C120.162 21.4292 120.313 21.3915 120.465 21.4006H123.864C123.979 21.3837 124.096 21.3938 124.206 21.4301C124.316 21.4665 124.416 21.528 124.498 21.6098C124.581 21.6917 124.643 21.7916 124.679 21.9015C124.716 22.0115 124.727 22.1286 124.71 22.2434V34.945H123.053Z"
                fill="white"
              />
              <path
                d="M135.183 30.9921V29.3204H138.363C138.911 29.3316 139.458 29.2861 139.996 29.1846C140.361 29.1184 140.7 28.9492 140.971 28.697C141.22 28.432 141.384 28.0983 141.442 27.7392C141.528 27.2238 141.568 26.7016 141.56 26.179C141.572 25.6484 141.525 25.1181 141.421 24.5978C141.345 24.2251 141.137 23.8923 140.836 23.6609C140.451 23.4037 140.008 23.2458 139.547 23.2012C138.806 23.1112 138.061 23.0716 137.315 23.0828H129.116V34.9451H127.444V22.2434C127.427 22.13 127.437 22.0141 127.472 21.905C127.507 21.7958 127.568 21.6964 127.648 21.6146C127.728 21.5328 127.827 21.4708 127.935 21.4337C128.044 21.3966 128.16 21.3852 128.273 21.4006H137.353C138.353 21.3823 139.353 21.4616 140.338 21.6374C140.994 21.7483 141.611 22.0239 142.131 22.4385C142.575 22.8371 142.883 23.3643 143.012 23.9465C143.186 24.7141 143.266 25.5001 143.249 26.2869C143.264 27.0458 143.194 27.8039 143.04 28.5472C142.928 29.0916 142.664 29.5929 142.278 29.9926C141.855 30.3826 141.333 30.6489 140.769 30.7623C139.96 30.9326 139.134 31.0097 138.307 30.9921H135.183Z"
                fill="white"
              />
              <path
                d="M146.008 34.945C145.457 34.945 145.182 34.6559 145.182 34.0813V22.2399C145.165 22.1268 145.174 22.0113 145.21 21.9024C145.245 21.7936 145.305 21.6944 145.385 21.6126C145.465 21.5309 145.563 21.4689 145.671 21.4315C145.779 21.3941 145.894 21.3823 146.008 21.3971H158.469V23.0688H146.854V33.2733H158.486V34.945H146.008ZM156.581 29.0243V27.3526H158.253V29.0243H156.581Z"
                fill="white"
              />
              <path
                d="M161.446 34.9451C161.33 34.9605 161.212 34.9486 161.101 34.9103C160.99 34.8721 160.889 34.8086 160.807 34.7248C160.725 34.641 160.664 34.5392 160.628 34.4275C160.592 34.3158 160.582 34.1973 160.6 34.0813V22.24C160.584 22.1251 160.594 22.0081 160.631 21.8981C160.668 21.7881 160.73 21.6882 160.812 21.6064C160.894 21.5246 160.994 21.463 161.104 21.4267C161.215 21.3904 161.332 21.3802 161.446 21.3971H170.69C171.851 21.3971 172.834 21.4273 173.639 21.4877C174.333 21.532 175.021 21.6334 175.698 21.7907C176.172 21.8957 176.622 22.092 177.021 22.3688C177.341 22.6114 177.599 22.9265 177.774 23.2883C177.967 23.7053 178.085 24.1534 178.122 24.6117C178.171 25.1272 178.195 25.7227 178.195 26.3949V29.9438C178.195 30.616 178.171 31.2115 178.122 31.7235C178.086 32.1819 177.968 32.6301 177.774 33.047C177.601 33.4099 177.343 33.7254 177.021 33.9664C176.623 34.246 176.173 34.4426 175.698 34.5445C175.022 34.7049 174.333 34.8074 173.639 34.851C172.825 34.9091 171.841 34.9393 170.69 34.9416L161.446 34.9451ZM176.534 26.3984C176.534 25.9212 176.534 25.5033 176.495 25.1481C176.482 24.837 176.407 24.5317 176.276 24.2495C176.153 24.0019 175.962 23.7943 175.726 23.6505C175.411 23.4764 175.068 23.3585 174.712 23.3022C174.175 23.2058 173.631 23.1476 173.086 23.1281C172.431 23.0979 171.638 23.0828 170.707 23.0828H162.289V33.2629H170.69C171.618 33.2629 172.411 33.2478 173.068 33.2176C173.613 33.1991 174.157 33.1444 174.695 33.0539C175.051 33.0022 175.395 32.8841 175.708 32.7056C175.944 32.5631 176.135 32.3566 176.259 32.1101C176.389 31.8301 176.464 31.5272 176.478 31.2185C176.502 30.8702 176.516 30.4488 176.516 29.9612L176.534 26.3984Z"
                fill="white"
              />
              <path
                d="M180.633 34.945V21.4006H182.325V34.945H180.633Z"
                fill="white"
              />
              <path
                d="M200.913 34.9764L194.16 23.0305H192.475L185.721 34.9764L184.29 34.2067L191.294 21.829C191.358 21.6958 191.46 21.5843 191.587 21.5082C191.714 21.4321 191.86 21.3947 192.008 21.4006H194.644C194.789 21.3998 194.931 21.4394 195.054 21.5152C195.177 21.5909 195.276 21.6996 195.341 21.829L202.327 34.2067L200.913 34.9764ZM192.485 28.8154V27.1855H194.115V28.8154H192.485Z"
                fill="white"
              />
              <path
                d="M83.7674 23.0693H82.0952V21.4006H83.7674V23.0693Z"
                fill="white"
              />
              <path
                d="M95.6683 23.0693H93.9927V21.4006H95.6649L95.6683 23.0693Z"
                fill="white"
              />
              <path
                d="M83.7674 34.9594H82.0952V33.2907H83.7674V34.9594Z"
                fill="white"
              />
              <path
                d="M89.7161 29.0283H88.0439V27.3561H89.7161V29.0283Z"
                fill="white"
              />
              <path
                d="M86.7419 26.054H85.0732V24.3818H86.7419V26.054Z"
                fill="white"
              />
              <path
                d="M86.742 26.054H85.0698V24.3818H86.742V26.054Z"
                fill="white"
              />
              <path
                d="M86.7419 31.8632H85.0732V30.1911H86.7419V31.8632Z"
                fill="white"
              />
              <path
                d="M86.742 31.8598H85.0698V30.1911H86.742V31.8598Z"
                fill="white"
              />
              <path
                d="M92.5511 26.054H90.8789V24.3818H92.5511V26.054Z"
                fill="white"
              />
              <path
                d="M92.5511 31.8598H90.8789V30.1911H92.5511V31.8598Z"
                fill="white"
              />
              <path
                d="M95.6683 34.9594H93.9927V33.2907H95.6649L95.6683 34.9594Z"
                fill="white"
              />
              <path
                d="M201.188 21.4006H202.097C202.122 21.4006 202.132 21.4006 202.132 21.4319V21.5016C202.132 21.5225 202.132 21.533 202.097 21.533H201.721V22.8533C201.721 22.8742 201.721 22.8846 201.693 22.8846H201.61C201.585 22.8846 201.575 22.8846 201.575 22.8533V21.533H201.199H201.174C201.172 21.525 201.172 21.5165 201.174 21.5086V21.4389C201.172 21.4309 201.172 21.4225 201.174 21.4145C201.177 21.4083 201.182 21.4034 201.188 21.4006Z"
                fill="white"
              />
              <path
                d="M203.564 21.4319V22.8533C203.564 22.8742 203.564 22.8846 203.529 22.8846H203.442C203.437 22.8852 203.433 22.8848 203.429 22.8834C203.425 22.8821 203.421 22.8798 203.418 22.8767C203.415 22.8737 203.413 22.87 203.412 22.8659C203.41 22.8619 203.41 22.8575 203.41 22.8533V21.7246C203.41 21.7699 203.383 21.8151 203.365 21.8604L203.048 22.6268C203.045 22.6363 203.039 22.6445 203.031 22.6502C203.023 22.6559 203.013 22.6587 203.003 22.6582H202.926C202.917 22.6585 202.907 22.6556 202.9 22.6499C202.892 22.6442 202.887 22.636 202.884 22.6268L202.536 21.843C202.521 21.8056 202.508 21.7672 202.498 21.728V22.8533C202.498 22.8575 202.498 22.8619 202.496 22.8659C202.495 22.87 202.493 22.8737 202.49 22.8767C202.487 22.8798 202.483 22.8821 202.479 22.8834C202.475 22.8848 202.471 22.8852 202.466 22.8846H202.383C202.378 22.8852 202.374 22.8848 202.37 22.8834C202.366 22.8821 202.362 22.8798 202.359 22.8767C202.356 22.8737 202.354 22.87 202.353 22.8659C202.351 22.8619 202.351 22.8575 202.351 22.8533V21.4319C202.351 21.4277 202.351 21.4234 202.353 21.4193C202.354 21.4152 202.356 21.4115 202.359 21.4085C202.362 21.4055 202.366 21.4032 202.37 21.4018C202.374 21.4004 202.378 21.4 202.383 21.4006H202.466C202.466 21.4006 202.491 21.4006 202.494 21.418L202.909 22.383C202.924 22.4194 202.936 22.4566 202.947 22.4945L202.989 22.3865L203.393 21.418C203.393 21.418 203.393 21.4006 203.424 21.4006H203.511C203.55 21.4006 203.564 21.411 203.564 21.4319Z"
                fill="white"
              />
            </svg>
            <div className="sign-up-quote-start">“</div>
            <div className="sign-up-quote-test">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </div>
            <div className="sign-up-quote-name">
              Vincent Obi
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.666504 8C0.666504 3.94992 3.94975 0.666672 7.99984 0.666672C12.0499 0.666672 15.3332 3.94992 15.3332 8C15.3332 12.0501 12.0499 15.3333 7.99984 15.3333C3.94975 15.3333 0.666504 12.0501 0.666504 8Z"
                    fill="#08AD36"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5403 5.36195C11.8007 5.6223 11.8007 6.04441 11.5403 6.30476L7.40223 10.6381C7.14188 10.8984 6.71977 10.8984 6.45942 10.6381L4.45942 8.6381C4.19907 8.37775 4.19907 7.95564 4.45942 7.69529C4.71977 7.43494 5.14188 7.43494 5.40223 7.69529L6.93083 9.22388L10.5975 5.36195C10.8578 5.1016 11.28 5.1016 11.5403 5.36195Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="sign-up-quote-end">
              <svg
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="sign-up-main">
            <div className="sign-up-head">Register Individual Account!</div>
            <div className="sign-up-sub">
              Start Growing with Market Inside today! your details are required.
            </div>
            <div className="sign-up-inputs">
              <Formik
                initialValues={{
                  person_name: "",
                  company_name: "",
                  mobile_number: "",
                  password: "",
                  email_address: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(e) => {
                  onHandleSubmitData(e);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="exampleInputPersonName">
                        Person Name*
                      </label>
                      <Field
                        name="person_name"
                        className="form-control"
                        id="exampleInputPersonName"
                        placeholder="Enter Person Name"
                      />
                    </div>
                    {errors.person_name && touched.person_name ? (
                      <div style={{ color: "red" }}>{errors.person_name}</div>
                    ) : null}
                    <div className="form-group">
                      <label htmlFor="exampleInputCompanyName">
                        Company Name*
                      </label>
                      <Field
                        name="company_name"
                        className="form-control"
                        id="exampleInputCompanyName"
                        placeholder="Enter Company Name"
                      />
                    </div>
                    {errors.company_name && touched.company_name ? (
                      <div style={{ color: "red" }}>{errors.company_name}</div>
                    ) : null}
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address*</label>
                      <Field
                        name="email_address"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                      />
                    </div>
                    {errors.email_address && touched.email_address ? (
                      <div style={{ color: "red" }}>{errors.email_address}</div>
                    ) : null}
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password*</label>
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    {errors.password && touched.password ? (
                      <div style={{ color: "red" }}>{errors.password}</div>
                    ) : null}
                    <div className="form-group">
                      <label htmlFor="exampleInputMobileNumber">
                        Mobile Number
                      </label>
                      <Field
                        name="mobile_number"
                        className="form-control"
                        id="exampleInputMobileNumber"
                        placeholder="Enter mobile number"
                      />
                    </div>
                    {errors.mobile_number && touched.mobile_number ? (
                      <div style={{ color: "red" }}>{errors.mobile_number}</div>
                    ) : null}
                    <div className="form-check">
                      <Field type="checkbox" className="form-check-input" />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I agree to terms & conditions
                      </label>
                    </div>
                    <div className="form-buttons">
                      <button type="submit" className="btn submit">
                        Register with Email
                      </button>
                      {/* or
                      <button className="btn">
                        <svg
                          className="button-svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                            fill="#FFC107"
                          />
                          <path
                            d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z"
                            fill="#FF3D00"
                          />
                          <path
                            d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.0011 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                            fill="#4CAF50"
                          />
                          <path
                            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                            fill="#1976D2"
                          />
                        </svg>
                        Sign Up with Google
                      </button> */}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default SignUp;