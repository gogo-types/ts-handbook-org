# 기본적인 타입들

## 1. 불리언 타입(Boolean)

Boolean 타입은 타입스크립트의 가장 기본적인 데이터 타입이며 참과 거짓을 정의할 때 사용합니다.

```typescript
let isTrue: boolean = true;
console.log(isTrue);
```

## 2. 숫자(Number)

타입스크립트는 자바스크립트와 같이 모든 숫자가 부동 소수점 방식이며, 부동 소수점에는 **number**라는 타입이 붙혀집니다. Typescript에는 16진수, 10진수 리터럴에 더불어, ECMAScript 2015에서 소개된 2진수, 8진수 리터럴도 지원합니다.

```typescript
let eleven: number = 11;
let hexresult: number = 0x0042;
let binary: number = 0b1010;
let octal: number = 0o774;

console.log(eleven, hexresult, binary, octal);
```

## 3. 문자열(String)

웹 페이지, 서버 같은 프로그램을 JS로 작업할 때 기본적으로 텍스트 데이터를 다루는 작업이 필요한데 ts에서는 텍스트 데이터 타입을 string으로 표현합니다. JS처럼 큰 따옴표(`''`)나 작은 따옴표(`'`)
로 문자열 데이터를 감싸데 사용합니다.

```typescript
let color: string = "yellow";
color = "green";

console.log(color); // green
```

또한 템플릿 문자열을 사용하면 여러 줄에 걸쳐 문자열을 작성하고, 표현식을 포함시킬 수 있습니다. 문자열은 백터/백쿼드 문자로 감싸지며 `${expr}`과 같은 형태로 표현할 수 있습니다.

```typescript
let city: string = "London";
let from: string = "England";
let section: string = `${city} capital of ${from}`;
console.log(section);
```

## 4. 배열(Array)

배열 타입은 두 가지 방법이 있으며, 첫 번째는 배열 요소들을 나타내는 타입 뒤에 빈 배열(`[]`)을 쓰는 것입니다.

```typescript
let list: string[] = ["Post", "Create", "Update", "Delete"];
console.log(list); // 기본 출력
```

두 번째 방법은 재네릭 배열 방법입니다.

```typescript
let list: string[] = ["Post", "Create", "Update", "Delete"];

console.log(list); // 기본 출력

console.log(list[1]); // 배열 접근

// generic
let spicy = "매운 맛";
let meek = "순한 맛";

let noodles = [`진라면 ${meek}`, `진라면 ${spicy}`, "삼양라면"];
console.log(noodles);
```

## 5. 튜플(Tuple)

튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현할 수 있습니다, 단 요소들의 타입이 모두 같을 필요는 없습니다.

```typescript
// 튜플 타입 선언
let x: [string, number, boolean];

// 초기화
let x: [string, boolean];

// 초기화
x = ["hello", true]; // true
console.log(x); // [ 'hello', true ]

// 요소 접근 시
console.log(x[0].substring(2)); // true
// console.log(x[1].substring(3)); // "boolean" is not!
```

## 6. 열거(Enum)

열거형은 C# 같은 언어처럼 값의 집합에 더 나은 이름을 붙일 수 있습니다

```typescript
enum Juice {
  Orange,
  Strawberry,
  Banana,
}
let b: Juice = Juice.Strawberry;

console.log(b); // 1
```

기본적으로 enum은 0부터 시작하며 맴버들에게 번호를 매깁니다, 맴버 중 하나의 값을 수동으로 설정해 번호를 수정할 수 있습니다

```typescript
enum Color {
  Red = 1,
  Blue = 2,
  Green,
}

let ColorName: string = Color[3]; // 3
console.log(ColorName); // 문자열 'Blue' 출력
```

## 7.Any

애플리케이션을 생성할 때, 알지 못하는 타입을 표현해야 할 수 있습니다. 이 값들을 사용자로부터 받은 데이터나 서드파티 라이브러리 같은 동적 컨텐츠에서 불러올 수 있습니다. 이 경우 타입 검사 없이 그 값들을 가져오기 위해서 Any 타입을 사용합니다.

