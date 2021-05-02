const participants = ["Mary", "Kate"];
const sports = ["football", "hockey"];

function test(participants, sports) {
  /**
   * Подобно оператору new создает экземпляр объекта,
   * используя функцию-конструктор и параметры для нее
   */
  function constructFrom(fnConstructor, params) {
    const res = {};

    fnConstructor.bind(params.participants, params.sports);

    Object.setPrototypeOf(params, fnConstructor);

    return fnConstructor;
  }

  /**
   * Создает пары вида [’вид спорта’, ’имя участника’],
   * где первому виду спорта соответствует последний участник
   */
  function assignParicipants() {
    console.log(this, 222);
    const participants = this.participants;
    const sports = this.sports;
    const orderIndexes = [];
    let i = sports.length;

    while (i--) {
      orderIndexes.push(function () {
        return i;
      });
    }

    return orderIndexes.map((getSportIndex, i) => [
      sports[i],
      participants[getSportIndex()],
    ]);
  }

  function Contest(participants, sports) {
    this.participants = participants;
    this.sports = sports;
  }

  Contest.prototype.assignParicipants = assignParicipants;

  const contest = constructFrom(Contest, { participants, sports });

  console.log(contest, "bla");

  return contest.assignParicipants;
}

console.log(test(participants, sports));

// {
//   "participants": ["Mary", "Kate"],
//   "sports": ["football", "hockey"]
// }

// [["football","Kate"],["hockey","Mary"]]

// Folder([
//   ’file’,
//   ’ffffile’,
//   Folder([
//       ’file’,
//   ]),
//   Folder([
//       ’fiiile’,
//   ]),
//   Folder([
//       {},
//       null,
//       ’file’,
//       ’ffiillee’,
//       ’ffiillee’,
//   ]),
//   Folder([
//       Folder([
//           ’filllle’,
//           ’file’,
//           null,
//       ]),
//       {},
//       Folder([]),
//   ]),
// ]);

// [
//   ’ffffile’,
//   ’ffiillee’,
//   ’ffiillee’,
//   ’fiiile’,
//   ’filllle’,
// ]

// const arr = [
//   [1, 1, 0, 0, 0, 1, 0, 1, 1],
//   [1, 1, 0, 1, 0, 1, 0, 0, 0],
//   [0, 1, 0, 1, 0, 0, 0, 1, 1],
// ];

// function a(array) {
//   let obj = { ceil: 0, ﬂoor: 0, both: 0 };

//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 0; j < i.length; j++) {
//       console.log(j);
//     }
//   }
// }

// a(arr);
