---
title: "[포스팅 예시] 이곳에 제목을 입력하세요"
excerpt: "본문의 주요 내용을 여기에 입력하세요"

categories:
  - Categories3
tags:
  - [tag1, tag2]

permalink: /categories3/post-name-here-3/

toc: true
toc_sticky: true

date: 2022-07-24
last_modified_at: 2022-07-24
---

기본적으로 코틀린의 함수는 장환한 코드를 써야하는 자바 함수의 단점을 개선하기 위해서 간결한 코드를 제공

## 1. 함수 선언

- 클래스 내부에서 메서드로만 선언이 가능한 자바와 달리 코틀린은 최상위 레벨에서 바로 함수 선언이 가능

```kotlin
// Java
public class Example {
		// 클래스 내부에서만 함수 선언 가능
    public int add(int a, int b) {
        return a + b
    }
}

// Kotlin
// 최상위 레벨에서 fun 키워드로 바로 선언 가능
fun add(a: Int, b: Int): Int {
    return a + b
}
```

## 2. 반환 타입

- 자바는 메서드 앞에 반환 타입을 명시 vs 코틀린은 함수 뒤에 : 를 사용해서 명시

```kotlin
// Java
public class Calculator {
		// 메서드 앞에 int 로 반환 타입 명시
    public int addNumbers(int a, int b) {
        return a + b
    }    
}

// Kotlin
// 메서드 파라미터 뒷 부분에 : 를 사용하여 반환 타입 명시
fun addNumbers(a: Int, b: Int): Int {
    return a + b
}
```

## 3. 단일 표현식 함수 사용 가능

```kotlin
var num  // 타입 지정이 안되어 에러 발생
var num1: Int // 타입 지정이 되어 있으므로 에러가 발생하지 않음

println(num1) // 초기값 지정 없이 사용하려고 하면 에러 발생
```

- 코틀린에서는 중괄호{ } 와 retrun 을 생략하는 단일 표현식 함수를 사용 가능

```kotlin
// Java
public class Calculator {
		// 리턴이 있는 메서드의 경우 반드시 중괄호와 return 을 사용해야함
    public int addNumbers(int a, int b) {
        return a + b;
    }    
}

// Kotlin
// 중괄호와 return 을 생략하는 단일 표현식 사용 가능
fun add(a: Int, b: Int): Int = a + b
```

- 단일 표현식 함수를 사용하는 경우에는 타입 추론으로 인해 리턴 타입 생략 가능

```kotlin
// 타입 추론으로 인해 : Int 생략
fun add(a: Int, b: Int) = a + b
```

## 4. 매개변수의 기본 값

- 코틀린에서는 = 를 사용하여 매개변수의 기본 값 설정이 가능 (자바 : 불가능)
- 매개변수가 여러 개일 경우 오버로딩 없이 간결한 코드로 구현이 가능
- 명명된 매개변수를 사용하여 원하는 매개변수 값만 지정 가능 & 매개 변수를 순서를 지키지 않아도 되는 편의 제공

```kotlin
// Java, 매개변수의 기본 값 설정은 불가능하며 각각 오버로딩하여 구현해야함
public class UserService {
    // 모든 매개변수를 받는 메서드
    public void createUser(String name, int age) {
        // 로직 구현
    }
    
    // age 생략
    public void createUser(String name) {
        createUser(name, 22);
    }
    
    // name, age 생략
    public void createUser() {
        createUser("이몽룡", 24);
    }
}

// 사용 예시
UserService service = new UserService();
service.createUser("홍길동", 20)  // name="홍길동", age=20
service.createUser("강감찬")      // name="강감찬", age=22 (오버로딩 구현에 의한 값)
service.createUser()             // name="이몽룡", age=24 (오버로딩 구현에 의한 값)

// ###########################################################
// Kotlin, 매개변수 기본 값을 사용하여 오버로딩 없이 간단하게 구현
class UserService {
    fun createUser(
        name: String = "이몽룡",
        age: Int = 24
    ) {
        // 로직 구현
    }
}

// 사용 예시
val service = UserService()
service.createUser("홍길동", 20)  // name="홍길동", age=20
service.createUser("강감찬")      // name="강감찬", age=24 (기본값)
service.createUser()             // name="이몽룡", age=24 (모두 기본값)

// 명명된 매개변수를 사용하여 특정 매개 변수에만 값을 전달
service.createUser(age = 30)     // name="이몽룡" (기본값), age=30
```

## 5. 람다식 (Lambda Expression)

- 람다식은 함수를 하나의 식으로 표현한 것으로, 익명 함수를 만들 때 사용

### 람다식 사용의 장점

- 간결한 코드 작성 가능
- 함수형 프로그래밍 지원
- 코드 재사용성의 향상

### 자바의 람다식

- 자바 8부터 도입된 람다식은 (매개변수) -> { 본문 } 형태를 사용
- 함수형 인터페이스(단 하나의 추상 메서드만 가진 인터페이스)가 필요

```java
// Java
// 함수형 인터페이스 정의
interface Calculator {
    int calculate(int x, int y);
}

// 람다식 사용
Calculator add = (x, y) -> { return x + y; };
Calculator subtract = (x, y) -> x - y;  // 단일 표현식은 return과 중괄호 생략 가능

// 컬렉션에서의 람다식 사용
List<String> names = Arrays.asList("Kim", "Lee", "Park");
names.forEach(name -> System.out.println(name));
```

### 코틀린의 람다식

- 코틀린의 람다식은 { 매개변수 -> 본문 } 형태를 사용
- 함수형 인터페이스가 필요 없으며, 함수 타입을 직접 사용 가능
- 마지막 표현식이 자동으로 반환값이 됨

```kotlin
// Kotlin
// 람다식 선언
val add: (Int, Int) -> Int = { x, y -> x + y }
val subtract = { x: Int, y: Int -> x - y }

// it 키워드: 매개변수가 하나일 때 사용 가능
val square: (Int) -> Int = { it * it }

// 컬렉션에서의 람다식 사용
val names = listOf("Kim", "Lee", "Park")
names.forEach { println(it) }

// 여러 줄의 람다식 - 마지막 줄이 반환값
val calculateGrade = { score: Int ->
    println("Calculating grade...")
    when {
        score >= 90 -> "A"
        score >= 80 -> "B"
        else -> "C"
    }
}
```

### 주요 차이점

- 코틀린은 함수형 인터페이스 없이도 람다식 사용이 가능하여 더 간결한 코드 작성 가능
- 코틀린은 it 키워드를 통해 단일 매개변수를 더 간단히 참조 가능
- 코틀린의 람다식은 마지막 표현식이 자동으로 반환값이 되어 return 키워드가 불필요
- 코틀린은 함수 타입을 명시적으로 선언할 수 있어 타입 안정성이 더 높음