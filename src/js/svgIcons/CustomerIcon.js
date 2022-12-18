import * as React from "react";
const SvgCustomerIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.968 5C15.872 5 10.93 9.944 10.93 16.038c0 6.097 4.94 11.038 11.038 11.038 6.093 0 11.037-4.943 11.037-11.038C33.005 9.946 28.06 5 21.968 5Zm0 2c4.987 0 9.037 4.05 9.037 9.038 0 4.99-4.048 9.038-9.037 9.038a9.036 9.036 0 0 1-9.038-9.038c0-4.99 4.047-9.038 9.038-9.038Zm0 20.54c1.78 0 3.512.279 5.137.8a11.056 11.056 0 0 0-1.346 1.69 14.866 14.866 0 0 0-3.791-.49c-7.06 0-12.993 4.932-13.98 11.474a1 1 0 0 1-1.977-.298C7.147 33.18 13.933 27.54 21.968 27.54Z"
      fill="#666F8C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35 26c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 10v-1c0-.737.383-1.3.977-1.771.18-.142.233-.178.557-.383A1 1 0 1 0 34 34h-2a3 3 0 1 1 4.605 2.535c-.253.16-.284.181-.384.26-.117.093-.18.161-.206.19-.01.012-.015.017-.015.015v1h-2Zm1 2.998a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      fill="url(#customer-icon_svg__a)"
    />
    <defs>
      <linearGradient
        id="customer-icon_svg__a"
        x1={49.303}
        y1={36.233}
        x2={18.454}
        y2={36.233}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0E9BFC" />
        <stop offset={0.948} stopColor="#FF00C7" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgCustomerIcon;
