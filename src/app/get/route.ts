import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

const safeValidateUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  console.log(searchParams);
  const redirectUrl = searchParams.get("redirectUrl");
  if (!redirectUrl || !safeValidateUrl(redirectUrl)) {
    return redirect("/404");
  }

  const logPayload = JSON.stringify({
    userAgent: request.headers.get("user-agent"),
    ip: request.headers.get("x-real-ip"),
    referer: request.headers.get("referer"),
    redirectUrl,
    ...Object.fromEntries(searchParams),
  });
  console.log(logPayload);
  fetch(
    "https://script.google.com/macros/s/AKfycbzHk9nIqTdnRz3Ayj0pPhEuOqbwRq-DaZ6JGCeUpJMaE8rdTUZMQ9zJa6qFpkxCvRnN/exec",
    // "https://script.google.com/macros/s/AKfycbzSgIsrwgNQ_gmzDRHoRKTwSiCEAWVhqqCKlL90EsQ/dev",
    {
      method: "POST",
      body: logPayload,
      headers: {
        contentType: "application/json",
      },
    },
  )
    .then((r) => console.log(r.status))
    .catch((e) => console.error(e));

  console.log(`track request to ${redirectUrl}`);
  return redirect(redirectUrl);
}
