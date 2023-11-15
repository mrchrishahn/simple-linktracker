import React, { type FC } from "react";
import get from "lodash/get";

import { Colors } from "../colors";

import { isValidColorString } from "~/utils/styleUtils";

interface RedoIconProps {
  width?: string;
  color?: string;
}

const RedoIcon: FC<RedoIconProps> = ({ width, color }) => {
  const DEFAULT_WIDTH = "18";
  const DEFAULT_COLOR = Colors.grey.DEFAULT;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width ?? DEFAULT_WIDTH}
    >
      <path
        fill={
          color
            ? get(
                Colors,
                color,
                isValidColorString(color) ? color : DEFAULT_COLOR,
              )
            : DEFAULT_COLOR
        }
        d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"
      />
    </svg>
  );
};

export default RedoIcon;
