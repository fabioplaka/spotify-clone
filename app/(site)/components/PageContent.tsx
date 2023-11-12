"use client";

import { Song } from "@/types/SongTypes";
import React from "react";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  return <div></div>;
};

export default PageContent;
