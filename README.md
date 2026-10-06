# 데일리티켓

## 검색 등록 · 2026-10-06

- Search Console의 해당 도메인 속성에 제출할 주소: https://xn--2n1b71jc1mdmhj3e.com/sitemap.xml
- 현재 공개 페이지는 홈 1개이며, 화면 안의 섹션은 별도 URL로 등록하지 않는다.
- `app/sitemap.ts`: 실제 페이지 목록. 새 페이지가 생기면 여기에도 추가한다.
- `app/robots.ts`: 크롤링 허용과 사이트맵 주소. 대표 도메인은 `app/site-config.ts`를 공통으로 사용한다.
- 제출 시 홈페이지 주소 대신 위 XML 주소 전체를 입력한다. 사이트맵 처리 성공과 실제 검색 색인·순위는 별개다.

착한티켓 골든 마스터의 구조와 반응형 규격을 유지하면서 데일리티켓 전용 팔레트와 에셋으로 재구현한 Next.js 랜딩페이지다.

## 로컬 실행

```powershell
npm install
npm run dev
```

## 핵심 관리 파일

- `app/site-config.ts`: 데일리티켓 브랜드명, 도메인, 전화, 카카오, 색상
- `app/asset-registry.ts`: 전체 이미지 에셋 인덱스
- `app/page.tsx`: 고정 섹션 구조
- `app/globals.css`: 보라티켓 계열 반응형 규격
- `docs/ASSET-MAP.md`: 에셋 교체 절차

## 섹션 순서

헤더 → 히어로 → 전화/카카오 카드 → 진행현황 → WHY → HOW → 취급상품 → 푸터 → 플로팅/모바일 고정 상담.
