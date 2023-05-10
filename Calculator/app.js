document.getElementById('equal').addEventListener('click', btnEqual);

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener('click', function() {
    document.getElementById('input').value += i.toString();
  });
}
document.getElementById('plus').addEventListener('click', function() {
  document.getElementById('input').value += "+";
});
document.getElementById('minus').addEventListener('click', function() {
  document.getElementById('input').value += "-";
});
document.getElementById('multiply').addEventListener('click', function() {
  document.getElementById('input').value += "*";
});
document.getElementById('divide').addEventListener('click', function() {
  document.getElementById('input').value += "/";
});
document.getElementById('c').addEventListener('click', function() {
  document.getElementById('input').value = '';
});
document.getElementById(',').addEventListener('click', function() {
  document.getElementById('input').value += ".";
});

function validateMath() {
  try {
    const math = document.getElementById('input').value;
    const result = eval(math);
    document.getElementById('input').value = result;
  } catch (err) {
    console.log(err);
    document.getElementById('error').innerHTML = 'Invalid expression';
    document.getElementById('input').value = ''
    setTimeout(function() {
      document.getElementById('error').innerHTML = '';
      document.getElementById('input').value = ''
    }, 2000);
  };
};

function btnEqual() {
  validateMath();
  const math = document.getElementById('input');
  const result = eval(math.value);
  math.value = result;
};