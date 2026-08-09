import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf8f2",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 40 40">
          <circle cx="15" cy="14" r="8.5" fill="none" stroke="#1c2b26" strokeWidth="3.6" />
          <circle cx="25" cy="26" r="8.5" fill="none" stroke="#ff5c35" strokeWidth="3.6" />
        </svg>
      </div>
    ),
    size,
  );
}
