import React, { type FC } from "react";
import get from "lodash/get";

import { Colors } from "../colors";

import { isValidColorString } from "~/utils/styleUtils";

interface IconProps {
  width?: string;
  color?: string;
}

const MessageIcon: FC<IconProps> = ({ width, color }) => {
  const DEFAULT_WIDTH = "18";
  const DEFAULT_COLOR = Colors.grey.DEFAULT;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      width={width ?? DEFAULT_WIDTH}
    >
      <path
        stroke={
          color
            ? get(
                Colors,
                color,
                isValidColorString(color) ? color : DEFAULT_COLOR,
              )
            : DEFAULT_COLOR
        }
        d="M19.2444 19.25L19.2444 19.2501M19.2444 19.25L19.2444 19.2501L19.2444 19.25ZM19.2444 19.25L19.2444 19.2501M19.2444 19.2501L19.2144 19.2802L18.5988 19.9009M15.9152 15.7939L15.6222 15.5H15.2072H4.58301C4.11888 15.5 3.67376 15.3157 3.34557 14.9875C3.01738 14.6593 2.83301 14.2142 2.83301 13.75V4.58337C2.83301 4.11925 3.01738 3.67413 3.34557 3.34594C3.67376 3.01775 4.11888 2.83337 4.58301 2.83337H17.4163C17.8805 2.83337 18.3256 3.01775 18.6538 3.34594L19.3609 2.63883L18.6538 3.34594C18.982 3.67413 19.1663 4.11924 19.1663 4.58337V19.0538L15.9152 15.7939Z"
        strokeWidth={2}
        fill={"transparent"}
      />
    </svg>
  );
};

export default MessageIcon;
