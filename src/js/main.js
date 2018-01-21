const companies = [
    { name: "company 1", category: "finance", start: 1981, end: 2001 },
    { name: "company 2", category: "shipping", start: 1992, end: 2002 },
    { name: "company 3", category: "books", start: 1999, end: 2004 },
    { name: "company 4", category: "shipping", start: 2009, end: 2006 },
    { name: "company 5", category: "computers", start: 1986, end: 2007 },
    { name: "company 6", category: "cards", start: 2001, end: 2003 },
    { name: "company 7", category: "shipping", start: 2005, end: 2006 },
    { name: "company 8", category: "appliances", start: 1981, end: 1987 },
    { name: "company 9", category: "web development", start: 1981, end: 1982 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

companies.forEach(c => console.log(c.name));

const canDrink = ages.filter(a => a >= 21);
console.log('Can Drink: ' + canDrink);

const longerThanTenYears = companies.filter(c => {
    if (c.end - c.start >= 10) {
        return true;
    }
}).forEach(l => console.log(`${l.name} - [${l.start} - ${l.end}]`));

let shippingCompanies = companies.map(c => {
    if (c.category == 'shipping') {
        return c.name;
    }
})

console.log(shippingCompanies);

const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => a - b).reverse();
console.log(sortAges);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);