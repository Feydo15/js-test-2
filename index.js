// question 1

let list = [
  { name: "Thabo", mark: 40 },
  { name: "smith", mark: 33 },
  { name: "Nean", mark: 22 },
];
let total = 60;

const getAverage = (list, total) => {
  list.map((list) => (`${list.mark}`.reduce((a, b) => a + b, 0) / total) * 100);
};
getAverage();

// question 2
const editName = (list) => {
  let Names = list.map(function (list) {
    return list.name;
  });
  let edit = Names.splice(2, 1, "john");

  console.log(edit);
};

editName(list);

// question 3

const str = "4T354B3434234234234";

const newStr =(str)=>{
    str.replace(/\D/g, "")
  .split(" , ")
  .map((x) => +x)
  .reduce((a, b) => a + b, 0);

}
newStr(str)
console.log(newStr);

//question 4

let arr = ["5", "g", 3, 5, 10, "dfdfdf"];

const removeNuN = (arr) => {
  for (i in arr) {
    return arr.replace(/\D/g, "");
  }
};

removeNuN(arr);
console.log(removeNuN(arr));
