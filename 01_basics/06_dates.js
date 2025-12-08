let d = new Date();                 // current date & time
let d2 = new Date("2025-01-01");    // date from string
let d3 = new Date(2025, 0, 15);     // year, month(0–11), day
let d4 = new Date(2025, 0, 15, 10); // year, month, day, hour

// console.log(d \n d2 \n d3 \n d4);    this is wrong way to print

console.log(`${d}\n${d2}\n${d3}\n${d4}`);


//======Get Methods=======

console.log(d.getFullYear());   // 2025
//similarly
d.getMonth();      // 0-11
d.getDate();       // 1-31
d.getDay();        // 0-6 (Sun=0)
d.getHours();      // 0-23
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
d.getTime();       // ms since Jan 1, 1970


//======Set Methods=======

d.setFullYear(2030);
d.setMonth(5);       // June
d.setDate(20);
d.setHours(10);

//======Formatting Dates=======

d.toDateString();    // "Mon Jun 24 2025"
d.toTimeString();    // "10:23:45 GMT+0530 ..."
d.toISOString();     // "2025-06-24T04:53:45.000Z"
d.toLocaleDateString(); // based on region
d.toLocaleString();  // date + time (localized)

//======Timestamp=======

Date.now();  // current time in milliseconds
