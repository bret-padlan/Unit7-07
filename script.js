document.getElementById('click').addEventListener('click', looperL)

let one = 0
let fff = 0
let total = 0

function looperL () {
  one = document.getElementById('table').value
  one = parseInt(one)
  fff = document.getElementById('table-two').value
  fff = parseInt(fff)

  for (let i = 0; i < one; i++) {
    total = total + fff
  }
  document.getElementById('name').innerHTML = 'total = ' + total
}
