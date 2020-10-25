import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableauEmbed() {
  const ref = useRef(null);
  const url = "https://public.tableau.com/views/Indiacovid-19data/covid19data";
  const options = {
    hideTabs: true,
    device: "desktop",
  };

  function initViz() {
    new tableau.Viz(ref.current, url, options);
  }

  useEffect(() => {
    initViz();
  });

  return <div ref={ref}></div>;
}

export default TableauEmbed;
