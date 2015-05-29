Feature: In order to know details about POI
  As a reg/subscriber user
  I should be able to view POI on map



  Scenario: View Clustered POI
    Given im on Map with clusttered POIs on map
    When I click on clustured POI
    Then I should be able to see clustered POI split to precise POIs on map.

  @Before
  Scenario: Login to the get a map
    Given I am on getamap app
    When I login as registered user

  @WIP
  Scenario Outline: Verify a POI for Castles
    Given I am on getamap app
    When I login as registered user
    And I Select POI "Castles And Attractions"
    Then I should be able to verify "<POI Text>" on "<POI Index>"

    Examples: 
      | POI Index | POI Text                     					|
      | 0         | Fourteenth-century home of the Duke of Hamilton |
      | 2         | The house is the childhood home  |
      | 3         | No description available     |

  @Current
  Scenario Outline: View POI summary Box different zoom levels
    Given I am on getamap app
    When I login as registered user
    And I Select POI "Castles And Attractions"
    Then I should be able to verify POI with "<POI Index>" and "<POI Text>" on Zoomstack"<mapstack>"

    Examples: 
      | POI Index | mapstack | POI Text               |
      | 16        | 0        | Clan MacAlister Centre |
      | 16        | 1        | Clan MacAlister Centre |
      | 5         | 2        | Sorn Castle and Garden |
      | 1         | 3        | Clan MacAlister Centre |
      | 0         | 4        | Medieval tower house |
      | 0         | 5        | Medieval tower house |
      | 0         | 6        | Medieval tower house |
      | 0         | 7        | Medieval tower house |
      | 0         | 8        | Medieval tower house |
      | 0         | 9        | Medieval tower house |
      | 0         | 10       | Medieval tower house |

  
  Scenario Outline: POI View info link
    Given I am on getamap app
    When I login as registered user
    And I Select POI "Castles And Attractions"
    And I click on view info link from POI "<POI Index>"
    Then I should be able to see side bar with POI detail information "<POI Address1>" "<POI Address2>" "<POI Address3>" "<POI Address4>"

    Examples: 
      | POI Index | POI Address1  | POI Address2 | POI Address3          | POI Address4 |
      | 14         | Castle Street | Stranraer    | Dumfries And Galloway | Scotland     |


  Scenario Outline: Veirfy POI Clusters
    Given I am on getamap app
    When I login as registered user
    And I Select POI "Castles And Attractions"
    And I click on POI Cluster with index <Cluster Index>
    Then I should be able to verify the <POI Count> POI present on the page

    Examples: 
      | Cluster Index | POI Count |
      |  13           | 2         |

  
  Scenario: POI summary box behaviour
    Given I am on getamap app
    When I login as registered user
    And I Select POI "Castles And Attractions"
    And I click on POI with index 3
    Then I should be able to close summary box by clicking on x button

  
  Scenario: Close summary box by clicking on another POI
    Given I am on getamap app
    When I login as registered user
    And I Select POI "Castles And Attractions"
    And I click on POI with index 3
    Then I should be able to verify POI "Medieval tower house"
    And I click on POI with index 4
    And I should not be able to see on POI "Medieval tower house"

  Scenario: View website on new page
    Given I am on POI side bar
    When I click on visit website
    Then I should be able to open website in new page

  Scenario: View website on moible
    Given I am on POI side bar
    When I click on visit website
    Then I should be able to open website in preview page

  Scenario: POI side bar close when click on another POI
    Given I am on POI side bar
    When I click on another POI on map
    Then POI side bard should be closed by itself

  Scenario: POI side can be closed by user
    Given I am on POI side bar
    When I click on cross button on POI side bar top right
    Then POI side bar should be closed

  Scenario: POI side bar to close on summary box
    Given I am on POI  side bar
    When I close POI summary box on map
    Then I should close POI side bar itself

  Scenario: View POI from diff POI categories
    Given Im on Map features
    When I select different POI category
    Then I should be able to view POI on map.
