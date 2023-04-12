const formulas = {
    algebra: [
        {
            name: 'Quadratic Formula',
            formula: 'x = (-b ± √(b² - 4ac)) / 2a',
            description: 'Used to solve quadratic equations in the form ax^2 + bx + c = 0.',
            example: 'For the equation 2x^2 - 5x + 3 = 0, a = 2, b = -5, and c = 3. Plugging these values into the quadratic formula gives x = (5 ± √(25 - 24)) / 4, which simplifies to x = 3/2 or x = 1/2.'
        },
        {
            name: 'Slope-Intercept Form',
            formula: 'y = mx + b',
            description: 'Used to represent a linear equation in the form y = mx + b, where m is the slope and b is the y-intercept.',
            example: 'For the equation y = 2x + 1, the slope is 2 and the y-intercept is 1.'
        }
    ],
    calculus: [
        {
            name: 'Chain Rule',
            formula: 'f\'(g(x)) = f\'(u) * u\'(x), where u = g(x)',
            description: 'Used to differentiate a function that is composed of two or more functions.',
            example: 'To differentiate f(x) = sin(x^2), we can use the chain rule by letting u = x^2 and g(x) = sin(x), so that f(x) = g(u) and g(x) = sin(u). Then, f\'(x) = g\'(u) * u\'(x) = cos(u) * 2x = 2x cos(x^2).'
        },
        {
            name: 'Fundamental Theorem of Calculus',
            formula: '∫_a^b f(x) dx = F(b) - F(a), where F(x) is an antiderivative of f(x).',
            description: 'Relates differentiation and integration, and allows us to calculate definite integrals.',
            example: 'To find the definite integral of f(x) = x^2 from 0 to 1, we can use the fundamental theorem of calculus by finding an antiderivative of f(x), such as F(x) = (1/3)x^3. Then, F(1) - F(0) = (1/3) - 0 = 1/3.'
        }
    ]
};

// Function to display formulas for a given category
function displayFormulas(category) {
    const categoryFormulas = formulas[category];
    if (categoryFormulas) {
        console.log(`Formulas for ${category}:`);
        for (let i = 0; i < categoryFormulas.length; i++) {
            console.log(`${i + 1}. ${categoryFormulas[i].name}:`);
            console.log(`   Formula: ${categoryFormulas[i].formula}`);
            console.log(`   Description: ${categoryFormulas[i].description}`);
            console.log(`   Example: ${categoryFormulas[i].example}`);
            console.log();
        }
    } else {
        console.log(`No formulas found for ${category}.`);
    }
}

// Display some example formulas
displayFormulas('algebra');
console.log('---------------------------------------');
displayFormulas('calculus');

var str='a1b10'
let count=0;
var character;
let num;
let n=0;

for(i=0;i<str.length;i++){
  if(str[i+2]-48>=0 && str[i+2]-48<=9)
  {
     console.log(str[i]);
      t=((str[i+1]-48)*10)+(str[i+2]-48);
     for(j=0;j<t;j++)
     {
         console.log(str[i]);
      }
     i++;
     i++;
  }else
  {
   for(j=0;j<str[i+1]-48;j++)
   {
     console.log(str[i]);
   }
   i++;
  }
}


