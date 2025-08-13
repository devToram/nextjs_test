// components/ClientLazy.tsx
"use client";

import React, { lazy, Suspense } from "react";

const LazyInner = lazy(() =>
  new Promise<{ default: React.ComponentType<any> }>((resolve) => {
    setTimeout(() => {
      import("./LazyInner").then((mod) => resolve({ default: mod.default }));
    }, 30000);
  })
);

export default function ClientLazy() {
  return (
    <div style={{ border: "2px solid orange", padding: "10px" }}>
      <h2>Client Component with Lazy Inner</h2>
      <Suspense fallback={<div style={{ color: "gray" }}>Loading inner...</div>}>
        <LazyInner />
      </Suspense>
    </div>
  );
}
