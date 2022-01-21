// Template Literals

const nameF = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";
let html;


// Without Template Strings
// the ES5 way

html = '<ul><li>Name: ' + nameF + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
// messyyyy

html = '<ul>' +
        '<li>Name: ' + nameF + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>';
// well I fucking hated that

function hello() {
    return "Hello";
};

// With template strings! 🌷🌿🌼
html = `
    <ul>
        <li>Name: ${nameF}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Do Math: ${2 + 2}</li>
        <li>Function Return: ${hello()}</li>
        <li>Turnary Operator: ${age > 30? 'Over 30?': 'Under 30'}</li>
        </ul>
`;

// Name: John
// Age: 30
// Job: Web Developer
// City: Miami
// Do Math: 4
// Function Return: Hello
// Turnary Operator: Under 30




document.body.innerHTML = html;
//Name: John
// Age: 30
// Job: Web Developer
// City: Miami