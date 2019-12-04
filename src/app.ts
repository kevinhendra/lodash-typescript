// // Import the core node services.
// import { _ } from "./extended";

// // ----------------------------------------------------------------------------------- //
// // ----------------------------------------------------------------------------------- //

// var friends = [
//   { id: 1, name: "Kim" },
//   { id: 2, name: "Sarah" },
//   { id: 3, name: "Joanna" }
// ];

// // Find a friend using the native find() method and the "_.property" iteratee shorthand.
// var friend1 = _.find(friends, ["id", 1]);

// // Find a friend using our convenience method that wraps the "_.property" usage.
// var friend3 = _.findByID(friends, 3);

// console.log(friend1);
// console.log(friend3);

import * as _ from "lodash";

// var data = ('Hello World');

// console.log(_.padStart(data, 20, " "));

var data = ['Hello', 'World'];
// console.log(_.chunk(data, 1));

// var concat = _.concat(data, 'coba', 'World');
// console.log(concat);

// console.log(_.flatten(data));

// console.log(_.head(data));

// console.log(_.head(data)); /*OR */ console.log(_.initial(data));

// console.log(_.intersectionBy(data, 'Hello'));

// console.log(_.join(data, '_')); /* OR */ console.log(_.join(data, '-')); /* OR */ console.log(_.join(data, ' '));

// console.log(_.last(data)); /* OR */ console.log(_.lastIndexOf(data, 'World')); /* OR */ console.log(_.take(data, 2));

// console.log(_.nth(data, -1)); /* OR */ console.log(_.nth(data, 1));

// console.log(_.pull(data, 'World')); /* OR */ console.log(_.pull(data, 'Hello'));

// console.log(_.reverse(data));

// console.log(_.zip(data, ['a', 'b'], [true, false]));

// var zipped = _.zip(data, ['a', 'b'], [true, false]);

// console.log(_.zipObject(zipped));

// console.log(_.unzip(zipped));

// console.log(_.unzipWith(zipped));

// console.log(_.tail(data));

// console.log(_.uniq(data));

// console.log(_.countBy(data, 'length'));


// function duplicate(n) {
//         return [n, n];
// }

// console.log(_.flatMap(data, duplicate));

// console.log(_.includes(data, 'ell')); //false

// console.log(_.includes(data, 'Hello'));

// console.log(_.sample(data)); //get random data

// console.log(_.size(data));
// var object = {
//         'user': 'fred',
//         'greet': function (greeting, punctuation) {
//                 return greeting + ' ' + this.user + punctuation;
//         }
// };

// var bound = _.bindKey(object, 'greet', 'hi');
// console.log(bound('!'));
// // => 'hi fred!'

// object.greet = function (greeting, punctuation) {
//         return greeting + 'ya ' + this.user + punctuation;
// };

// console.log(bound('!'));
// // => 'hiya fred!'

// // Bound with placeholders.
// var bound = _.bindKey(object, 'greet', _, '!');
// console.log(bound('hi'));
//       // => 'hiya fred!'


// var flipped = _.flip(function () {
//         return _.toArray(arguments);
// });

// console.log(flipped('a', 'b', 'c', 'd'));

// console.log(_.map(data, _.unary(parseInt))); //parse string number to number

// console.log(_.castArray(data) == data); /* OR */ console.log(_.castArray(data)); // parse data to array

// /* CLone data */
// var data1 = _.clone(data);
// console.log(data1[0] == data[0]);

// console.log(_.isArray(data)); //check variabel array or not

/* Match */
// var object = { 'a': 1, 'b': 2 };
// console.log(_.isMatch(object, { 'b': 2 }));

// console.log(_.isObject(data));

// console.log(_.isRegExp(data)); //-> False because ' ' can't input in regExp

/* MATH */
// console.log(_.subtract(10, 4)); // a - b 

// console.log(_.sum([4, 2, 8, 6])); //plus


// var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

// _.sumBy(objects, function (o) { return o.n; });
// // => 20

// // The `_.property` iteratee shorthand.
// _.sumBy(objects, 'n');
// // => 20

