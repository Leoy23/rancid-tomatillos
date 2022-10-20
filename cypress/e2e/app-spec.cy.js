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