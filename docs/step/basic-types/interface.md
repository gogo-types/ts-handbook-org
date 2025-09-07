# 인터페이스

## 1. 첫 번째 인터페이스(Our First Interface)

인터페이스는 어떠한 방식으로 동작하는 지 간단하게 타입을 짜서 확인할 수 있습니다.

```typescript
function printInt(IntObj: { Int: string }) {
  console.log(IntObj.Int);
}

let mySize = { size: 10, Int: "Size 10 Interface" };
printInt(mySize); // Size 10 Interface
```

- 타입 검사는 `PrintInt` 호출을 확인
- `PrintInt`는 string 타입의 `Int`를 갖는 여러 객체를 하나의 매개변수로 가짐
- 실제로 많은 프로퍼티를 가지고 있으나, 컴파일러는 최소 필요한 프로퍼티가 있는지와 타입이 잘 맞는지만 검사함

```typescript
interface LabeledValue {
  Int: string;
}

function LabelInt(IntObj: LabeledValue) {
  console.log(IntObj.Int);
}

let myLabel = { size: 10, Int: "Size 20 Inter" };
printInt(myLabel); // Size 20 Inter
```

- 문자열 타입의 Label 프로퍼티 하나를 가진다는 것을 의미
- 중요한 것은 형태 뿐이며, 함수에 전달된 객체가 나열된 요구 조건을 충족 시 허용
- 타입 검사는 프로퍼티들의 순서를 요구하지 않고, 단지 인터페이스가 요구하는 프로퍼티들이 존재하는 지 프로퍼티들이 요구하는 타입을 가졌는지만 검사

## 2. 선택적 프로퍼티 (Optional Properties)

인터페이스의 모든 프로퍼티가 필요한 것은 아니며, 어떠한 조건에서만 존재하거나 아예 없을 수 도 있음, 선택적 프로퍼티들은 객체 안 몇 개의 프로퍼티만 채워 함수에 전달하는 패턴을 만들 대 유용합니다.

```typescript
interface SquareSetting {
  color?: string;
  width?: number;
  height?: number;
}

function Squarerate(config: SquareSetting): { color: string; area: number } {
  let newSquare = { color: "green", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = Squarerate({ color: "red" });

console.log(mySquare); // { color: 'red', area: 100 }
```

선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성되고, 선언 안에서 프로퍼티 끝에 `?`를 붙여 사용합니다. 선택적 프로퍼티의 이점은 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서, 사용 가능한 속성을 기술합니다. 예를 들어 Squarerate 안의 color 프로퍼티의 이름을 잘못 입력 시 에러가 발생합니다.

```typescript
interface SquareSetting {
  color?: string;
  width?: number;
  height?: number;
}

function Squarerate(config: SquareSetting): { color: string; area: number } {
  let newSquare = { color: "green", area: 100 };
  if (config.color) {
    // Error : Property 'clor' doese not exist
    newSquare.color = config.colr;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = Squarerate({ color: "red" });

console.log(mySquare); // { color: 'red', area: 100 }
```

## 3. 읽기전용 프로퍼티(Readonly Properties)

일부 프로퍼티들이 객체가 처음 생성될 때만 수정이 가능합니다. 프로퍼티 이름 앞에 `readonly`를 붙여넣어 지정할 수 있습니다.

```typescript
interface Move {
  readonly Up: string;
  readonly Down: string;
}
```

객체 리터럴을 할당해 Move를 생성하고, 할당 후 Up과 Down을 수정할 수 있습니다.

```typescript
interface Move {
  readonly Up: string;
  readonly Down: string;
}

let move: Move = { Up: "Up", Down: "Down" };
console.log(move.Up); // Up
console.log(move.Down); // Down
console.log(move.Left); // Error
```

타입스크립트에서 `모든 변경 메서드(Multating Methods)`가 제거된 `Array<T>`와 동일한`ReadOnlyArray<T>`타입을 제공합니다. 그래서 생성 후 배열을 변경하지 않음을 보장합니다.

