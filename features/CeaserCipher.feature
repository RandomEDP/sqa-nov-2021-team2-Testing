Feature: Testing

  Scenario Outline: Pre Encryption
    Given Ceaser Cipher Is Open
     When I enter <"Pre_Encryption_Test">
     When I enter <"Number_Of_Shifts"> Into Number Of Shifts
     Then the result should equal <"Post_Encryption_Result">
     Examples:
     | Pre_Encryption_Test | Number_Of_Shifts | Post_Encryption_Result |
     | test                | 1                | uftu                   |

