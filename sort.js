
// Ejercicio #10
function orderStudentsByScore(students) {
  // escribe tu solución aquí
  return students.sort((a, b) => {
    if (a.score - b.score <= -1) return -1
    else if (a.score - b.score >= 1) return 1
    return 0
  })
}


function orderStudentsByScore(students) {
  // escribe tu solución aquí
  return students.sort((a, b) => (a.score - b.score))
}



// 3-5 = -2 === -1 --conclsion a es menor q b
// 3-2 = 1 ===   1 --conclsion a es mayor q b
// 3-3 = 0 ===   0 --conclsion ay b son iguales

//-1, 0, 1

const students = [
  { name: 'Jesús', email: 'jesus@academlo.com', score: 100 },
  { name: 'David', email: 'david@gmail.com', score: 70 },
  { name: 'Ernesto', email: 'ernesto@gmail.com', score: 34 }
]

console.log(orderStudentsByScore(students))