```typescript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = 4;
ro[0] = 24; // error
ro.push(5); // error
ro.length = 200; // error
a = ro; // error
```

`ReadOnlyArray`를 일반 배열에 재할당은 불가능하며, `타입 단언(type assertion)`으로 오버라이드하는 것은 가능합니다.

```typescript
a = ro as number[];
```

`readonly`와 `const` 중 어떤 것을 사용할 지는 변수와 프로퍼티 중 어디에 사용할 지 생각해보아야 합니다. 변수는 `const`를 사용하고 프로퍼티는 `readonly`를 사용합니다.

## 4. 초기 프로퍼티 검사 (Excess Property Checks)

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "green", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare1 = createSquare({ color: "red", width: 100 });
console.log(mySquare1);
```

`createSquare`의 매개변수가 `color` 대신 `colour`로 전달된 것에 유의하고, 이 경우 Javascript에서 오류가 발생하지 않습니다. `width`프로퍼티는 있지만, `color` 프로퍼티는 없고, 추가적인 colour 프로퍼티는 이상이 없기 때문에, 이 프로그램은 올바르게 작성되었다고 할 수 있습니다.

하지만 `Typescript`내에서는 오류가 발생할 수 있는데, 객체 리터럴은 다른 변수에 할당할 때나 인수로 전달할 때, 특별한 처리를 받고, 초과 프로퍼티 검사(`excess property checking`)를 받습니다. 만약 객체 리터럴이 `대상 타입(target-type)`이 갖고 있지 않은 프로퍼티를 갖고 있으면, 에러가 발생합니다.

```typescript
let mySquare = createSqure({ width: 100, opacity: 0.5 } as SquareConfig);
```

특별한 경우, 추가 프로퍼티가 있음을 확신한다면, `문자열 인덱스 서명(string index signature)`을 추가하는 것이 더 나은 방법입니다. 만약 `SquareConfig color`와 `with 프로퍼티`를 위와 같은 타입으로 갖고 있고, 또한 다른 프로퍼티를 가질 수 있다면 다음과 같이 정의합니다.

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

객체를 다른 변수에 할당하는 방법도 있는데 `squareOptions`가 추가 프로퍼티 검사를 받지 않기 때문에, 컴파일 상 에러를 주지 않습니다.

```typescript
let squaureOptions = { colour: "red", width: 100 };

