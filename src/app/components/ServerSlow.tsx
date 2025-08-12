import InnerClientComponent from "./InnerClientComponent";
import NoPropsInnerClientComponent from "./NoPropsInnerClientComponent";

// components/ServerSlow.tsx
export default async function ServerSlow() {
  // 서버에서 3초 지연
  await new Promise((resolve) => setTimeout(resolve, 300));
  const propsReturn = await new Promise((resolve) => setTimeout(() => resolve("서버에서 온 데이터"), 300));
  return (
    <div style={{ color: "green" }}>
      ✅ 서버 컴포넌트 데이터 렌더 완료
      <InnerClientComponent serverProps={propsReturn as string}/>
      <NoPropsInnerClientComponent/>
    </div>
  );
}
