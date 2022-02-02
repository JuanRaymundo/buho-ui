/**
 * @param { Array<Array<Number>> } items 
 */
 function sum(items) {
  return items.reduce((result, subItems) => {
    const subTotal = subItems.reduce((subResult, item) => {
      return subResult + item;
    }, 0);
    return result + subTotal;
  }, 0);
}

/**
 * @param { Array<Array<Number>> } items 
 */
function sum2(items) {
  let result = 0;
  const numbers = items.flat(1);
  numbers.forEach((number) => {
    result += number;
  });

  return result;
}

const result = sum([[3, 2], [1], [4, 12]]);

console.log('sum \t', sum([[3, 2], [1], [4, 12]]) === 22);
console.log('sum2 \t', sum2([[3, 2], [1], [4, 12]]) === 22);

/**
 * @param { Number } from
 * @param { Number } to
 */
function divisors(from, to) {
  for(let i = from + 1; i < to ; i++) {
    const divisible = i % 3 === 0;
    console.log('number:', i, divisible ? 'divisible' : 'no divisible');
  }
}

divisors(0,10);

/**
 * @param { Number[] } items 
 */
function sumPlusOne(items) {
  return items.map(num => num + 1).reduce((result, number) => result + number, 0);
}

console.log('sumPlusOne', sumPlusOne([1,2,3]) === 9);

/**
 * @param { Array } items 
 */
function clearArray(items) {
  items.splice(0, items.length);
}

console.log('How to empty an array in JavaScript?');
const arrayToClear = [1,2,3];
console.log('before', arrayToClear);
clearArray(arrayToClear);
console.log('after', arrayToClear);

// un callback es una función que se manda como parametro a otra, el callback es llamado cuando
// es requerido, por ejemplo un hook
// onMount(() => console.log('hacer algo'));

function removeDuplicates(items) {
  const set = new Set(items);

  return [...set];
}

console.log('remove duplicates', removeDuplicates([1,1,2,2,3,3,4,4,4,4,5,6,7,7,8,9,9,9,9,10,10,10]));

/**
 * @param { Number } price 
 * @param { Number[] } items 
 */
function max(price, items) {
  const ganancia = Math.max(...items.map(item => item - price));

  return ganancia > 0 ? ganancia : -1;
}

console.log('Ganancia', max(24, [45, 24, 35, 31, 40, 38, 11]));

function multiplyFactory(a) {
  return (b) => a * b;
}

console.log('multiplyFactory', multiplyFactory(3)(5) === 15);

/**
 * @param { Array } _a 
 * @param { Array } _b 
 * @returns { Array }
 */
function arrayIntersections(_a, _b) {
  const a = removeDuplicates(_a);
  const b = removeDuplicates(_b);

  return a.filter((item) => {
    return b.includes(item);
  });
}

console.log(
  'intersection of two arrays',
  arrayIntersections(
    [1, 1, 2, 2, 3, 3, 9],
    [1, 1, 3, 4, 4, 9, 10],
  ),
);

// What will the following code output? undefined

/*
<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>

import fetchUser from 'twitter'

function Twitter({ username, children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(username).then((response) => {
      setUser(response);
    });
  }, []);

  return children(user);
}
*/


// Can we mimic componentWillMount() using React Hooks?: nope


/*
import React from 'react';

const users = [
  { id: 'a', name: 'Robin' },
  { id: 'b', name: 'Dennis' },
  ...
];

const App = () => {
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;
*/

function binarySearch(node, value) {
  if (node.value === value) {
    return node;
  }

  if (node.left && node.left.value < value) {
    return binarySearch(node.left, value);
  }
  if (node.right && node.right.value > value) {
    return binarySearch(node.right, value);
  }

  return null;
}
