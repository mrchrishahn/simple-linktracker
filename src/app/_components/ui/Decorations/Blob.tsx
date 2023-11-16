import React, { type FC } from "react";

interface BlobProps {
  rotation?: `${number}deg`;
  background: string;
  flipHorizontal?: boolean;
  flipVertical?: boolean;
}

export const Blob: FC<BlobProps> = ({
  rotation,
  background,
  flipHorizontal,
  flipVertical,
}) => {
  return (
    <svg
      width="541"
      height="608"
      viewBox="0 0 541 608"
      fill="none"
      style={{
        transform: `${rotation ? `rotate(${rotation})` : ""} ${
          flipHorizontal ?? flipVertical
            ? `scale(${flipHorizontal ? -1 : 1}, ${flipVertical ? -1 : 1})`
            : ""
        }`,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="blob">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M267.863 150.088C306.453 151.775 334.558 184.727 358.302 215.142C378.655 241.213 386.763 272.458 389.133 305.427C391.756 341.923 395.091 381.027 372.284 409.67C347.491 440.809 307.678 456.173 267.863 457.734C226.416 459.359 175.027 454.403 154.904 418.194C135.326 382.967 180.509 345.621 183.217 305.427C185.536 271.008 152.627 237.175 169.139 206.872C188.006 172.248 228.419 148.363 267.863 150.088Z"
        />
      </clipPath>
      <foreignObject width="541" height="608" clipPath="url(#blob)">
        <div
          style={{
            background: background,
            width: "100%",
            height: "100%",
          }}
        />
      </foreignObject>
    </svg>
  );
};

export default Blob;
