// components/ClientSlow.tsx
"use client";

import { useEffect, useState } from "react";

export default function ClientSlow() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // 클라이언트에서만 실행되는 코드
    // hydration 이후 2초 뒤 데이터 설정
    const timer = setTimeout(() => {
      setData("✅ 클라이언트 컴포넌트 데이터 렌더 완료");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ color: "red" }}>
      {data ? data : "⏳ 클라이언트에서 데이터 로딩 중..."}
    </div>
  );
}
