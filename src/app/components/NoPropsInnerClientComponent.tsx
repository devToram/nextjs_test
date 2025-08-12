"use client"
import { useEffect } from "react";

export default function NoPropsInnerClientComponent() {
  useEffect(() => {
    console.log("NoPropsInnerClientComponent 렌더링");
  })


  return (
    <div style={{ color: "purple" }}>
        NoPropsInnerClientComponent
    </div>
  );
}
