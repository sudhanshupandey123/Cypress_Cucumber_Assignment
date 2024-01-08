import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

var csvJson=require('csvjson')

var fs=require('fs')







let Company_Details=[]

Given('User Is On Google Page', function opening_google_page(){
    cy.visit("https://www.google.com")

})

When('He Searched For {string} Company', function searching_for_product(company_name){
    cy.xpath("//*[@id='APjFqb']").type(`${company_name}{enter}`)
})

Then('He Extracted Information Of That Company', function extracting_information(){

    let Company_Details_Object={}
    let xpath_company={"Company_Name":"//div[@role='heading' and @aria-level='2' and @data-attrid='title']",
                        "Company_Rating":"//*[@class='Aq14fc']","Company_Review":"//span[@class='hqzQac']//a//span","Company_Address":"//span[@class='LrzXr']"}
    for (let column in xpath_company){
        try{
            cy.InnerText(`${xpath_company[column]}`).then(value=>{
                Company_Details_Object[`${column}`]=value 
            })
        }
        catch{
            Company_Details_Object[column]=null;
        }
    }
        
    
        // cy.get('@myValue').then(text_value=>{
        //     Company_Details_Object[`${column}`]=text_value

        // })
        
    
    
    Company_Details.push(Company_Details_Object)

    
})

after(()=>{
    //Making Json File Of Array
    cy.writeFile("company.json", Company_Details,'utf-8')
    
    cy.readFile('company.json','utf-8').then((fileContent)=>
    {
        const csvData=csvJson.toCSV(fileContent,{
            header:'key'
        });

        cy.writeFile('XYZ.csv',csvData)
        
    })
})