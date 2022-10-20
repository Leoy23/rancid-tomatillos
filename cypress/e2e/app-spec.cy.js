describe('Page Load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have a heading of Rancid Tomatillos', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  })
  it('should fetch movie data', () => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    cy.get('img')
    cy.get('h3')
    cy.get('p')
  })
})