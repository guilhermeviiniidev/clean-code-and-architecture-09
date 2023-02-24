import Ride from "../../src/3/Ride";

test("Deve calcular uma corrida no primeiro dia do mês", () => {
  const ride = new Ride();
  ride.addSegments(10, new Date("2021-03-01T10:00:00"));
  expect(ride.calculateFare()).toBe(15);
});
// test("Deve calcular uma corrida diurna em não domingo", () => {
//   expect(
//     calculateRide([{ distance: 10, date: new Date("2021-03-02T10:00:00") }])
//   ).toBe(21);
// });
// test("Deve calcular uma corrida noturna", () => {
//   expect(
//     calculateRide([{ distance: 10, date: new Date("2021-03-02T23:00:00") }])
//   ).toBe(39);
// });
// test("Deve calcular uma corrida diurna no domingo", () => {
//   expect(
//     calculateRide([{ distance: 10, date: new Date("2021-03-07T10:00:00") }])
//   ).toBe(29);
// });
// test("Deve calcular uma corrida noturna no domingo", () => {
//   expect(
//     calculateRide([{ distance: 10, date: new Date("2021-03-07T23:00:00") }])
//   ).toBe(50);
// });
// test("Não deve calcular uma corrida com distância igual a zero", () => {
//   expect(() => {
//     calculateRide([{ distance: -10, date: new Date("2021-03-01T10:00:00") }]);
//   }).toThrow(new Error("Invalid distance"));
// });
// test("Não deve calcular uma corrida com data inválida", () => {
//   expect(() => {
//     calculateRide([{ distance: 10, date: new Date("abcdef") }]);
//   }).toThrow(new Error("Invalid date"));
// });
// test("Deve calcular uma corrida com valor mínimo", () => {
//   expect(
//     calculateRide([{ distance: 3, date: new Date("2021-03-01T10:00:00") }])
//   ).toBe(10);
// });
