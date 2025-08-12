"use client"
import { useEffect } from "react";

export default async function InnerClientComponent(serverProps: {serverProps: string}) {
  useEffect(() => {
    console.log()
  })


  return (
    <div style={{ color: "pink" }}>
      <>
        ✅ 서버 컴포넌트 내부 클라이언트 데이터 렌더 완료 <div style={{color: "orange"}}>{serverProps.serverProps}</div>
      </>
    </div>
  );
}
