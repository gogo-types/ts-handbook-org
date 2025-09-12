# 리터럴 타입

## 📖 1. 리터럴 타입?

**리터럴 타입(Literal Types)** 이란 Typescript에서 특정 값만을 가지는 타입을 정의해주는 기능으로, 구체적이고 제한적인 타입을 만들 수 있습니다. 리터럴 타입에는 문자열, 숫자, 불리언 등 다양한 기본 타입을 적용할 수 있습니다.

---

## 📖 2. 리터럴 타입 종류

### 🚀 문자열 리터럴 타입

**문자열 리터럴 타입(String Literal Types)** 은 문자열 값만을 허용하는 타입입니다.

```typescript
type MoveMent = "Attack" | "Defend" | "Exit";

function Literal(direction: MoveMent) {
  console.log(`You chose to ${direction}`);
}

Literal("Attack"); // Valid
Literal("Defend"); // Valid
Literal("Exit"); // Valid
// Literal("Run"); // Error: Argument of type '"Run"' is not assignable to parameter of type 'MoveMent'.
```

### 🚀 숫자형 리터럴 타입

**숫자형 리터럴 타입(Number Literal Types)** 은 숫자 값만을 허용하는 타입입니다.

```typescript
type statusCode = 200 | 400 | 404 | 500;

function response(code: statusCode) {
  console.log(`상태 코드: ${code}`);
}

response(200); // Valid
response(400); // Valid
// response(5000); // Error: Argument of type '5000' is not assignable to parameter of type 'statusCode'.
```

### 🚀 불리언 리터럴 타입

**불리언 리터럴 타입(Boolean Literal Types)** 은 참(true) 또는 거짓(false)만을 허용하는 타입입니다.

```typescript
type isActive = true | false;

function CheckStatus(status: isActive) {
  console.log(`Status is ${status}`);
}

CheckStatus(true); // Valid
CheckStatus(false); // Valid
// CheckStatus("true"); // Error: Argument of type '"true"' is not assignable to parameter of type 'isActive'.
```

### 🚀 객체형 리터럴 타입

**객체형 리터럴 타입(Object Literal Type)** 은 객체의 속성에 대해 정의할 수 있습니다.

```typescript
type Pack = {
  juice: "apple" | "strawberry" | "banana";
  package: "small" | "medium" | "Large";
};

const pickA: Pack = { juice: "apple", package: "Large" };

console.log(pickA); // { juice: 'apple', package: 'Large' }
```

---

## 📖 3. 리터럴 타입과 유니온 타입

리터럴 타입은 유니온 타입과 함께 사용되어 여러 값들을 허용할 수 있습니다.

```typescript
type StarCraft = "zerg" | "terran" | "protoss";

function play(select: StarCraft) {
  console.log(`You selected: ${select}`);
}

play("zerg"); // Valid
play("terran"); // Valid
play("protoss"); // Valid
// play("orc"); // Error: Argument of type '"orc"' is not assignable to parameter of type 'StarCraft'.
```

---

## ✅ 요약

- 리터럴 타입을 활용해 API 응답 처리, 상태 관리, 이벤트 핸들링 등 유용하게 사용 가능
- 이를 통해 코드의 안정성과 예상치 못한 에러를 방지
- **Typescript**에서 리터럴 타입은 특정 값만을 허용하는 타입을 정의
- 더 안전하고 직관적인 코드를 작성해 타입에 맞게 리터럴 활용