let mySquare = createSqure(squaureOptions);
```

`sqaureOptions`와 `sqaureConfig`사이에 공통 프로퍼티가 있는 경우에만 위와 같은 방법을 사용할 수 있습니다. 하지만 변수가 공통 객체 프로퍼티가 없다면 에러가 발생합니다.

```typescript
function createSquare(config: SquareConfig): { color: string; area: number } {
  //   let newSquare = { color: "green", area: 100 }; // 없을 시 에러
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let squareOptions = { color: "red", width: 100 };
let mySquare1 = createSquare(squareOptions);
console.log(mySquare1);
```

## 5. 함수 타입(Function Types)

인터페이스에 `Javascript`객체를 가질 수 있는 넓은 범위의 형태를 기술할 수 있습니다. 프로퍼티로 객체를 기술하는 것 외, 인터페이스는 함수타입을 설명할 수 있습니다. 인터페이스로 함수 타입을 기술하기 위해, 인터페이스에 호출 서명을 전달해 줍니다.

```typescript
interface SearchFunction {
  (source: string, subString: string): boolean;
}
```

한번 정의되면, 함수 타입 인터페이스는 다른 인터페이스처럼 사용할 수 있습니다. 여기서 함수 타입의 변수를 만들어 주고 같은 타입의 함수값으로 할당하는 방법을 보여줍니다.

```typescript
let Searching: SearchFunction;
Searching = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
```

올바른 함수 타입 검사를 위해서 매개변수의 이름이 같을 필요는 없습니다

```typescript
let mySearch: SearchFunction;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```

함수 매개별수들은 같은 위치에 대응하는 매개변수끼리 한번에 하나씩 검사합니다. 만약 타입을 전혀 지정하지 않고 싶다면, `SearchFunc` 타입의 변수로 함수값을 할당되었기 때문에 `Typescript`의 `문맥상 타이핑 (contextual typing)`이 인수 타입을 추론할 수 있습니다.

```typescript
let mySearch: SearchFunction;
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
```

함수 표현식이 숫자나 문자열을 반환했다면, 타입 검사는 반환 타입이 SearchFunc 인터페이스에 정의된 반환 타입과 일치하지 않다면 에러가 발생합니다.

```typescript
let mySearch: SearchFunction;

// error Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunction'.
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
```

## 6. 인덱서블 타입(Indexable Types)

인덱서블 타입은 인덱싱 할 대 해당 반환 유형과 함께 객체를 인덱싱하는 데 사용할 수 있는 타입을 기술하는 인덱스 시그니처(`Index Signiture`)를 가지고 있습니다.

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Feed"];

let myStr: string = myArray[0];
```

위에서 인덱스 서명이 있는 `StringArray` 인터페이스가 있습니다. 이 인덱스 서명은 StringArray가 number로 `색인화(indexed)`되면 string을 반환할 것을 나타냅니다. 인덱스 서명을 지원하는 타입에는 두 가지가 있습니다.

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Feed"];

let myStr: string = myArray[0];

class Animal {
  name: string;
}

class Dog extends Animal {
  bread: string;
}

// 오류: 숫자형 문자열로 인덱싱 하면 완전히 다른 타입의 Animal을 얻게됨
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}
```

문자열 인덱스 시그니쳐는 `사전` 패턴을 기술하는데 강력한 방법이지만, 모든 프로퍼티들이 반환 타입과 일치하도록 강제하고 `obj.property`가 `obj ["property"]`로도 이용 가능함을알려주기 때문입니다.

```typescript
interface NumberDictionary {
  [index: string]: number;
  length: number; // Success length is number
  name: string; // Fail, 'name' is type not index
}
```

하지만 인덱스 시그니처가 프로퍼티 타입들의 합집합이라면 다른 타입의 프로퍼티들도 허용할 수 있습니다.

```typescript
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // Success, length is number
  name: string; // Success, name is String
}
```

마지막으로, 인덱스의 할당을 막기 위해 인덱스 시그니처를 읽기 전용으로 만들 수 있습니다.

```typescript
let NameArray: ReadonlyStringArray = ["Robe", "Chick"];
myArray[2] = "Mollory"; // Error;
```

인덱스 시그니처가 읽기 전용이기 때문에 myArray [2]의 값을 할당할 수 없습니다.

### 클래스 타입 인터페이스 구현하기(Class Types Interface)

클래스가 특정 계약(contract)을 충족시키도록 명시적으로 강제하는 C#과 Java와 같은 언어에서 인터페이스를 사용하는 가장 일반적인 방법은 TypeScript에서도 가능합니다.

```typescript
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
```

setTime처럼 클래스에 구현된 메서드를 인터페이스 안에서도 기술할 수 있습니다.

```typescript
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }

  constructor(h: number, m: number) {}
}
```

인터페이스는 클래스의 public과 private 모두보다는, public을 기술합니다. 그래서 클래스 인스턴스의 private에서는 특정 타입이 있는지 검사할 수 없습니다.

## 7. 클래스의 스태틱과 인스턴스의 차이점(Diffenrence between the static and instance sides of classes)

클래스와 인터페이스를 다룰 때, 클래스는 두 가지 타입을 가진다는 것을 기억하는 게 좋습니다. 스태틱 타입과 인스턴스 타입입니다. 생성 시그니처 (construct signature)로 인터페이스를 생성하고, 클래스를 생성하려고 한다면, 인터페이스틀 implements 할 때, 에러가 발생하는 것을 확인할 수 있습니다.

```typescript
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
```

클래스가 인터페이스를 implements 할 때, 클래스의 인스턴스만 검사하기 때문입니다. 생성자가 스태틱이기 때문에, 이 검사에 포함하지 않습니다. 대신 클래스의 스태틱 부분을 직접적으로 다룰 필요가 있습니다.

```typescript
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