// console.log(_.multiply(6, 5));

// console.log(_.random(0, 5)); /* OR */ console.log(_.random(5)); // random integer between 0 and 5
// console.log(_.random(5, true)); // random floating number between 0 and 5
// console.log(_.random(1.2, 5.2)); // random floating number between 1.2 and 5.2

// console.log(_.round(5060, -4)); // -> 10000

// /* ======================Extends====================== */
// function Foo() {
//         this.a = 1;
// }

// function Bar() {
//         this.c = 3;
// }

// Foo.prototype.b = 2;
// Bar.prototype.d = 4;

// console.log(_.assignIn({ 'a': 0 }, new Foo, new Bar));
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }


/* ======================Creates an array of values corresponding to paths of object====================== */
// var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

// console.log(_.at(object, ['a[0].b.c', 'a[1]']));


// /* Creates an object that inherits from the prototype object. If a properties object is given, its own enumerable string keyed properties are assigned to the created object */
// function Shape() {
//         this.x = 0;
//         this.y = 0;
// }

// function Circle() {
//         Shape.call(this);
// }

// Circle.prototype = _.create(Shape.prototype, {
//         'constructor': Circle
// });

// var circle = new Circle;
// console.log(circle instanceof Circle);
//         // => true

// console.log(circle instanceof Shape);
//       // => true

/* Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties
that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored. */

// console.log(_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));
// => { 'a': 1, 'b': 2 }


// var users = {
//         'barney': { 'age': 36, 'active': true },
//         'fred': { 'age': 40, 'active': false },
//         'pebbles': { 'age': 1, 'active': true }
// };

// /* This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself. */
// console.log(_.findKey(users, function (o) { return o.age < 40; }));
// // => 'barney' (iteration order is not guaranteed)

// // The `_.matches` iteratee shorthand.
// console.log(_.findKey(users, { 'age': 1, 'active': true }));
// // => 'pebbles'

// // The `_.matchesProperty` iteratee shorthand.
// console.log(_.findKey(users, ['active', false]));
// // => 'fred'

// // The `_.property` iteratee shorthand.
// console.log(_.findKey(users, 'active'));
// // => 'barney'

// /* This method is like _.findKey except that it iterates over elements of a collection in the opposite order. */
// console.log(_.findLastKey(users, function (o) { return o.age < 40; }));
// // => returns 'pebbles' assuming `_.findKey` returns 'barney'

// // The `_.matches` iteratee shorthand.
// console.log(_.findLastKey(users, { 'age': 36, 'active': true }));
// // => 'barney'

// // The `_.matchesProperty` iteratee shorthand.
// console.log(_.findLastKey(users, ['active', false]));
// // => 'fred'

// // The `_.property` iteratee shorthand.
// console.log(_.findLastKey(users, 'active'));
// // => 'pebbles'

/* ======================forIn====================== */
// function Foo() {
//         this.a = 1;
//         this.b = 2;
// }

// Foo.prototype.c = 3;

// _.forIn(new Foo, function (value, key) {
//         console.log(key);
// });
// // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).

// _.forInRight(new Foo, function (value, key) {
//         console.log(key);
// });
// // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.

// _.forOwn(new Foo, function (value, key) {
//         console.log(key);
// });
//       // => Logs 'a' then 'b' (iteration order is not guaranteed).

// _.forOwnRight(new Foo, function (value, key) {
//         console.log(key);
// });
//       // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.


/* ======================Function====================== */
// function Foo() {
//         this.a = _.constant('a');
//         this.b = _.constant('b');
// }

// Foo.prototype.c = _.constant('c');

// console.log(_.functions(new Foo)); // => ['a', 'b']

// console.log(_.functionsIn(new Foo)); // => ['a', 'b', 'c']

/* ======================Get====================== */
// var object = { 'a': [{ 'b': { 'c': 3 } }] };

// console.log(_.get(object, 'a[0].b.c'));
// // => 3

// console.log(_.get(object, ['a', '0', 'b', 'c']));
// // => 3

