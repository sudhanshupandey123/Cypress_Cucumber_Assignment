// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress-xpath" />
/// <reference types="Cypress" />


import 'cypress-file-upload'


//Getting InnerText Value

Cypress.Commands.add('InnerText', (locator, retry=3, timeout=10000)=>
{
    // for (let i=1; i<=retry; i++){
    //     try{
    //         cy.xpath(locator).invoke('text').then(text =>{
    //             cy.wrap(text).as('myValue')
    //         })
    //         break;
    //     }
    //     catch
    //     {
    //         continue;
    //     }
    // }

    for (let i=1; i<=retry; i++){
        try{
            cy.xpath(locator).then((text_value)=>{
                return text_value.text()
            })
        }
        catch{
            continue;
        }
    }

})



//Handling Multiple Link Click On Same Tab

Cypress.Commands.add("MultipleWindowHandle_For_Multiple_Link", (locator, retry=3, timeout=10000)=>{
    for(let i=1; i<=retry; i++){
        try{
            cy.xpath(locator).then((all_item)=>{
                return all_item.prop('href')
                })
            }
        catch{
            continue;
        }
    }  
   

})


// Getting URL Of Specific Page
Cypress.Commands.add('GET_URL', (locator, retry=3, timeout=10000)=>{
    for (let i=1; i<=retry; i++){
        try{
            cy.xpath(locator).click({force:true})
            return cy.url()
            
        }
        catch{
            continue;
        }
    }
})












