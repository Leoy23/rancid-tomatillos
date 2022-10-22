describe('Page Load', () => {

  it('should have a heading of Rancid Tomatillos', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').contains('Rancid Tomatillos')
  })

  it('should return an error message if a problem is wrong with the fetch', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',  {
      statusCode: 500
    })
    cy.get('.App').contains('Oops! Something went wrong!')
    
  })

  it('should fetch movie data', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 200
    })
    cy.get('[href="/movies/337401"] > .movie-cards > h3').contains('Mulan')
  })

})

describe('Search bar functionaltiy', () => {
  it('should display a search bar on the home view', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/') 
    cy.get('input')
  })

  it('should dipslay corresponding movie titles related to search input', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[type="text"]').type('mulan').should('have.value', 'mulan')
  })

  it('should clear input field once movie is selected', () => {
    
  })

  it('should display an error message when the input does not match movie titles', () => {

  })
})