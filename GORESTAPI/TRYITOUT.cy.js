/// <reference types="cypress" />

describe('Testing gorest API', () =>{

    it('Validate POST of Gorest API', () => {
        cy.request('https://gorest.co.in/public/v2/users/').as('post')
        cy.get('@post').its('body').should('contain'})
    });
    
    it('Validate POST of Gorest API with Auth Token', () => {

        cy.request({ 
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
                        authorization: 'Bearer af04f96e0ee80780c8c81816a525c0edf3a48b0805f894799f884bcadb1ad706'
                    body: {
                            "name": "gugun",
                            "email": "gun@gmail.com",
                            "gender": "male",
                            "status": "inactive"
                           },
                   })
          cy.get('@postWithAuth').its('status').should('equal', 200);
    })

    it('Validate GET of Gorest API without Auth Token', () => {
        cy.request({ 
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/1562',
                body: {
                    "name": "Gugun",
                     "email": "gun@gmail.com",
                     "gender": "male",
                     "status": "active"
                     },
                })
          cy.get('@postWithoutAuth').its('status').should('equal', 200);
        })

    it('Validate PUT of Gorest API with auth token', () => {
        cy.request({ 
           headers:{
                     authorization: 'Bearer af04f96e0ee80780c8c81816a525c0edf3a48b0805f894799f884bcadb1ad706'
                     method: 'PUT',
                     url: 'https://gorest.co.in/public/v2/users/1570',
                     Body: {
                             "id": 1570,
                             "name": "Mrs. Triloki Kakkar",
                             "email": "kakkar_triloki_mrs@wisoky.biz",
                             "gender": "male",
                             "status": "inactive" 
                       },
                })
             cy.get('@puttWithoutAuth').its('status').should('equal', 200);
        })
    
    it('Validate DELETE of Gorest API with token', () => {
        cy.request({ 
           headers: {
                      authorization: 'Bearer af04f96e0ee80780c8c81816a525c0edf3a48b0805f894799f884bcadb1ad706
                      method: 'DELETE',
                      url: 'https://gorest.co.in/public/v2/users/1570'
                     }
                })
         cy.get('@deleteWithAuth').its('status').should('equal' ,204)
     })
});
