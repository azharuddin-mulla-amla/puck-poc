//Icon for Left Arrow
export function LeftArrow(props: any) {
  return (
    <svg
      id="icon-left"
      viewBox="0 0 25 20"
      height="25px"
      width="25px"
      {...props}
      data-test-selector={props?.dataTestSelector}
    >
      <path
        d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
        fill={props.color}
      ></path>
    </svg>
  );
}

//Icon for Right Arrow
export function RightArrow(props: any) {
  return (
    <svg
      viewBox="0 0 25 20"
      height="25px"
      width="25px"
      {...props}
      data-test-selector={props?.dataTestSelector}
    >
      <path
        d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
        fill={props.color}
      ></path>
    </svg>
  );
}

//Icon for Star Rating
export function StarRatingIcon(props: any) {
  return (
    <svg
      viewBox="0 0 25 20"
      height="25px"
      width="25px"
      {...props}
      data-test-selector={props?.dataTestSelector}
    >
      <path
        d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
        stroke="#454545"
        strokeWidth="2"
        fill="white"
      ></path>
    </svg>
  );
}
