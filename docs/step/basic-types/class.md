# 클래스

## 1.클래스(Class)와 상속(Inheritance)이란?

클래스는 상속(Inheritance)을 통해 새로운 클래스를 만들 수 있습니다.

```typescript
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  berk() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Fido");
dog.berk(); // Output: Fido is barking.
```

## 2.접근 지정자(Access Specifier)

- `public`는 모든 접근이 가능한 클래스입니다.
- `private`는 생성자에서만 접근할 수 있는 클래스입니다.
- `protected`는 생성자에서만 접근할 수 있는 클래스입니다.

```typescript
class Spc {
  public publicProperty: string;
  private privateProperty: string;
  protected protectedProperty: string;

  constructor() {
    this.publicProperty = "I am public";
    this.privateProperty = "I am private";
    this.protectedProperty = "I am protected";
  }

  showPrivate() {
    console.log(this.privateProperty);
  }
}

const example = new Spc();
console.log(example.publicProperty); // Output: I am public
example.showPrivate(); // Output: I am private
// console.log(example.privateProperty); // 에러 발생 이유: privateProperty는 private으로 선언되어 있기 때문에 클래스 외부에서 접근할 수 없습니다. 따라서 example.privateProperty에 접근하려고 하면 에러가 발생합니다.
```

## 3. ECMAScript 비공개 필드(ECMAScript Private Fields)

ECMAScript 비공개 필드는 `#` 기호를 사용해 접근할 수 있는 필드를 선언합니다.

```typescript
class ECMAScript {
  #privateField: string;

  constructor() {
    this.#privateField = "I am private";
  }

  getPrivateField() {
    return this.#privateField;
  }
}

const e = new ECMAScript();
console.log(e.getPrivateField()); // Output: I am private
// console.log(e.#privateField); // 에러 발생 이유: #privateField는 private으로 선언되어 있기 때문에 클래스 외부에서 접근할 수 없습니다. 따라서 e.#privateField에 접근하려고 하면 에러가 발생합니다.
```

## 4. 읽기 전용 지정자(read-only specifier)

readonly 키워드를 사용해 읽기 전용 지정자를 선언합니다.

```typescript
class ReadOnly {
  readonly readonlyProperty: string;

  constructor(name: string) {
    this.readonlyProperty = name;
  }
}

const readonly = new ReadOnly("James");

console.log(readonly.readonlyProperty); // Output: James
// console.log(readonly.readonlyProperty = "John"); // 에러 발생 이유: readonlyProperty는 readonly로 선언되어 있기 때문에 값을 변경할 수 없습니다. 따라서 readonly.readonlyProperty에 새로운 값을 할당하려고 하면 에러가 발생합니다.
```

## 5. 매개변수 프로퍼티(Parameter Property)

생성자와 매개변수에 접근 지정자를 붙이면 자동적으로 필드를 생성합니다.

```typescript
class ParameterProperty {
  constructor(
    public name: string,
    private age: number,
  ) {}
}

const person = new ParameterProperty("Alice", 30);
console.log(person.name); // Output: Alice
// console.log(person.age); // 에러: 'age'는 private이므로 클래스 외부에서 접근할 수 없습니다.
```

## 6. 접근자(Getter and Setter)

접근자는 프로퍼티의 getter와 setter를 정의하는 방법입니다.

```typescript
class GetterSetter {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(newValue: number) {
    this._value = newValue;
  }
}

const accessor = new GetterSetter(10);
console.log(accessor.value); // Output: 10
accessor.value = 20;
console.log(accessor.value); // Output: 20
```

## 7. 전역 프로퍼티(Static Property)

전역 프로퍼티는 클래스의 인스턴스에 접근 할 수 있는 프로퍼티로, 일반적으로 static 메서드를 사용합니다.

```typescript
class StaticProperty {
  static staticProperty: string = "static property value";
}

console.log(StaticProperty.staticProperty); // Output: "static property value"
```

## 8. 추상 클래스(Abstract Class)

추상 클래스는 abstract 키워드를 사용하여 생성자에 필요한 매개변수를 정의합니다. 자식 클래스에서 상속되는 메서드를 정의할 때 abstract 키워드를 사용하여 이 메서드를 구현해야 합니다.

```typescript
abstract class AbstractClass {
  abstract method(): number;
}

class Circle extends AbstractClass {
  constructor(private radius: number) {
    super();
  }

  method() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.method()); // Output: 78.53981633974483
```

## 9. 고급 기법

- **생성자 함수**: 생성자 내 필요한 초기화 수행
- **인터페이스를 사용한 클래스 사용**: 인터페이스를 사용하여 클래스를 생성하는 방법

```typescript
interface iWindow {
  resolution(): void;
}

class Display implements iWindow {
  constructor(
    private width: number,
    private height: number,
  ) {}

  resolution() {
    console.log(`Resolution: ${this.width}x${this.height}`);
  }
}

const myScreen = new Display(3840, 2160);
myScreen.resolution(); // Output: "Resolution: 3840x2160"
```
