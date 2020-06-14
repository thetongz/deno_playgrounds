import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Person from "./person.ts";

Deno.test("Person: get name", () => {
  const johnDoe: Person = new Person("John", "Doe", 12);
  const expectedName: string = "John Doe";

  assertEquals(johnDoe.getName(), expectedName);
});

Deno.test("Person: get favorite number", () => {
    const johnDoe: Person = new Person("John", "Doe", 12);
    const expectedFavoriteNumber = 12;
  
    assertEquals(johnDoe.getFavoriteNumber(), expectedFavoriteNumber);
});