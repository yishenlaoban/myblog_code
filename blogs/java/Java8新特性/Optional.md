---
title: Optional
date: 2022-02-14
categories:
 - java
tags:
 - java8新特性
sidebar: 'auto'
---
## JDK8Optional

Optional 类是一个可以为null的容器对象。如果值存在则isPresent()方法会返回true，调用get()方法会返回该对象。

Optional 是个容器：它可以保存类型T的值，或者仅仅保存null。Optional提供很多有用的方法，这样我们就不用显式进行空值检测。

Optional 类的引入很好的解决空指针异常。

### 判断参数是否为空

`ofNullable`(可以传递一个空对象)

`Of`(不可以传递空对象)



```java
Integer a1 = 1;
Optional<Integer> a = Optional.ofNullable(a1);
System.out.println(a.isPresent());
```

==isPresent true 不为空  isPresent返回 false 为空==



### 参数为空可以设定默认值

```java
        Integer a1 = 5;
//        Optional<Integer> a = Optional.ofNullable(a1);
//        System.out.println(a.get());
//        System.out.println(a.isPresent());
        Integer a = Optional.ofNullable(a1).orElse(10);
        System.out.println(a);
```



### 参数实现过滤

```java
Integer a1 = 16;
Optional<Integer> a = Optional.ofNullable(a1);
boolean isPresent = a.filter(a2 -> a2 > 17).isPresent();
System.out.println(isPresent);
```



### 与Lambda表达式结合使用，优化代码

#### 优化方案1

```java
   // 优化前
        String mayiktName = "meite";
        if (mayiktName != null) {
            System.out.println(mayiktName);
        }
        //优化后
        Optional<String> mayiktName2 = Optional.ofNullable(mayiktName);
//        // 当value 不为空时，则不会调用
//        mayiktName2.ifPresent(s -> System.out.println(s));
        mayiktName2.ifPresent(System.out::print);
```



#### 优化方案2

```java
 private static OrderEntity order = null;

    public static void main(String[] args) {
        OrderEntity order = Test06.getOrder();
        System.out.println(order);

    }

    public static OrderEntity getOrder() {
//        // 优化前
//        if (order == null) {
//            return createOrder();
//        }
//        return order;
        // 优化后
//        return Optional.ofNullable(order).orElseGet(new Supplier<OrderEntity>() {
//            @Override
//            public OrderEntity get() {
//                return createOrder();
//            }
//        });
        return Optional.ofNullable(order).orElseGet(() -> createOrder());
    }

 private static OrderEntity createOrder() {
        return new OrderEntity("123456", "mayikt");
    }
```



#### 优化方案3

map中获取的返回值自动被Optional包装,即返回值 -> Optional<返回值>

flatMap中返回值保持不变,但必须是Optional类型,即Optional<返回值> -> Optional<返回值>

 ```java
public class Test07 {
    public static void main(String[] args) {
        String orderName = Test07.getOrderName();
        System.out.println(orderName);
    }

    public static String getOrderName() {
        // 优化前写法：
        OrderEntity order = new OrderEntity("123456", "MAyikt");
        if (order != null) {
            String orderName = order.getOrderName();
            if (orderName != null) {
                return orderName.toLowerCase();
            }
        }
//        return null;
        //优化后写法:
        return Optional.ofNullable(order).map(orderEntity -> {
            return orderEntity.getOrderName();
        }).map(name -> {
            return name.toLowerCase();
        }).orElse(null);
    }
}
 ```

