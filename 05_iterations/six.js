// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

//==================================================================================

const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);

// filter() returns an empty array if the callback does not return a boolean value.
// When using {} in an arrow function, return is mandatory; otherwise undefined is 
// returned and no elements pass the filter.


// let's try same by forEach
const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

//=========================================================================

const books = [
  {
    title: "The Silent Forest",
    genre: "Mystery",
    publish: 2018,
    edition: "1st"
  },
  {
    title: "Code Without Fear",
    genre: "Technology",
    publish: 2022,
    edition: "2nd"
  },
  {
    title: "Wings of Fire",
    genre: "Biography",
    publish: 2015,
    edition: "Revised"
  },
  {
    title: "Beyond the Horizon",
    genre: "Adventure",
    publish: 2020,
    edition: "1st"
  },
  {
    title: "Mathematics Made Easy",
    genre: "Education",
    publish: 2019,
    edition: "3rd"
  },
  {
    title: "The Last Kingdom",
    genre: "Historical Fiction",
    publish: 2017,
    edition: "1st"
  },
  {
    title: "AI for Beginners",
    genre: "Artificial Intelligence",
    publish: 2023,
    edition: "1st"
  },
  {
    title: "Secrets of the Ocean",
    genre: "Science",
    publish: 2016,
    edition: "2nd"
  },
  {
    title: "Journey to the Stars",
    genre: "Science",
    publish: 2021,
    edition: "Special"
  },
  {
    title: "Mind Over Matter",
    genre: "Self-Help",
    publish: 2014,
    edition: "4th"
  }
];


// let userBooks = books.filter( (bk) => bk.genre === "Science")
let userBooks = books.filter( (bk) => {return bk.publish >= 2015 && bk.genre === "Science"})

console.log(userBooks);
