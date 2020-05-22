# Student Practice

## SUT

- [high-scores.js](https://github.com/LabsAdemy/WebTesting_unit_Labs/blob/master/src/unit/tasks/triangle.js)

## Functional tests to be done

### Beginner

- **FEATURE:**: Determine if a triangle is equilateral, isosceles, or scalene.
  - _As a_ math student
  - _I want to_ check the kind of any triangle
  - _So_ I can learn about its geometry
    - **Scenario:** I have a valid triangle with three sides
      - _Given_ a Triangle class called with three legal values
      - _When_ i ask for the kind
      - _Then_ should return a string
    - **Scenario:** I have a valid triangle with three equal sides
      - _Given_ a Triangle class called with three equal values
      - _When_ i ask for the kind
      - _Then_ should return _equilateral_
    - **Scenario:** I have a valid triangle with two equal sides
      - _Given_ a Triangle class called with only first two equal values
      - _When_ i ask for the kind
      - _Then_ should return _isosceles_
      - _Given_ a Triangle class called with only last two equal values
      - _When_ i ask for the kind
      - _Then_ should return _isosceles_
      - _Given_ a Triangle class called with only first and last equal values
      - _When_ i ask for the kind
      - _Then_ should return _isosceles_
    - **Scenario:** I have a valid triangle with no equal sides
      - _Given_ a Triangle class called with no equal values
        - _When_ i ask for the kind
        - _Then_ should return _scalene_

### Boss

<!-- https://jestjs.io/docs/en/expect#tothrowerror  -->

- **Scenario:** I have an invalid triangle

  - _Given_ a Triangle class called with ceros
  - _When_ i ask for the kind
  - _Then_ should throw an error
  - _Given_ a Triangle class called negative values
  - _When_ i ask for the kind
  - _Then_ should throw an error
  - _Given_ a Triangle class called with no Triangle inequality values
  - _When_ i ask for the kind
  - _Then_ should throw an error

- [unit-highscores](https://github.com/LabsAdemy/WebTesting_unit_Labs/blob/master/src/unit/tasks/triangle.spec.js)
