// app/page.tsx
  import { Suspense } from "react";
    import ServerSlow from "./components/ServerSlow";
    import ClientSlow from "./components/ClientSlow";
import ClientLazy from "./components/ClientLazy";

export default function Page() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>RSC vs Client Component Streaming SSR</h1>
      <br/>

      {/* 서버 컴포넌트 Streaming */}
      <h2>서버 컴포넌트 Streaming</h2>
      <Suspense fallback={<div>fallBack 대기중</div>}>
        <ServerSlow />
      </Suspense>

      <hr />
      <br/>

      {/* 클라이언트 컴포넌트 Streaming (RSC 내부) */}
      <h2>클라이언트 컴포넌트 Streaming (RSC 내부)</h2>
      <Suspense fallback={<div>fallBack 대기중</div>}>
        <ClientSlow />
      </Suspense>

      <hr />
      <br/>

      <h2>Lazy 로딩 클라이언트 컴포넌트</h2>
      <Suspense fallback={<div>Loading Client Component...</div>}>
        <ClientLazy />
      </Suspense>
    </div>
  );
}
