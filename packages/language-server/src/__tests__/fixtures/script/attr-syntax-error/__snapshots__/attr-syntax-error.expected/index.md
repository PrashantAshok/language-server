## Diagnostics
### Ln 3, Col 17
```marko
  1 | <div data-x=#2/>
  2 |
> 3 | <div onClick(a, %b) {
    |                 ^ Parameter declaration expected.
  4 |   console.log(#hello!);
  5 | }/>
  6 |
```

### Ln 5, Col 2
```marko
  3 | <div onClick(a, %b) {
  4 |   console.log(#hello!);
> 5 | }/>
    |  ^ Declaration or statement expected.
  6 |
```

### Ln 1, Col 14
```marko
> 1 | <div data-x=#2/>
    |              ^ Argument of type '{ "data-x": any; 2: any; }' is not assignable to parameter of type 'Directives & Marko·Inputᐸʺdivʺᐳ'.
  Object literal may only specify known properties, and '2' does not exist in type 'Directives & Marko·Inputᐸʺdivʺᐳ'.
  2 |
  3 | <div onClick(a, %b) {
  4 |   console.log(#hello!);
```

### Ln 3, Col 5
```marko
  1 | <div data-x=#2/>
  2 |
> 3 | <div onClick(a, %b) {
    |     ^^^^^^^^ The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
  4 |   console.log(#hello!);
  5 | }/>
  6 |
```

### Ln 3, Col 5
```marko
  1 | <div data-x=#2/>
  2 |
> 3 | <div onClick(a, %b) {
    |     ^^^^^^^^ Argument of type 'number' is not assignable to parameter of type 'Directives & Marko·Inputᐸʺdivʺᐳ'.
  Type 'number' is not assignable to type 'Marko·Inputᐸʺdivʺᐳ'.
  4 |   console.log(#hello!);
  5 | }/>
  6 |
```

### Ln 3, Col 14
```marko
  1 | <div data-x=#2/>
  2 |
> 3 | <div onClick(a, %b) {
    |              ^ 'a' is declared but its value is never read.
  4 |   console.log(#hello!);
  5 | }/>
  6 |
```

### Ln 3, Col 14
```marko
  1 | <div data-x=#2/>
  2 |
> 3 | <div onClick(a, %b) {
    |              ^ Parameter 'a' implicitly has an 'any' type.
  4 |   console.log(#hello!);
  5 | }/>
  6 |
```

### Ln 3, Col 18
```marko
  1 | <div data-x=#2/>
  2 |
> 3 | <div onClick(a, %b) {
    |                  ^ Cannot find name 'b'.
  4 |   console.log(#hello!);
  5 | }/>
  6 |
```

