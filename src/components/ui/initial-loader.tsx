"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";

export default function InitialLoader({ ms = 650 }: { ms?: number }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), ms);
    return () => clearTimeout(t);
  }, [ms]);

  if (!show) return null;
  return <Loader />;
}
