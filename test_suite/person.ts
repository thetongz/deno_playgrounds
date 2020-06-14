class Person {
  firstName: string;
  lastName: string;
  favoriteNumber: number;

  constructor(firstName: string, lastName: string, favoriteNumber: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteNumber = favoriteNumber;
  }

  public getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public getFavoriteNumber() {
    return this.favoriteNumber;
  }
}

export default Person;