```typescript
let allday: any = 4;
allday = new Date(2025, 9, 3);
allday = false;
allday = "Hello";
```

any 타입은 기존에 Javascript 환경에 작업할 수 있는 강력한 방법으로, 컴파일 중에 점진적으로 타입 검사를 하지 않을 수 있습니다. Object로 선언한 변수들은 오직 어떤 값이든 그 변수에 할당할 수 있게 해주나 실제로 메서드가 존재하더라도 임의호출은 불가능합니다.

```typescript
let notSure: any = 4;
notSure.ifItExists(); // true 런타임에 존재할 확률 O
notSure.toFixed(); // true 존재하나 컴파일러는 검사 X

let prettySure: Object = 4;
// prettySure.toFixed(); // 오류: 'toFixed'는 'Object' 에 존재 X
```

또한 any 타입은 일부만 알고 전체를 알지 못할 때 유용한데, 예를 들어 다른 타입이 섞인 배열을 직접 다룰 수 있습니다.

```typescript
let sos: any[] = [1, true, "free"];

sos[1] = 100;

console.log(sos[1]); // 100
```

## 8.Void

void는 말 그대로 어떤 타입도 존재할 수 없다를 나타내며, any의 반대 타입입니다. void는 보통 함수에 반환 값이 없을 경우 반환 타입을 표현하기 위해 사용합니다.

```typescript
function warnUSer(): void {
  console.log("Hello This is user Message");
}

warnUSer(); // Hello This is user Message
```

void에 타입 변수를 선언하는 것은 유용하지 않는데, 이 유는 변수의 null (`--strictNullChecks`를 사용하지 않을 떄를 가정)만 해당하며, `undefined`만 할당이 가능합니다.

```typescript
let unusable: void = undefined;

unusable = null; // 성공 `--strictNullChecks` 사용 해제시
```

## 9. Null nad Undefined

TypeScript는 `undefined`와 `null` 둘 다 각각 자신의 타이름으로 사용합니다. `void` 처럼 그 자체로 유용한 경우는 거의 없습니다.

```typescript
let un = (undefined = undefined);
let nu = (null = null);
```

## 10. Never

never 타입은 절대 발생없는 타입으로, 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 사용합니다.
변수 또한 타입 가드에 의해 아무 타입도 얻지 못하게 좁혀지면 never 타입을 얻게 될 수 있습니다.

```typescript
// never를 반환하는 함수는 함수에 마지막에 도달
function error(message: string): never {
  throw new Error(message);
}

// 반환 타입이 never로 추론
function fail() {
  return error("Something Failed!");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 있음
function infiniteLoop(): never {
  while (true) {}
}
```

## 11. 객체(Object)

`object`는 원시 타입이 아닌 타입을 나타내며, 예를 들어 `number`,`string`,`boolean`,`bigInt`,`symbol`,`null` 또는 `undefined`가 아닌 나머지를 의미합니다. `object` 타입을 쓰면 `Object.create`같은 API가 더 잘나타납니다.

```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 오류
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

---

## 12. 타입 단언 (Type assertions)

타입 단언(Type assertions)은 컴파일러에게 `내가 뭘 하고 있는지 알고 있어`라고 말하는 것과 같습니다. 타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하나, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않습니다. 이는 런타임에 영향을 미치지 않으며, 온전히 커파일러만 이를 사용합니다.

타입 스크립트는 개발자가 필요한 어떤 특성 검사를 수행했다고 인지합니다. 타입 단언에는 두 가지 방법이 있습니다.

```typescript
let somValue: any = "this is string";
let strLength: number = (<string>somValue).length;
```

다른 하나는 as 문법입니다.

```typescript
let someValue: any = "this is string";
let strLength: number = (someValue as string).length;
```
