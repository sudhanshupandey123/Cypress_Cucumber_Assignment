Feature: Company Details

    Extracting Information Of Searched Company On Google By User
    Scenario Outline:  Company_Details
        Given User Is On Google Page
        When He Searched For "<company_name>" Company
        Then He Extracted Information Of That Company
        Examples:
            | company_name | 
            |sulopa    |
            |g7 Cr     |
            