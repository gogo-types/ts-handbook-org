# 소개

**TypeScript**는 2012년 10월 1일 웹 페이지의 보조적인 기능을 수행하기 위해 한시적인 언어인 Javascript를 더욱더 커다란 애플리케이션으로 개발하기 위해 TypeScript가 개발되었습니다.

타입스크립트를 사용해 자신이 원하는 타입을 정의하고 프로그래밍하며 자바스크립트 파일로 컴파일이 될 수 있는 기능과 클라이언트 사이드와 서버 사이드를 위해 **Front-Back**통합 개발에 사용될 수 있도록 개발했습니다.

# 🤓 Typescript란?

타입 스크립트는 Microsoft에서 개발한 오픈소스 프로그래밍 언어로 자바스크립트의 슈펴셋(Superset)을 담당하고, 모든 기능을 포함하여 정적 타입(String Typing)을 추가한 언어입니다.

타입 스크립트는 대규모 애플리케이션 환경에서 발생할 수 있는 에러를 미리 방지해,개발 생산성을 높이기 위해 만들어졌으며 브라우저나 Node.js에서는 직접 실행되지 않고, 오직 자바스크립트로 컴파일(트랜스파일)되어 실행됩니다.

# ![이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbNWhBZ%2FbtsMa5n4Sur%2FAAAAAAAAAAAAAAAAAAAAABj3Fdw_aipeo4yIsUpmMKijBl643ZflGVBPP6hmR60x%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1759244399%26allow_ip%3D%26allow_referer%3D%26signature%3D8vK9aaA95%252F2p7rZdXyE1RGX49d8%253D)

타입 스크립트와 자바스크립트의 차이점은 타입 시스템, 에러 검출 시점, 개발 생산성, 학습곡선이 있습니다.

1. **타입 시스템**

   - **Typescript**: 정적 타입 시스템 지원(변수,함수,객체 등, 타입을 명시)
   - **Javascript**: 동적 타입시스템(런타임에서 타입이 결정)

2. **에러 검출 시점**

   - **Typescript**: 컴파일 단계에서 타입 관련 에러를 미리 발견할 수 있다.
   - **Javascript**: 런타임에서 에러가 발생할 가능성이 높음

3. **개발 생산성**
   - **Typescript**: IDE의 자동 완성, 코드 탐색, 리팩토링 지원
   - **Javascript**: 타입 정보가 없어 도구의 지원 제한적
4. **학습 비교**
   - **Typescript**: 타입 문법이 다양함
   - **Javascript**: 비교적 간단하고 진입장벽이 낮음

# ✅ **TypeScript의 장점**

타입스크립트는 타입을 명시함으로써 런타임 에러를 줄이고 버그를 초기에 발견할 수 있습니다. 즉 함수의 매개변수나 반환값에 타입을 지정해주면, 잘못된 타입 사용을 방지할 수 있습니다. 또 IDE(Visual Studio Code 등)와 같이 자동 완성, 코드 탐색, 리팩토링에 유용합니다.

타입스크립트는 현재까지도 여러 개발자들이 협엽하거나 코드베이스가 커질때, 타입스크립트로 코드의 가독성과 유지보수성을 높여주며, 기존 자바스크립트 프로젝트에 타입스크립트를 조금씩 적용해나가면서 유지보수에 도움이 됩니다.

타입스크립트는 React, Node.js, Next.js 등 다양한 프론트엔드 개발 언어에도 적용이됩니다.

# ✅ **TypeScript 세팅하기**

타입스크립트는 Node.js 환경에서 적용되는 언어로 기존의 Node.js를 설치했다면 바로 타입스크립트를 사용할 수 있습니다. 아래 명령어로 node와 npm의 버전을 출력합니다.

```bash
node -v
npm -v
```

Node.js를 설치했다면 다시 터미널에서 새로운 Node 프로젝트를 생성합니다.

```bash
npm init -y && yarn init -y
```

- 타입스크립트 설치

```bash
npm install typescript --save-dev && yarn add -D typescript
```

- 타입스크립트 컴파일러(tsc)가 설치되었는지 확인

```bash
npx tsc -v
// version 0.0.0
```

설치가 완료되었다면 타입스크립트 프로젝트 설정 파일인 tsconfig.json 파일을 다음 명령어로 생성해줍니다.

```bash
npx tsc --init
```

- tsconfig.json 파일은 타입스크립트 컴파일 옵션을 정의하는 파일입니다.
  - outDir: 컴파일된 파일 출력 경로
  - target: 자바스크립트 버전

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "include": ["src/**/*"] // 컴파일 할 파일 경로
}
```

```bash
typescript-bloging/
├── dist/          // 컴파일된 자바스크립트 파일이 저장될 폴더
├── src/           // 타입스크립트 소스 코드
│   └── index.ts   // 예제 파일
├── package.json
└── tsconfig.json
```

전체적인 프로젝트 폴더구조는 다음과 같습니다. 먼저 프로젝트 폴더내에 src 폴더를 만들어주고 그 안에 index.ts 파일을 생성해서 간단한 코드를 작성해보겠습니다.

```typescript
// src/index.ts
function HelloWorld(name: string): string {
  return `Hello. ${name}!`;
}

console.log(world("TypeScript"));
```

위 코드를 작성하고 타입스크립트를 실행 하려면 다음과 같은 명령문을 입력해줍니다.

```bash
npx tsc
```

```javascript
/* dist/index.js 가 생성된다 */
"use strict";
function world(name) {
  return `Hello. ${name}!`;
}
console.log(world("TypeScript"));
```

위 명령문을 실행하면 dist 폴더에 index.js라는 파일이 생성됩니다. 기존의 ts파일을 js 파일로 변환 시켜주었습니다. 이제 이 js파일을 실행하려면 다음과 같은 명령어를 입력합니다.

```bash
node dist/index.js
```

- 출력 결과

```bash
Hello. TypeScript!
```

# ✅ **ts-node로 간편하게 실행하기**

매번 node를 입력해 실행하는 것보다 명령어 하나로 실행하는 것이 편하다고 생각됩니다. 그래서 이 것을 가능하게 하는것이 바로 ts-node 입니다.

```bash
npm install ts-node --save-dev && yarn add -D ts-node
```

- ts-node로 타입스크립트 실행

```bash
npx ts-node src/index.ts
```

- package.json에 명령어를 추가한 후 짧게 실행

```json
// package.json에 "scripts" 추가
  "scripts": {
    "dev": "npx ts-node src/index.ts"
  },
  "devDependencies": {
    "typescript": "^5.7.3"
  },
  "dependencies": {
    "ts-node": "^10.9.2"
  }
}
```

```sh
yarn dev && npm dev
```
