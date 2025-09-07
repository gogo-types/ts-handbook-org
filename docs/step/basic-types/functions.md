# 함수

## 1. 함수란?

타입스크립트에서 함수는 `Javascript`와 마찬가지로 `가명 함수(named function)`와 `익명 함수(anonymous function)`으로 나뉠 수 있습니다. 이를 통해 API 함수 목록을 작성하거나 일회성 함수를 사용해 다른 함수로 전달해 애플리케이션에 가장 적합한 방법을 찾을 수 있습니다.

```typescript
// 가명 함수
function add(x, y) {
  return x + y;
}

console.log(add(3, 4)); // 7

// 익명 함수
let multiply = function (x, y) {
  return x * y;
};

console.log(multiply(3, 4)); // 12
```

함수는 함수 외부의 변수를 참조할 수 없어, 변수를 `캡쳐(capture)`한다고 합니다. 이것이 어떠한 방식으로 작동하는지 이해하려면 매커니즘이 어떻게 작동하는 지 알아야 합니다.

```typescript
let z = 200;
function addToz(x, y) {
  return x + y + z;
}

console.log(addToz(3, 4)); // 3 + 4 + z
```

## 2. 함수 타입(Function Types)

각 파라미터와 함수 자신의 반환될 타입을 정하고, 타입스크립트는 이러한 반환 문을 보고 반환 타입을 파악할 수 있어 반환 타입을 생략할 수 있습니다.

```typescript
function add(x: number, y: number): number {
  return x + y; // number 추론
}

let Add = function (x: number, y: number): number {
  return x + y; // number 주론
};

function num(x: number, y: number): number {
  return x + y;
}

console.log(add(3, 4)); // 7
console.log(Add(3, 5)); // 8

console.log(num(3.14, 2.4)); // 5.54
```

## 3. 함수 타입 작성하기

함수에 타입을 붙였다면, 이제 함수 타입들로 함수의 전체타입을 정할 수 있습니다.

```typescript
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(myAdd(3, 4));
```

함수의 타입은 매개변수의 타입과 반환 타입이 있으며, 전체 함수 타입을 작성하려며 두 가지의 타입이 필요합니다. 매개 변수 목록처럼 각 매개변수에 이름과 타입을 작성해줍니다.

```typescript
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(myAdd(3, 4));

let mySub: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x - y;
};

console.log(mySub(5, 4)); // 1
```

## 4. 선택적 매개변수(Optional Parameters)

선택적 매개변수는 매개변수를 선택적으로 만들 수 있습니다. `?`를 붙여 사용합니다.

```typescript
function greet(name: string, age?: number) {
  console.log(`Hello ${name}, ${age ?? "unknown"} years old`);
}

greet("Mike"); // age 생략 가능
```

## 5. 기본 매개변수(Default Parameters)

기본 매개변수를 매개변수에 기본값을 설정할 수 있습니다.

```typescript
function isAdd(x: number, y: number, z: number = 3) {
  return x * y + z;
}

console.log(isAdd(5, 4)); // 5 * 4 + 3 = 23
```

## 6. 나머지 매개변수(Rest Parameters)

나머지 매개변수는 매개변수 개수가 유동적일 때 사용하며, 배열 형태로 받아 처리할 수 있습니다.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## 7. 반환 타입(Return Types)

반환 타입은 함수가 반환하는 값 타입을 명시할 수 있고, 명시하지 않아도 추론이 가능하나 명시한다면 안전하게 타입 구현이 가능합니다.

```typescript
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(3, 4)); // 7
```

## 8. 함수 타입 표현식(Function Type Expressions)

함수 타입을 변수에 지정할 수 있으며, 화살표 타입 형태가 일반적인 방식입니다.

```typescript
let AddExpress: (x: number, y: number) => number = (x, y) => x + y;

console.log(AddExpress(5, 4)); // 9
```

## 9. 함수 오버로드(Function Overloads)

함수 오버로드는 같은 함수 이름으로 매개변수 타입이나 개수를 다르게 정의할 때 사용되며 호출 시 Typescript가 적절한 시그니처를 선택해 반영합니다.

```typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any) {
  return a + b;
}

console.log(combine(1, 2)); // 3
console.log(combine("Hello", "World")); // HelloWorld
console.log(combine(3.14, 3.25)); // 6.390000000000001
```
