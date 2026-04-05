import type { Metadata } from "next";
import TvInfoScreen from "./TvInfoScreen";

export const metadata: Metadata = {
  title: "13x13 TV Info Demo",
  description: "Демо-режим сайта 13x13 для экрана в зале.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TvInfoPage() {
  return <TvInfoScreen />;
}

