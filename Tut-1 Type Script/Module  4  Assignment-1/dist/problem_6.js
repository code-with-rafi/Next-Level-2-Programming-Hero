const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
const pluckValues = (items, key) => {
    // console.log(items[0][key]);
    return items.map(item => item[key]);
};
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
export {};
