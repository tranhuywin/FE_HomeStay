import React from "react";

function Calendar() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="15" cy="15" r="15" fill="#14C1C7" />
      <rect x="6" y="6" width="18" height="18" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_315_291" transform="scale(0.02)" />
        </pattern>
        <image
          id="image0_315_291"
          width="50"
          height="50"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA4klEQVRoge2WUQ6CMBBEd42XMF6ITz2Ht8bYawwfplijaEs0HTbzviC0231smGBWCYABwBUPRgBD7f7e9cuDRrwybqV+eRAAYOm+d/3drxrpzSwC4AwgvRnvxzeztL6VFfUTgFNe58WGZGaHb+bu7vmAihfVTGP95O5Hs2eRqsbIROb1Yb6R5omwEW4iEmEjjIhgQ/HLhkTYkAgb+9YNOSVKcuL941ktYSYiETbCiOgXhQ3FLxsSYSOMiOKXDcUvGxJhI4yI4pcNibAhETZKkdSti/Xc8kUpcrFtySS79ywomQBQLWN5nPbaHAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}

export default Calendar;
