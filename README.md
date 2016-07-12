![](http://i.imgur.com/BQLvK07.png)


# JavaScript-Best-Practices
This is for maintain good quality code by understanding the java script best practices in various situations

## Content
### Syntax oriented
- Automatic semicolon insertion (**ASI**)
- Linting (JSHint -> http://jshint.com/docs/options/ configure jshint with package.json)
- Curly Braces (Place them in same line for consistancy)
- Equality (**===** and for checking use **!== 'undefined'**)
- Variables (Hoisting/Lexical Scoping -> make the variables on top of the scope)
- functions (first class objects , best practice is define variables first and then declare function and run the function)

### Behavior oriented
- Global variables
- Use strict mode
- Read Only properties (with **Object.defineProperty()**)
- Delete properties (with **delete** keyword)
- **Octal** and **Hexa decmial** numer representation
- Working with **"with"**
- Working with **"this"**

### Async patterns
- Callbacks (callback hell or Christmas tree type code)
- Promices (https://www.promisejs.org/)
- ES6 and babel
- async and await (ESNext features)

### Ready for production
- npm settings (engines:{node:"4.0.4"} , npm config set save-exact=true)
- Environment variables (node foreman)
