'use client'

import { useRef } from "react";

export const RenderCounter = ({ className }: { className?: string }) => {
    const renderCounter = useRef(0);
    renderCounter.current = renderCounter.current + 1;
    return <span className={className}>Renders: {renderCounter.current}</span>;
};