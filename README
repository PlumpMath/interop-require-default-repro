```
npm i
npm start
```

With this code:

```js
function test() {
  Object.assign({}, {foo: 'bar'})
}

test()
```

`output-babel.js` runs fine in an es3 environment.

`output-rollup.js` doesn't, because it contains this chunk of code around line 209:

```js
var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj // this needs to be 'default': obj
  };
};
```

The helper code added in isn't being passed through either `babel-plugin-transform-es3-member-expression-literals`
or `babel-plugin-transform-es3-property-literals`.
