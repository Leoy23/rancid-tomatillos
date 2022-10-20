describe('the current movie page', () => {
  
 it('should be able to click on a movie to show it\'s details', () => {
  cy.visit('http://localhost:3000/movies/597398')
    .get('img').should('have.class', 'backdrop-image')
    .get('img').should('have.class', 'poster-image')
    .get('h3').contains('a plane')
    .get('button').should('be.visible')
    .get('h3').contains('2019/11/15')
    .get('h3').contains('Rating: 4.2/10')
    .get('h3').contains('$0')
    .get('h3').contains('75')
    .get('h3').contains('Animation')
    .get('h1').contains('Rancid Tomatillos')

 })
 it('should be able to get back to home by clicking the "back button"', () => {
  cy.visit('http://localhost:3000/movies/597398')
  .get('button').click()
  .get('p')

 })
 it('should be able to get back to home by clicking the logo', () => {
  cy.visit('http://localhost:3000/movies/597398')
  .get('h1').contains('Rancid Tomatillos').click()
  .get('p')
 })
})