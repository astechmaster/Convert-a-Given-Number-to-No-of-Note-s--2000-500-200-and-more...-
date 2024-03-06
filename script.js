function calculateNote() {
  const totalNote = document.getElementById("note").value;
  const twoThousand = parseInt(totalNote / 2000);
  document.getElementById("twoThousand").innerHTML =
    "towThousand: " + twoThousand;
  const fiveHundred = parseInt((totalNote % 2000) / 500);
  document.getElementById("fiveHundred").innerHTML =
    "fiveHundred: " + fiveHundred;
  const twoHundred = parseInt(((totalNote % 2000) % 500) / 200);
  document.getElementById("twoHundred").innerHTML = "twoHundred: " + twoHundred;
  const hundred = parseInt((((totalNote % 2000) % 500) % 200) / 100);
  document.getElementById("hundred").innerHTML = "hundred: " + hundred;
  const fifty = parseInt(((((totalNote % 2000) % 500) % 200) % 100) / 50);
  document.getElementById("fifty").innerHTML = "fifty: " + fifty;
  const twenty = parseInt(
    (((((totalNote % 2000) % 500) % 200) % 100) % 50) / 20
  );
  document.getElementById("twenty").innerHTML = "twenty: " + twenty;
  const ten = parseInt(
    ((((((totalNote % 2000) % 500) % 200) % 100) % 50) % 20) / 10
  );
  document.getElementById("ten").innerHTML = "ten: " + ten;
  const five = parseInt(
    (((((((totalNote % 2000) % 500) % 200) % 100) % 50) % 20) % 10) / 5
  );
  document.getElementById("five").innerHTML = "five: " + five;
  const two = parseInt(
    ((((((((totalNote % 2000) % 500) % 200) % 100) % 50) % 20) % 10) % 5) / 2
  );
  document.getElementById("two").innerHTML = "two: " + two;
  const one = parseInt(
    ((((((((totalNote % 2000) % 500) % 200) % 100) % 50) % 20) % 10) % 5) % 2
  );
  document.getElementById("one").innerHTML = "one: " + one;
}
