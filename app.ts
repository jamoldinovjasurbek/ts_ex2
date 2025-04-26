//1
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "Jasurbek",
  email: "jasurbek@example.com",
  age: 21,
};

console.log(user);

//2
type Product = {
  name: string;
  price: number;
  available: boolean;
};

const phone: Product = {
  name: "iPhone 15",
  price: 1200,
  available: true,
};

const laptop: Product = {
  name: "MacBook Pro",
  price: 2500,
  available: false,
};

console.log(phone);
console.log(laptop);

//3
type Operation = "qoshish" | "ayirish" | "kopaytirish" | "bolish";

function calculate(operation: Operation, a: number, b: number): number {
  switch (operation) {
    case "qoshish":
      return a + b;
    case "ayirish":
      return a - b;
    case "kopaytirish":
      return a * b;
    case "bolish":
      return a / b;
  }
}

console.log(calculate("qoshish", 5, 3));
console.log(calculate("ayirish", 5, 3));
console.log(calculate("kopaytirish", 5, 3));
console.log(calculate("bolish", 6, 3));

//4
type Student = {
  id: number;
  name: string;
  course: number;
};

const studentsList: Student[] = [
  { id: 1, name: "Ali", course: 2 },
  { id: 2, name: "Laylo", course: 1 },
  { id: 3, name: "Sanjar", course: 3 },
];

function findStudent(id: number): Student | undefined {
  return studentsList.find((student) => student.id === id);
}

console.log(findStudent(2));


//5
type Status = "faol" | "nofaol" | "blok";

type UserStatus = {
  id: number;
  name: string;
  status: Status;
};

function checkStatus(user: UserStatus): string {
  switch (user.status) {
    case "faol":
      return "Foydalanuvchi faol.";
    case "nofaol":
      return "Foydalanuvchi nofaol.";
    case "blok":
      return "Foydalanuvchi bloklangan.";
  }
}

console.log(checkStatus({ id: 1, name: "Jasurbek", status: "faol" }));
//6
type MessageType = "email" | "sms" | "telegram";

function sendMessage(
  type: MessageType,
  contact: string,
  message: string
): string {
  return `Xabar ${type} orqali ${contact} ga yuborildi: ${message}`;
}

console.log(sendMessage("email", "test@example.com", "Salom!"));
console.log(sendMessage("sms", "+998901234567", "Assalomu alaykum!"));
console.log(sendMessage("telegram", "@jasurbek", "Xush kelibsiz!"));
//7
type CartProduct = {
  id: number;
  name: string;
  price: number;
};

const cartItems: CartProduct[] = [
  { id: 1, name: "Telefon", price: 1200 },
  { id: 2, name: "Laptop", price: 2500 },
];

function totalCartPrice(items: CartProduct[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

console.log(totalCartPrice(cartItems));
//8
type PaymentMethod = "naqd" | "karta" | "click";

function makePayment(method: PaymentMethod, amount: number): string {
  return `To'lov ${method} orqali amalga oshirildi: $${amount}`;
}

console.log(makePayment("karta", 500));
console.log(makePayment("click", 300));
console.log(makePayment("naqd", 150));
//9

type Account = {
  id: number;
  login: string;
  password: string;
  active: boolean;
};

function checkAccount(account: Account): string {
  return account.active ? "Account faol" : "Account faol emas";
}

console.log(
  checkAccount({ id: 1, login: "jasurbek", password: "12345", active: true })
);
//10
type DishType = "milliy" | "yevropa" | "osy";

type Dish = {
  name: string;
  price: number;
  type: DishType;
};

const dishesList: Dish[] = [
  { name: "Osh", price: 30000, type: "milliy" },
  { name: "Pizza", price: 50000, type: "yevropa" },
  { name: "Sushi", price: 60000, type: "osy" },
];

function filterDishes(dishes: Dish[], type: DishType): Dish[] {
  return dishes.filter((dish) => dish.type === type);
}

console.log(filterDishes(dishesList, "milliy"));
