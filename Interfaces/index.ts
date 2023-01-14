interface Animal {
  sex: "male" | "female";
}

interface Human {
  name: string;
  age: number;
}

interface Human extends Animal {
  name: string;
  age: number;
}
const person: Human = {
  age: 22,
  name: "Warlley",
  sex: "male",
};
