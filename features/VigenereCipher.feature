Feature: Testing

  Scenario Outline: Pre Encryption
    Given Vigenere Cipher Is Open
     When I enter "<Pre_Encryption_Test>" For Vigenere
     When I enter "<Number_Of_Shifts>" Into Number Of Shifts For Vigenere
     Then the pre result should equal "<Post_Encryption_Result>" For Vigenere
     Examples:
     | Pre_Encryption_Test | Number_Of_Shifts | Post_Encryption_Result |
     | test                | example          | XBSF                   |
     | hello               | example          | LBLXD                  |
     | Ceaser              | cipher           | EMPZII                 |
     | Ceaser Chiper       | cipher           | EMPZIIVKWPTVT          |
     

  Scenario Outline: Post Encryption
    Given Vigenere Cipher Is Open
     When I enter "<Post_Encryption_Result>" Into Post_Encryption_Result For Vigenere
     When I enter "<Number_Of_Shifts>" Into Number Of Shifts For Vigenere
     Then the post result should equal "<Pre_Encryption_Test>" For Vigenere
     Examples:
     | Pre_Encryption_Test | Number_Of_Shifts | Post_Encryption_Result |
     | TEST                | example          | XBSF                   |
     | HELLO               | example          | LBLXD                  |
     | CEASER              | cipher           | EMPZII                 |


