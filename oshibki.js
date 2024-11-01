// 1. Найти ошибки в коде
// Разработчик Василий торопился на встречу с коллегами, поэтому быстро написал программу. Код получился неидеальным. Помогите Василию исправить ошибки в коде:

// module.exports = 
function func(participants, sports) {
  /**  
   * Подобно оператору new создает экземпляр объекта,  
   * используя функцию-конструктор и параметры для нее  
   */
  function constructFrom(fnConstructor, params) {
    const res = {};

    fnConstructor.bind(res).call(params);

    Object.setPrototypeOf(res, fnConstructor);
    return res;
  }

  /**  
   * Создает пары вида [’вид спорта’, ’имя участника’],  
   * где первому виду спорта соответствует последний участник  
   */
  
  function assignParicipants() {
    const participants = this.participants;
    const sports = this.sports;
    const orderIndexes = [];
    let i = sports.length;

    while (i--) {
      orderIndexes.push(function () {
        return i;
      });
    }

    return orderIndexes.map(
      (getSportIndex, i) => [sports[i], participants[getSportIndex()]]
    );
  }

  function Contest(participants, sports) {
    this.participants = participants;
    this.sports = sports;
  }

  Contest.prototype.assignParicipants = assignParicipants;

  const contest = constructFrom(Contest, participants, sports);

  return contest.assignParicipants();
}
console.log(func());


// И отправить исправленный вариант в качестве решения.

// {
//   "participants": ["Mary", "Kate"],
//   "sports": ["football", "hockey"]
// }

// [["football","Kate"],["hockey","Mary"]]


