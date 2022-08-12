// // let text = document.getElementById("text");
// // const name1 = document.getElementById("name");
// // const age1 = document.getElementById("age");
// // const hasTail1 = document.getElementById("hasTail");
// // const push = document.getElementById("push");

// // class Animal {
// //   constructor(options) {
// //     this.oti = options.name;
// //     this.yoshi = options.age;
// //     this.dumi = options.hasTail;
// //   }

// //   voice() {
// //     text.innerHTML = "I am animal";
// //   }
// // }

// // const animal = new Animal({
// //   name: "maymun",
// //   age: 4,
// //   hasTail: true,
// // });

// // push.addEventListener("click", function () {
// //   let www = new Animal({
// //     name: name1.value,
// //     age: age1.value,
// //     hasTail: hasTail1.value,
// //   });
// //   console.log(www);

// //   const wwwEntries = Object.entries(www);
// //   const entiredwww = Object.fromEntries(wwwEntries);

// //   text.innerHTML = entiredwww;
// // });

// // const qweqwe = {
// //   name: "nomi",
// //   age: "yoshi",
// //   lang: "til",
// // };

// // console.log(Object.entries(qweqwe));

// // text.innerText = `${Object.keys(qweqwe)} : ${Object.values(qweqwe)}`;

// // const objEntries = Object.entries(qweqwe);
// // console.log(Object.fromEntries(objEntries));
// // console.log(objEntries);

// // Object.fro;

// class Xayvon {
//   constructor(options) {
//     this.ism = options.name;
//     this.yoshi = options.age;
//     this.dumiBormi = options.hasTail;
//   }

//   voice() {
//     console.log("Men hayvonman");
//   }
// }

// class Pishak extends Xayvon {
//   static type = "Pishaaaaaag";

//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   voice() {
//     super.voice();
//     console.log("I am cat");
//   }

//   get yoshInfo() {
//     return this.yoshi * 7;
//   }

//   set yoshInfo(yangiYosh) {
//     this.yoshi = yangiYosh;
//   }
// }

// const mushuk = new Pishak({
//   name: "Babu",
//   age: 5,
//   hasTail: true,
//   color: "sariq",
// });

// const kuchuk = new Xayvon({
//   name: "Simba",
//   age: 5,
//   hasTail: true,
// });

// const box1 = document.getElementById("box1");
// console.log(box1);

// box1.style.backgroundColor = "red";
// box1.style.width = "100px";
// box1.style.height = "100px";

// box1.addEventListener("click", function () {
//   box1.style.borderRadius = "50%";
//   box1.style.transition = "0.2s ease-in-out";
//   box1.style.animationIterationCount = "infinite";
// });

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.backgroundColor = options.color;
    this.$el.style.borderRadius = options.border + "px";
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
  border: 25,
});

const box2 = new Box({
  selector: "#box2",
  size: 200,
  color: "blue",
  border: 25,
});

class Circle extends Box {
  constructor(options) {
    super(options);

    this.$el.style.borderRadius = "50%";
  }
}

const c = new Circle({
  selector: "#circle",
  size: 300,
  color: "green",
});

class YangiBitta extends Box {
  constructor(options) {
    super(options);
    this.$el.style.color = options.backgroundColor;
  }
}

const q = new YangiBitta({
  selector: "#yangi",
  size: 300,
  color: "orange",
  backgroundColor: "#fff",
  border: 12,
});
