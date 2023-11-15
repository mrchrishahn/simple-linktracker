import React, { type FC } from "react";
import get from "lodash/get";

import { Colors } from "../colors";

import { isValidColorString } from "~/utils/styleUtils";

interface RedoIconProps {
  width?: string;
  color?: string;
}

const ChevronRightIcon: FC<RedoIconProps> = ({ width, color }) => {
  const DEFAULT_WIDTH = "18";
  const DEFAULT_COLOR = Colors.grey.DEFAULT;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
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
        d="M14.2448 10.3492L9.05651 5.17007C8.97129 5.08416 8.86991 5.01596 8.7582 4.96942C8.6465 4.92289 8.52669 4.89893 8.40567 4.89893C8.28466 4.89893 8.16485 4.92289 8.05315 4.96942C7.94144 5.01596 7.84006 5.08416 7.75484 5.17007C7.58411 5.34182 7.48828 5.57415 7.48828 5.81632C7.48828 6.05849 7.58411 6.29083 7.75484 6.46257L12.2923 11.0459L7.75484 15.5834C7.58411 15.7552 7.48828 15.9875 7.48828 16.2297C7.48828 16.4718 7.58411 16.7042 7.75484 16.8759C7.83974 16.9625 7.94098 17.0314 8.0527 17.0786C8.16442 17.1258 8.28439 17.1504 8.40567 17.1509C8.52696 17.1504 8.64693 17.1258 8.75865 17.0786C8.87037 17.0314 8.97161 16.9625 9.05651 16.8759L14.2448 11.6967C14.3379 11.6109 14.4121 11.5067 14.4629 11.3908C14.5137 11.2748 14.5399 11.1496 14.5399 11.023C14.5399 10.8964 14.5137 10.7712 14.4629 10.6552C14.4121 10.5393 14.3379 10.4351 14.2448 10.3492Z"
      />
    </svg>
  );
};

export default ChevronRightIcon;
