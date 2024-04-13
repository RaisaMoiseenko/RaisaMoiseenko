const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const fetchData = async url => { const response = await fetch(url); return response.json(); }
