# Student Practice

## Funcional tests to be done

- **FEATURE:** Calculate the Hamming Distance between two DNA strands.
  - _Aa a:_ biologist studying cell divisions
  - _I want to:_ compare two strands of DNA and count the differences between them
  - _So:_ I can see how many mistakes occurred.
  - **Scenario:** we have two valid sequences of equal length
  - **Example:** ACGT , ACGT => 0 ; ACGT, TGCA => 4
    - _Given_ a Hamming Calculator that receives two valid strings
    - _When_ I compare two empty strands
    - _Then_ should return cero
    - _When_ I compare two single letter identical strands
    - _Then_ should return cero
    - _When_ I compare two single letter different strands
    - _Then_ should return one
    - _When_ I compare two long different strands
    - _Then_ should return more than cero
    - _And Then_ should return less than or equal of strands length
    - _And Then_ should return exactly the difference
  - **Scenario:** we have two invalid sequences of different lengths
  - **Example:** ACGT , ACG => Err ; ACG, ACGT => Err
    - _Given_ a Hamming Calculator with a that receives two invalid strings
    - _When_ the first strand is longer
    - _Then_ should throw an error
    - _When_ the second strand is longer
    - _Then_ should throw an error

## SUT To be coded
