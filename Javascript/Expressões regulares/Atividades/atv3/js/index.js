const reg = /Marca: ([n|N]ike\b|[a|A]didas\b|[p|P]uma\b|[a|A]sics)/;

console.log(reg.test("Marca: nike"));
console.log(reg.test("Marca: jdidas"));
console.log(reg.test("Marca: kuma"));
console.log(reg.test("Marca: asics"));
console.log(reg.test("Marca: 45646546"));