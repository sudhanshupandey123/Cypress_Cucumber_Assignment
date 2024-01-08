import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
// const lib2 = require("../../common_ui_function")

const input_box="//input[@id='twotabsearchtextbox']"
const search_logo="//input[@value='Go']"
const filtering_rating_box="//div[@id='p_72-title']/following-sibling::ul//li"
const product_list="(//span[@aria-label='4.0 out of 5 stars']/parent::div/parent::div/parent::div//h2//a)"
const add_to_cart_button="(//div[@id='twisterPlusPriceSubtotalWWDesktop_feature_div']/following-sibling::div[@data-feature-name='addToCart'])[2]"
const closing_symbol="//*[@id='attach-close_sideSheet-link']"
const cart_box="//span[@id='nav-cart-count']"
const subtotal="//span[@id='sc-subtotal-amount-buybox']"
const active_cart_subtotal="//span[@id='sc-subtotal-amount-activecart']"

Given ('User is on Amazon Page', function opening_amazon_page()
    {
    cy.visit('https://www.amazon.in')
    }

    )

When ('He Searched For Products {string}', function searching_product(product){
    cy.xpath(input_box).type('Lenovo Laptops')
    cy.xpath(search_logo).click()
    
}
)

And ('He Filtered Products Based On Rating {string}',function filtering_product (rating_value){
    cy.xpath(filtering_rating_box).contains(`${rating_value} Stars & Up`).click()
    cy.log(this.parent_window)
})

Then ('He added product {string} to carts', function adding_product_to_cart(count_of_product){
    let filtered_product=[]
    // cy.xpath("//div[@class='a-section a-spacing-small a-spacing-top-small']//h2//a").each(($e1,index, $listitem)=>{
    //     if (index==parseInt(count_of_product)){
    //         for (let i of filtered_product){
    //             cy.log('Hi')
    //             cy.visit(i)
    //             cy.xpath("//input[@id='add-to-cart-button']").click()
    //             cy.wait(5000)
    //         }
    //         cy.xpath("//a[@id='attach-close_sideSheet-link']").click()
    //         return false
    //     }
    //     const url=$e1.prop('href')
        
    //     filtered_product.push(url)
    //     cy.log(filtered_product.length)
        
    // }
    
    // cy.xpath("//div[@class='a-section a-spacing-small a-spacing-top-small']//h2//a").each(function p(el, index, listitem){
    //     if (index<3){
    //         let url = el.prop('href')
    //         cy.visit(url)
    //         cy.xpath("(//input[@id='add-to-cart-button'])").click({multiple:true, force:true})
    //         cy.wait(2000)

    //     }
    //     else{
    //         return false
    //     }
    // })  
    
    let product="(//div[@class='a-section a-spacing-small a-spacing-top-small']//h2//a)"

    for (let i=1; i<=3; i++){
        cy.MultipleWindowHandle_For_Multiple_Link(`${product}[${i}]`).then((link_of_product)=>{
            cy.visit(link_of_product)
            cy.xpath("(//input[@id='add-to-cart-button'])").click({force:true})
            cy.wait(2000)
            cy.GET_URL("//input[@value='Go']").then((parent_window)=>{
                cy.visit(parent_window)
            })
        })
    }
})

And ('Summarized Price Should Equal To Actual Priice', ()=>{
    cy.xpath(cart_box).click()
    cy.InnerText(subtotal).then(subtotal_value=>{
        cy.InnerText(active_cart_subtotal).then(cart_total_value=>{
            cy.log(subtotal,cart_total_value)
        })
    })
})
    
    
    
    