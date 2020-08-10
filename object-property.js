let student = [
    {id:21, name: "Shamim"},
    {id:31, name: "Munna"},
    {id:41, name: "Alamin"},
    {id:61, name: "Sohel"}
];
const names = student.map(s=>s.name);
const ids = student.map(s=>s.id);
const uid = student.filter(s=>s.id>40);
console.log(names);
console.log(ids);
console.log(uid);