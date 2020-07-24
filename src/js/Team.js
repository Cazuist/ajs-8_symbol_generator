export default class Team {
  constructor() {
    this.members = new Set([
      { name: 'Bowman' },
      { name: 'Swordsman' },
      { name: 'Magician' },
      { name: 'Daemon' },
      { name: 'Bowman' },
    ]);
  }

  *[Symbol.iterator]() {
    let charList = Array.from(this.members);
    
    for (let char of charList) {
      yield char;
    }
  }
}
