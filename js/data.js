const user = {
  name: "Олег",
  surname: "Прійма",
  userPhoto: "72258274.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: 'car.jpg', alt: 'Авто моєї мрії' },
    { src: 'home.jpg', alt: 'Домівка моєї мрії' },
    { src: 'voyage.jpg', alt: 'Подорож до Америки' },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500, 
  700, 
  800, 
  1000, 
  1200, 
  1500, 
  1800, 
  2100, 
  2400, 
  2700, 
  3000, 
  3300
];

const necessaryExpenses = 800;

const todo = [
  { month: 'Червень', skill: 'JavaScript' },
  { month: 'Липень', skill: 'Java' },
  { month: 'Серпень', skill: 'Python' },
  { month: 'Вересень', skill: 'Самостійність' },
  { month: 'Жовтень', skill: 'Гнучкість' },
  { month: 'Листопад', skill: 'Емоційний інтелект' },
  { month: 'Грудень', skill: 'React.js' },
  { month: 'Січень', skill: 'Redux' },
  { month: 'Лютий', skill: 'Лідерство' },
  { month: 'Березень', skill: 'NodeJS' },
  { month: 'Квітень', skill: 'ExpressJS' },
  { month: 'Травень', skill: 'Впевненість в собі' },
];

export { user, arr, necessaryExpenses, todo };