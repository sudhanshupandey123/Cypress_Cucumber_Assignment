Feature: New Facility 

    User is able to add products to carts or not
    Scenario Outline: Amazon Cart
        Given User is on Amazon Page
        When He Searched For Products "<product_name>"
        And He Filtered Products Based On Rating "<rating_value>"
        Then He added product "<count_of_product>" to carts
        # And Summarized Price Should Equal To Actual Priice
    Examples:
            | product_name | rating_value | count_of_product |
            | Lenovo Laptop  | 4          | 3                |