createClock의 첫 번째 매개변수는 createClock(AnalogClock, 7, 32) 안에 ClockConstructor 타입으로, AnalogClock이 올바른 생성자 시그니처를 갖고 있는지 검사합니다. 또 다른 방법은 클래스 표현을 사용하는 것입니다.

## 8. 인터페이스 확장하기 (Extending Interfaces)

클래스처럼, 인터페이스들도 확장(extend)이 가능합니다. 이는 한 인터페이스의 멤버를 다른 인터페이스에 복사하는 것을 가능하게 해 주고, 인터페이스를 재사용성 높은 컴포넌트로 쪼갤 때, 유연함을 제공합니다.

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

console.log(square);
```

인터페이스는 여러 인터페이스를 확장할 수 있어, 모든 인터페이스의 조합을 만들어낼 수 있습니다.

```typescript
interface Shape {
  color: string;
}

interface PenSide {
  penSide: number;
}

interface Square extends Shape, PenSide {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penSide = 20;

console.log(square);
```

## 9. 하이브리드 타입(Hybrid Types)

인터페이스는 실제 JavaScript 세계에 존재하는 다양합 타입들을 기술할 수 있습니다.

```typescript
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

써드파티 (3rd-party) Javascript와 상호작용 시, 타입의 형태를 완전히 기술하기 위해 위와 같은 패턴을 사용해야 합니다.

## 10. 클래스를 확장한 인터페이스(interfaces Extending Classes)

인터페이스 타입이 클래스 타입을 확장하면, 클래스의 멤버는 상속받지만 구현은 상속받지 않습니다. 이것은 인터페이스가 구현을 제공하지 않고, 클래스의 맴버 모두를 선언한 것과 마찬가지입니다. 인터페이스는 심지어 기초 클래스의 private

과 protected 멤버도 상속받습니다. 이것은 인터페이스가 private 혹은 protected 멤버를 포함한 클래스를 확장할 수 있다는 뜻이고, 인터페이스 타입은 그 클래스나 하위클래스에 의해서만 구현될 수 있습니다.

이는 거대한 상속계층을 가지고 있을 때 유용하지만, 특정 프로퍼티를 가진 하위클래스에서만 코드가 동작하도록 지정하는데도 유용합니다. 하위 클래스는 기초클래스에서 상속하는 것 외 관련이 있을 필요가 없습니다.

```typescript
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

//  Error: Property 'state' is missing in type "Image"
class Image implements SelectableControl {
  private state: any;
  select() {}
}

class Location {}
```

위 예제에 SelectableControl은 private state 프로퍼티를 포함해, Control의 모든 멤버를 가지고 있습니다, state는 private 맴버이기 때문에, SelectableControl을 구현하는 것은 Control의 자식에게만 가능합니다. Control의 자식만 같은 선언에서 유래된 state private 맴버를 가질 수 있기 때문이며, private 멤버들이 호환되기 위해 필요합니다.

Control 클래스 안에서 SelectableControl의 인스턴스를 통해 state private 멤버에 접근할 수 있습니다. SelectableControl은 select 메서드를 가진 Control과 같은 역할을 합니다. Button과 TextBox 클래스들은 SelectableControl의 하위타입이지만 ( Control을 상속받고, state 메서드를 가지기 때문에) Image와 Location 클래스는 아닙니다.

---

# 참고 자료

[TyppScript 한글 문서](https://typescript-kr.github.io/pages/interfaces.html)
