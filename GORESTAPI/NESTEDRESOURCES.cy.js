describe('Testing Nested Resources Gorest API', () => {
   
//    // Membuat user post dengan menggunakan AUTH token yang disediakan
    it('Create user posts with Auth', () => {
        cy.request({ 
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1570/posts',
            
            body:  {
                     "title": "Debeo qui et voro calamitas valetudo dolor optio doloribus eveniet sit strenuus arca thalassinus nihil volup.",
                     "body": "Spes vox debitis. Atrox accusator tego. Bonus surgo peior. Dolorum aegre deleniti. Arcus alii sapiente. Et acerbitas saepe. Timor sui volutabrum. Cibo conicio bardus. Totam defluo aperio. Comedo patria attonbitus. Voluptas contabesco consequatur. Taceo demum despirmatio. Defluo crastinus voluntarius. Thalassinus incidunt cur. Sed tonsor tenax. Dolore subiungo avoco. Voluntarius tumultus expedita. Sperno avaritia minima. Civis vigilo reprehenderit. Vulariter magni adflicto. Pectus autem sperno.",        
                    },
               })
         
          cy.get('@postWithAuth').its('status').should('equal', 200)    
          
    });

   // Membuat user Comments dengan menggunakan AUTH Token yang disediakan
    it('Create user Comments with Auth', () => {
        cy.request({ 
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/posts/1570/comments',
            
            body: {
                    "post_id" : 37156,   
                    "name": "Gudakesha Khanna",
                    "email": "Khanna Gudakesha@wehner.test",
                    "body": "Vel adipisci dolor. Voluptatem quas temporibus"           
                  },
              })

          cy.get('@postWithAuth').its('status').should('equal', 200)
                 
    });
  
      // Membuat user todos menggunakan AUTH Token yang disediakan
        it('Create user todos with Auth', () => {
        cy.request({ 
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1635/todos',
         
            body: {
       
                "title": "Debeo qui et voro calamitas valetudo dolor optio doloribus eveniet sit strenuus arca thalassinus nihil volup.",
                "body": "Spes vox debitis. Atrox accusator tego. Bonus surgo peior. Dolorum aegre deleniti. Arcus alii sapiente. Et acerbitas saepe. Timor sui volutabrum. Cibo conicio bardus. Totam defluo aperio. Comedo patria attonbitus. Voluptas contabesco consequatur. Taceo demum despirmatio. Defluo crastinus voluntarius. Thalassinus incidunt cur. Sed tonsor tenax. Dolore subiungo avoco. Voluntarius tumultus expedita. Sperno avaritia minima. Civis vigilo reprehenderit. Vulariter magni adflicto. Pectus autem sperno.",
                "status": "completed"
                },
         })
          
          cy.get('@postWithAuth').its('status').should('equal', 201)
          
    });
  
  // Membuat user post dengan menggunakan AUTH Token yang disediakan
    it('Retreive user Post with Auth', () => {
        cy.request({ 
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1570/posts',

            headers: {
            authorization: 'Bearer af04f96e0ee80780c8c81816a525c0edf3a48b0805f894799f884bcadb1ad706'
             },
            
          cy.get('@postWithAuth').its('status').should('equal', 200)
              
    });
  
   // Membuat user Comments dengan menggunakan AUTH Token yang disediakan
     it('Retreive user Comments with Auth', () => {
        cy.request({ 

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/posts/1570/comments',

            headers: {
            authorization: 'Bearer af04f96e0ee80780c8c81816a525c0edf3a48b0805f894799f884bcadb1ad70'
             },
        
          cy.get('@postWithAuth').its('status').should('equal', 200)
  
    });
  
   // Mengambil user todos dengan menggunakan AUTH Token yang disediakan
    it('Retreive user todos with Auth', () => {
        cy.request({ 

            method: 'GET',
            url: 'https://gorest.co.in//public/v2/users/1570/todos',

            headers: {
            authorization: 'Bearer af04f96e0ee80780c8c81816a525c0edf3a48b0805f894799f884bcadb1ad70'
             },
           
          cy.get('@postWithAuth').its('status').should('equal', 200)
               
    });   
});
