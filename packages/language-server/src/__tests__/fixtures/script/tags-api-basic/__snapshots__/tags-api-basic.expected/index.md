## Hovers
### Ln 31, Col 29
```marko
  29 |     <span class="subnote">phoneType: ${type}</span>
  30 |
> 31 |     <for|mobile, i, all| of=mobileList>
     |                             ^ const mobileList: Mobile[]
  32 | //                          ^?
  33 |       <span id=i>${mobile} ${i} ${all.length}</span>
  34 | //                 ^?        ^?
```

### Ln 33, Col 20
```marko
  31 |     <for|mobile, i, all| of=mobileList>
  32 | //                          ^?
> 33 |       <span id=i>${mobile} ${i} ${all.length}</span>
     |                    ^ (parameter) mobile: Mobile
  34 | //                 ^?        ^?
  35 |     </for>
  36 |
```

### Ln 33, Col 30
```marko
  31 |     <for|mobile, i, all| of=mobileList>
  32 | //                          ^?
> 33 |       <span id=i>${mobile} ${i} ${all.length}</span>
     |                              ^ (parameter) i: number
  34 | //                 ^?        ^?
  35 |     </for>
  36 |
```

## Diagnostics
### Ln 2, Col 1
```marko
  1 | import fancyButton from "<fancy-button>";
> 2 | import { get } from "@ebay/retriever";
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'get' is declared but its value is never read.
  3 | /** Hi */
  4 | export interface Input {
  5 |   year: number,
```

### Ln 2, Col 21
```marko
  1 | import fancyButton from "<fancy-button>";
> 2 | import { get } from "@ebay/retriever";
    |                     ^^^^^^^^^^^^^^^^^ Cannot find module '@ebay/retriever' or its corresponding type declarations.
  3 | /** Hi */
  4 | export interface Input {
  5 |   year: number,
```

### Ln 8, Col 21
```marko
   6 |   isSmartOnly: boolean,
   7 |   type: string,
>  8 |   mobileList: Array<Mobile>,
     |                     ^^^^^^ Cannot find name 'Mobile'.
   9 |   renderBody: Marko.Body
  10 | }
  11 |
```

### Ln 13, Col 14
```marko
  11 |
  12 | static {
> 13 |     function greet() {
     |              ^^^^^ 'greet' is declared but its value is never read.
  14 |         return "hello world";
  15 |     }
  16 | }
```

### Ln 18, Col 12
```marko
  16 | }
  17 |
> 18 | static var useA = true;
     |            ^^^^ 'useA' is declared but its value is never read.
  19 |
  20 | <const/{ year, isSmartOnly, type, mobileList, renderBody } = input/>
  21 |
```

### Ln 33, Col 13
```marko
  31 |     <for|mobile, i, all| of=mobileList>
  32 | //                          ^?
> 33 |       <span id=i>${mobile} ${i} ${all.length}</span>
     |             ^^ Type 'number' is not assignable to type 'AttrString'.
  34 | //                 ^?        ^?
  35 |     </for>
  36 |
```

### Ln 40, Col 18
```marko
  38 |         <${renderBody}/>
  39 |     </div>
> 40 |     <fancyButton something=true>${type}</fancyButton>
     |                  ^^^^^^^^^ Argument of type '{ something: boolean; renderBody: () => MarkoReturn<void>; }' is not assignable to parameter of type 'Directives & Input'.
  Object literal may only specify known properties, and '"something"' does not exist in type 'Directives & Input'.
  41 |     <div>Hello $!{"<b>World</b>"}</div>
  42 |     <div>Placeholder example: <code>\${someValue}</code></div>
  43 | </div>
```

