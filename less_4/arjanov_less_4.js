"use strict"

/**
 * 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3
 * примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните
 * их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать
 * цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора,
 * и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
 */

//А) es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 0.25);
};

let exampOfProduct = new Product("Холодильник", 25000);
exampOfProduct.make25PercentDiscount();

console.log(exampOfProduct);

//Б. es6

class Product_1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 0.25);
    }
}

let exampOfProduct_2 = new Product_1('Стиральная машина', 36700);
exampOfProduct_2.make25PercentDiscount();

console.log(exampOfProduct_2);

/**
 * 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
 *
 */

//А) es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

//Б) es5
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

//result

let newPost = new AttachedPost('author', 'Some text', '25.09.2021');
console.log(newPost);
newPost.makeTextHighlighted();
newPost.edit('new text');
console.log(newPost);

//А) es6

class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }

}

//Б) es6

class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let newPost_es6 = new AttachedPost_es6('author', 'Some text', '25.09.2021');
console.log(newPost_es6);
newPost_es6.makeTextHighlighted();
newPost_es6.edit('new text');
console.log(newPost_es6);

/**
 * К сожалению завал по работе. Задания интересные, но похоже доделывать придется потом.
 * С трудом успеваю отсматривать уроки, потому в файле пока только основные задания.
 *
 */