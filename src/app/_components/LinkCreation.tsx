"use client";

import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";

export const LinkCreation = () => {
  const url = usePathname();
  const [parameters, setParameters] = useState<
    {
      key: string;
      value: string;
    }[]
  >([{ key: "", value: "" }]);
  const [link, setLink] = useState("");

  const redirectLink = useMemo(() => {
    try {
      new URL(link);
      const origin =
        typeof document !== "undefined"
          ? document.location.origin
          : url.slice(1);
      const redirectUrl = new URL(`/get`, origin);
      redirectUrl.searchParams.set("redirectUrl", link);
      for (const parameter of parameters) {
        if (parameter.key && parameter.value) {
          redirectUrl.searchParams.set(parameter.key, parameter.value);
        }
      }
      return redirectUrl.toString();
    } catch {
      return "";
    }
  }, [link, parameters, url]);

  return (
    <form id="link-input" className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label
          className="mb-2 ml-2 text-sm font-semibold text-softGrey"
          htmlFor="linkInput"
        >
          Link to track {url}
        </label>
        <input
          name="linkInput"
          className="w-full rounded-2xl border border-b-white/10 border-l-white/10 border-r-white/20 border-t-white/20 bg-white/25 px-4 py-2 text-base leading-8 backdrop-blur-md focus:border-blueGrey/20 focus:outline-none focus:ring-2 focus:ring-blueGrey/20"
          type="url"
          placeholder="https://example.com"
          value={link}
          pattern="https://.*"
          onChange={(event) => setLink(event.target.value)}
        />
      </div>
      <label
        className="ml-2 mt-4 text-sm font-semibold text-softGrey"
        htmlFor="parameters"
      >
        Additional parameters
      </label>
      {parameters.map((parameter, index) => (
        <div className="group relative grid grid-cols-[1fr_2fr]" key={index}>
          <input
            name={`parameters-${index}-key`}
            className={`rounded-l-2xl 
                        border border-b-white/10 border-l-white/10 border-r-transparent border-t-white/20 bg-white/25 
                        px-4 py-1 text-sm leading-8 backdrop-blur-md 
                      focus:border-blueGrey/20 focus:outline-none
                        focus:ring-2 focus:ring-blueGrey/20
                        
            `}
            type="text"
            placeholder="Parameter name"
            pattern="[a-zA-Z0-9_-]+"
            value={parameter.key}
            onChange={(event) => {
              const newParameters = [...parameters];
              if (newParameters[index] === undefined) {
                return;
              }
              newParameters[index]!.key = event.target.value.replace(" ", "_");
              setParameters(newParameters);
            }}
          />
          <input
            name={`parameters-${index}-value`}
            className="rounded-r-2xl border border-b-white/10 border-l-white/10 border-r-white/20 border-t-white/20 bg-white/25 px-4 py-1 text-sm leading-8 backdrop-blur-md focus:border-blueGrey/20 focus:outline-none focus:ring-2 focus:ring-blueGrey/20"
            type="text"
            value={parameter.value}
            placeholder="Parameter value"
            onChange={(event) => {
              const newParameters = [...parameters];
              if (newParameters[index] === undefined) {
                return;
              }
              newParameters[index]!.value = event.target.value;
              setParameters(newParameters);
            }}
          />
          {index > 0 && (
            <button
              className="absolute -top-1/2 right-0 h-8 w-8 rounded-full border border-b-white/10 border-l-white/10 border-r-white/20 border-t-white/20 bg-white/25 p-1 text-center text-sm opacity-0 backdrop-blur-md transition-opacity focus:border-blueGrey/20 focus:outline-none focus:ring-2 focus:ring-blueGrey/20 group-hover:opacity-100"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                const newParameters = [...parameters];
                newParameters.splice(index, 1);
                setParameters(newParameters);
              }}
            >
              x
            </button>
          )}
        </div>
      ))}
      <button
        className="self-start rounded-2xl border border-b-white/10 border-l-white/10 border-r-white/20 border-t-white/20 bg-grey/60 px-3 py-0.5 text-xs font-medium leading-8 backdrop-blur-lg focus:border-blueGrey/20 focus:outline-none focus:ring-2 focus:ring-blueGrey/20"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setParameters([...parameters, { key: "", value: "" }]);
        }}
      >
        + Add parameter
      </button>
      {redirectLink && link && (
        <div className="flex items-center justify-between gap-2 rounded-3xl border border-b-white/10 border-l-white/10 border-r-white/20 border-t-white/20 bg-white/25 p-4">
          <p className="break-before-all break-all text-sm">{redirectLink}</p>
          <button
            type="button"
            className="self-start rounded-2xl border border-b-white/10 border-l-white/10 border-r-white/20 border-t-white/20 bg-grey/60 px-3 py-0.5 text-xs font-medium leading-8 backdrop-blur-lg focus:border-blueGrey/20 focus:outline-none focus:ring-2 focus:ring-blueGrey/20"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard
                .writeText(redirectLink)
                .then(() => {
                  alert("Copied to clipboard");
                })
                .catch(console.log);
            }}
          >
            Copy
          </button>
        </div>
      )}
    </form>
  );
};
