describe('POM TASK 2 LOCAL',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal','Swag Labs')
    })
    it('VERIFY USER CAN LOGIN SUCCESSFULLY',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
        })
    })
    it('VERIFY USER CANNOT LOGIN WITH INVALID PASSWORD',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.invalidPassword)
            cy.get(el.loginButton).click()
        })
    })
    it('VERIFY THAT HOPE PAGE CONTAINS PRODUCTS AND PRODUCTS IS VISIBLE',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
        })
    })
    it('VERIFY THAT USER CAN ADD ITEMS TO CART',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
        })
    })
    it('VERIFY THE CART CONTAINS THE ITEMS ADDED',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()

        })
    })
    it('VERIFY THAT CART CONTAINS 5 ITEMS',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()

        })
    })
    it('VERIFY USER CAN PROCEED WHEN CLICK ON CHECKOUT',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()
            cy.get(el.checkout).click()

        })
    })
    it('VERIFY USER CAN INPUT FIRST NAME',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()
            cy.get(el.checkout).click()
            cy.get(el.firstNameField).type('Michael')

        })
    })
    it('VERIFY USER CAN INPUT LAST NAME',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()
            cy.get(el.checkout).click()
            cy.get(el.firstNameField).type('Michael')
            cy.get(el.lastNameField).type('Akintayo')
        })
    })
    it('VERIFY USER CAN INPUT LAST ZIP CODE',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()
            cy.get(el.checkout).click()
            cy.get(el.firstNameField).type('Michael')
            cy.get(el.lastNameField).type('Akintayo')
            cy.get(el.postalCode).type(100001)

        })
    })
    it('VERIFY USER CAN PROCEED WHEN CLICK ON CONTINUE',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()
            cy.get(el.checkout).click()
            cy.get(el.firstNameField).type('Michael')
            cy.get(el.lastNameField).type('Akintayo')
            cy.get(el.postalCode).type(100001)
            cy.get(el.continue).click()

        })
    })
    it('VERIFY USER CAN PROCEED WHEN CLICK ON FINISH',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()
            cy.get(el.checkout).click()
            cy.get(el.firstNameField).type('Michael')
            cy.get(el.lastNameField).type('Akintayo')
            cy.get(el.postalCode).type(100001)
            cy.get(el.continue).click()
            cy.get(el.finish).click()

        })
    })
    it('VERIFY USER CAN LOG OUT',()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.products).should('be.visible')
            cy.get(el.backPack).click()
            cy.get(el.bikeLight).click()
            cy.get(el.boltTshirt).click()
            cy.get(el.Onesie).click()
            cy.get(el.tshirtRed).click()
            cy.get(el.cart).click()
            cy.get(el.checkout).click()
            cy.get(el.firstNameField).type('Michael')
            cy.get(el.lastNameField).type('Akintayo')
            cy.get(el.postalCode).type(100001)
            cy.get(el.continue).click()
            cy.get(el.finish).click()
            cy.get(el.backHome).click()
            cy.get(el.menu).click()
            cy.get(el.logOut).click()          

        })
    })

})