/* Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел). */

console.log(`Задача 1`);

class Employee {
  name;
  constructor(name) {
    this.name = name;
  }
  displayInfo() {
    console.log(`
        Name: ${this.name}
        `);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    console.log(`
        Name: ${this.name}
        Department: ${this.department}
        `);
  }
}

// Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

/* ""Управление списком заказов""

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
 */

console.log(`Задача 2`);

// Пример использования класса
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(orderNumber, products = []) {
    this.orderNumber = orderNumber;
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.products.forEach((element) => {
      totalPrice += element.price;
    });
    return totalPrice;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

/* Управление животными в зоопарке
Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

Приватные поля:
* #name: имя животного (строка).
* #age: возраст животного (число).
* #gender: пол животного (строка).
Публичные методы:
* constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
* changeName(newName): изменяет имя животного на новое.
* changeAge(newAge): изменяет возраст животного на новый.

Статическое поле:
* MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием. */

console.log(`Задача 3`);

class ZooAnimal {
  #name;
  #age;
  #gender;
  static MAX_AGE = 99;
  constructor(name, age, gender) {
    this.#name = name;
    if (age > ZooAnimal.MAX_AGE) {
      throw new Error(
        `Ошибка создания объекта класса: Возраст выше максимального`
      );
    } else {
      this.#age = age;
    }
    this.#gender = gender;
  }

  changeName(newName) {
    this.#name = newName;
  }

  changeAge(newAge) {
    if (newAge > ZooAnimal.MAX_AGE) {
      throw new Error(`Ошибка метода changeAge: Возраст выше максимального`);
    } else {
      this.#age = newAge;
    }
  }
  getInfo() {
    console.log(`
    Name: ${this.#name}
    Age: ${this.#age}
    Gender: ${this.#gender}
    `);
  }
}

const animal = new ZooAnimal("Ted", 15, "male");
const animal1 = new ZooAnimal("Zoe", 110, "female");

animal.changeName("Alex");
animal.changeAge(20);
animal.getInfo();

animal.changeAge(120);
