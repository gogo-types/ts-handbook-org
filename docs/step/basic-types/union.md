# 유니온 타입과 교차타입

## 📖 1. 유니온 타입

**유니온 타입(Union Types)** 은 타입의 값을 여러 개 허용하는 타입으로, 여러 개의 타입을 모두 사용할 수 있도록 해주는 기능입니다.

```typescript
function Union(value: string | number | boolean) {
  console.log(value);
}

Union("Hello"); // Valid
Union(10); // Valid
Union(true); // Valid
// Union(null); // Error: Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'.
```

## 📖 2. 교차 타입

**교차 타입(Intersection Types)** 은 유니온 타입과 유사한 기능을 하는 타입이지만 더 복잡합니다. 교차 타입은 여러 타입을 하나로 결합하는 타입으로, 여러 개의 타입을 모두 사용할 수 있도록 해주는 기능입니다.

```typescript
// 교차 타입(Intersection Types)

interface ErrorHandler {
  fail: boolean;
  error?: { message: string };
}

interface WorkData {
  work: { title: string }[];
}

interface Handler {
  handlers: { name: string }[];
}

// 위 인터페이스들을 하나의 인터페이스로 만들어서 사용할 수 있다.
type HandlerResponse = Handler & ErrorHandler;
type WorksResponse = Handler & ErrorHandler;

const errorHandlerResponse = (response: WorksResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.handlers);
};

// 에러 출력
// errorHandlerResponse({ fail: true, error: { message: "error" } }); // 에러 출력
// 성공 출력
errorHandlerResponse({ fail: false, handlers: [{ name: "handler" }] });
```

## 📖 3. 공통 필드를 가지는 유니온 타입

**공통 필드를 가지는 유니온(Union Types)** 은 유니온 타입과 유사한 기능을 하는 타입이지만 더 복잡합니다. 공통 필드를 가지는 유니온 타입은 여러 타입을 하나로 결합하는 타입으로, 여러 개의 타입을 모두 사용할 수 있도록 해주는 기능입니다.

```typescript
interface User {
  name: string;
  age: number;
}

interface Admin {
  role: "admin";
  permissions: string[];
}

type UserOrAdmin = User | Admin; // 두 개의 인터페이스를 하나의 인터페이스로 만들어서 사용할 수 있다.

const userOrAdmin: UserOrAdmin = {
  name: "John",
  age: 30,
  role: "admin",
  permissions: ["read", "write"],
};

console.log(userOrAdmin); // { name: 'John', age: 30, role: 'admin', permissions: ['read', 'write'] }
```

## 📖 4. 교차를 통한 믹스인 타입

**교차를 통한 믹스인 타입(Intersection Types)** 은 유니온 타입과 유사한 기능을 하는 타입이지만 더 복잡합니다. 믹스인 패턴을 실행하기 위해 교차를 통해 믹스인 타입을 사용할 수 있습니다.

```typescript
// 교차를 통한 믹스인

class User {
  constructor(public name: string) {}
}

interface Logger {
  log(name: string): void; // 로그 출력
}

class ConsoleLogger implements Logger {
  log(name: string) {
    console.log(`User ${name} Logged in`);
  }
}

// 두 객체를 받아서 하나로 조합할 수 있다.
class mixin extends User implements Logger {
  log(name: string) {
    console.log(`User ${name} Logged in`);
  }
}

const jim = new mixin("John");
jim.log(jim.name); // User John Logged in
```

## 📖 5. 유니언 구별하기(Discriminated Unions)

유니얼 타입을 사용하면 유니언 구별이 가능합니다. 예를 들어 하나의 공통 필드를 가지고 있는 세 가지 인터페이스를 만들어서 사용할 수 있습니다.

```typescript
type NowLoading = {
  state: "loading";
};

type NowFailedState = {
  state: "failed";
  code: number;
};

type NowSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// 에러 출력 switch 문 사용
function handleLoading(state: LoadingState) {
  switch (state.state) {
    case "loading":
      console.log("Loading...");
      break;
    case "failed":
      console.log(`Failed with code: ${state.code}`);
      break;
    case "success":
      console.log("✅ Success");
      console.log(`Success with title: ${state.response.title}`);
      console.log(`Duration: ${state.response.duration} seconds`);
      console.log(`Summary: ${state.response.summary}`);
      break;
  }
}

// 위 인터페이스들을 하나의 인터페이스로 만들어서 사용할 수 있다.
type LoadingState = NowLoading | NowFailedState | NowSuccessState;

// 분기 처리
const loading: LoadingState = {
  state: "loading",
};

const failed: LoadingState = {
  state: "failed",
  code: 404,
};

const success: LoadingState = {
  state: "success",
  response: {
    title: "Typescript Handle",
    duration: 10,
    summary: "Typescript Handle",
  },
};

console.log("==============================");
handleLoading(loading); // Loading...
console.log("==============================");
handleLoading(failed); // Failed with code: 404
console.log("==============================");
handleLoading(success); // ✅ Success
console.log("==============================");
```
