"use client"
import { useEffect } from "react";

export default function InnerClientComponent(serverProps: {serverProps: string}) {
  useEffect(() => {
    console.log(serverProps.serverProps)
  }, [serverProps.serverProps])


  return (
    <div style={{ color: "pink" }}>
      <>
        ✅ 서버 컴포넌트 내부 클라이언트 데이터 렌더 완료 <div style={{color: "orange"}}>{serverProps.serverProps}</div>
      </>
    </div>
  );
}
