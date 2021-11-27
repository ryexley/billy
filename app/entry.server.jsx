import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import { getCssText } from "~/styles"

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  ).replace(
    /<\/head>/,
    `<style id="stitches">${getCssText()}</style></head>`
  )

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
