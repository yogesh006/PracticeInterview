//currying function in js i.e call from f(a,b) into f(a)(b)

// function Addtion(a, b,c){
//     return a+b+c;
// }
// let res= Addtion(2,3,4)
// console.log(res)

function Addtion(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    } 
}

//1 way
// let res = Addtion(2)
// let data = res(4)
// let data1 = data(7)
// console.log(res+"Res")
// console.log(data+"data")
// console.log(data1+"data1")

//2way
// let res = Addtion(3)(5)(11)
// console.log(res)

//in realword example
userObj = {
    name:"Yogesh",
    age:27
}

function userInfo(userObj){
    return function(userInfo){
        return userObj[userInfo]
    }
}

let res = userInfo(userObj)
console.log(res)
console.log(res('name'))



Currying can be a powerful tool for creating flexible and reusable functions in real-world scenarios. Here are some practical examples of currying:

1. **Math Operations:**
   You can create curried functions for mathematical operations. For example, you might create curried functions for addition, subtraction, multiplication, and division. This makes it easy to create new functions for specific use cases or calculations.

   ```javascript
   const curriedAdd = a => b => a + b;
   const add5 = curriedAdd(5);

   const curriedMultiply = a => b => a * b;
   const double = curriedMultiply(2);

   console.log(add5(3)); // Outputs: 8
   console.log(double(4)); // Outputs: 8
   ```

2. **Validation Functions:**
   Currying can be useful for creating validation functions that check data against specific criteria. You can create reusable validators for different data types or conditions.

   ```javascript
   const curriedIsEmail = pattern => str => pattern.test(str);
   const isEmail = curriedIsEmail(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/);

   console.log(isEmail('example@example.com')); // Outputs: true
   console.log(isEmail('invalid-email')); // Outputs: false
   ```

3. **Filtering and Mapping:**
   Currying can be handy when working with arrays and lists. You can create functions for filtering and mapping data, allowing you to easily create new functions tailored to your needs.

   ```javascript
   const curriedFilter = fn => arr => arr.filter(fn);
   const filterEven = curriedFilter(num => num % 2 === 0);

   const curriedMap = fn => arr => arr.map(fn);
   const doubleAll = curriedMap(num => num * 2);

   const numbers = [1, 2, 3, 4, 5];
   console.log(filterEven(numbers)); // Outputs: [2, 4]
   console.log(doubleAll(numbers)); // Outputs: [2, 4, 6, 8, 10]
   ```

4. **Internationalization (i18n):**
   In an internationalization library, currying can be used to create translation functions. The base function can accept the language, and then you can create variations of it for specific languages.

   ```javascript
   const i18n = language => key => {
     // Implementation for language-specific translations
     return translations[language][key] || key;
   };

   const en = i18n('en');
   const fr = i18n('fr');

   console.log(en('greeting')); // Outputs: 'Hello'
   console.log(fr('greeting')); // Outputs: 'Bonjour'
   ```

5. **Function Composition:**
   Currying is often used in functional programming for function composition. You can create reusable functions that accept other functions as arguments and return new functions with specific behavior.

   ```javascript
   const compose = (f, g) => x => f(g(x));
   const square = x => x * x;
   const double = x => x * 2;

   const squareAndDouble = compose(double, square);

   console.log(squareAndDouble(3)); // Outputs: 18
   ```

These real-world examples demonstrate the flexibility and reusability that currying provides in various scenarios, from mathematical operations to data validation, functional programming, and internationalization. It allows you to create specialized functions from general functions, improving code maintainability and readability.
