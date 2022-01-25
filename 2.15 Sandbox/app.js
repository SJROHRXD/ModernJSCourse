// Dates and Times

// Global Object ⏰🤍📆
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time are not the same as the UNIX epoch (the number of seconds that have elapsed since midnight on January 1, 1970, UTC), which is the predominant base value for computer-recorded date and time values.
// lol wat

// Constructor ⏰🤍📆
// Date()
// When called as a function, returns a string representation of the current date and time, exactly as new Date().toString() does.
// Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

const date1 = new Date("December 17, 1995 03:24:00");
console.log(`The date you requested: ${date1}`)
// output
// The date you requested: Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)

// Syntax ⏰🤍📆
/* new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds) */

// Return Value ⏰🤍📆
/* Calling new Date() (the Date()constructor) returns a Date object.

If called with an invalid date string, it returns a Date object whose toString() method returns the literal string Invalid Date.

Calling the Date() function (without the new keyword) returns a string representation of the current date and time, exactly as new Date().toString() does.

Any arguments given in a Date() function call (without the new keyword) are ignored; regardless of whether it’s called with an invalid date string — or even called wth any arbitrary object or other primitive as an argument — it always returns a string representation of the current date and time. */