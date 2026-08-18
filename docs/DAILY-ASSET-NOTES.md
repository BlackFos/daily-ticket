# 데일리티켓 브랜드 에셋 제작 기록

## 히어로 캐릭터

- 제작 방식: 내장 ImageGen의 기존 이미지 정밀 편집
- 편집 대상: 착한티켓 `hero-phone-brand.png`
- 최종 파일: `public/assets/common/daily-hero-v2.png`
- 규격: 398×422 PNG
- 유지 항목: 휴대폰 구도, 상품권 로고, 해시태그, 화분, 투명 배경
- 변경 항목: 둥근 얼굴, 짧은 단정한 헤어, 민트 재킷, 크림 셔츠, 작은 코랄 포인트

### 최종 프롬프트

```text
Use case: precise-object-edit
Asset type: transparent-background landing-page hero illustration, exact canvas and composition preserved
Primary request: Change only the male character standing on the left into the Daily Ticket brand character: a friendly young Korean man with a softer round face, short neat side-parted dark brown hair, warm gentle smile, mint-green casual jacket over a cream shirt, and a small coral accent on the phone case. Keep his pose, body scale, position, hand placement, and flat vector illustration style nearly identical.
Color palette: mint #0F766E and #CCFBF1, cream #FFF8E7, tiny coral #FB7185 accent.
Hard invariants: preserve the entire smartphone, all screen graphics, all Korean and English text, logos, phone proportions, plant composition, transparency, canvas size, and every non-character pixel as closely as possible. Do not add or remove objects. Do not generate new text. No watermark.
```

## 재색상 자동화

`node scripts/recolor-brand-assets.mjs`를 실행하면 보라티켓 기준 HOW·WHY 에셋에서 데일리 민트 톤 최종본을 다시 생성한다.
`node scripts/remove-checkerboard-background.mjs`는 생성 결과의 바깥 체크무늬만 연결 영역 기준으로 제거해 실제 알파 PNG를 만든다.

## 정확한 글자 처리

로고와 네이버 검색 배너의 한글은 생성형 이미지에 맡기지 않고 SVG 텍스트로 작성했다. 페이지 본문은 로컬 Pretendard Variable을 사용한다.