// console.log(_.get(object, 'a.b.c', 'default'));
// // => 'default'

/* ======================Has====================== */
// var object = { 'a': { 'b': 2 } };
// var other = _.create({ 'a': _.create({ 'b': 2 }) });

// /* Has */
// console.log(_.has(object, 'a'));
// // => true

// console.log(_.has(object, 'a.b'));
// // => true

// console.log(_.has(object, ['a', 'b']));
// // => true

// console.log(_.has(other, 'a'));
// // => false

/* HasIn */
// var object = _.create({ 'a': _.create({ 'b': 2 }) });

// console.log(_.hasIn(object, 'a'));
// // => true

// console.log(_.hasIn(object, 'a.b'));
// // => true

// console.log(_.hasIn(object, ['a', 'b']));
// // => true

// console.log(_.hasIn(object, 'b'));
// // => false

/* ======================Invert====================== */
// var object = { 'a': 1, 'b': 2, 'c': 1 };

// /* Invert */
// // console.log(_.invert(object));// => { '1': 'c', '2': 'b' }

// /* InvertBy */
// console.log(_.invertBy(object));
// // => { '1': ['a', 'c'], '2': ['b'] }

// console.log(_.invertBy(object, function (value) {
//         return 'group' + value;
// }));
// // => { 'group1': ['a', 'c'], 'group2': ['b'] }

/* ======================Invoke====================== */
// var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

// console.log(_.invoke(object, 'a[0].b.c.slice', 1, 3));
// // => [2, 3]

/* ======================Map====================== */
/* Map Key */
// console.log(_.mapKeys({ 'a': 1, 'b': 2 }, function (value, key) {
//         return key + value;
// }));

/* Map Value */
// var users = {
//         'fred': { 'user': 'fred', 'age': 40 },
//         'pebbles': { 'user': 'pebbles', 'age': 1 }
// };

// console.log(_.mapValues(users, function (o) { return o.age; }));
// // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// // The `_.property` iteratee shorthand.
// console.log(_.mapValues(users, 'age'));
//       // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

/* ======================Merge====================== */
//Merge
// var object = {
//         'a': [{ 'b': 2 }, { 'd': 4 }]
// };

// var other = {
//         'a': [{ 'c': 3 }, { 'e': 5 }]
// };

// console.log(_.merge(object, other)); // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

//MergeWith
// function customizer(objValue, srcValue) {
//         if (_.isArray(objValue)) {
//                 return objValue.concat(srcValue);
//         }
// }

// var object = { 'a': [1], 'b': [2] };
// var other = { 'a': [3], 'b': [4] };

// console.log(_.mergeWith(object, other, customizer)); // => { 'a': [1, 3], 'b': [2, 4] }

/* ======================toPairs====================== */
// function Foo() {
//         this.a = 1;
//         this.b = 2;
// }

// Foo.prototype.c = 3;

// /* Pairs */
// console.log(_.toPairs(new Foo));
// // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)

// /* PairsIn */
// console.log(_.toPairsIn(new Foo));
// // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)

/* ======================isArray====================== */
// function square(n) {
//         return n * n;
// }

// var wrapped = _([1, 2, 3]);

// // Returns an unwrapped value.
// wrapped.reduce(_.add);
// // => 6

// // Returns a wrapped value.
// var squares = wrapped.map(square);

// console.log(_.isArray(squares));
// // => false

// console.log(_.isArray(squares.value()));
// // => true

/* ======================Prototype====================== */
// var wrapped = _([1, 2]);

// console.log(wrapped[Symbol.iterator]() === wrapped);
// // => true

// console.log(Array.from(wrapped));
// // => [1, 2]

/* ======================prototype.next====================== */
// var wrapped = _([1, 2]);

// console.log(wrapped.next());
// // => { 'done': false, 'value': 1 }

// console.log(wrapped.next());
// // => { 'done': false, 'value': 2 }

// console.log(wrapped.next());
// // => { 'done': true, 'value': undefined }

/* Repeat */
console.log(_.repeat('*', 3));