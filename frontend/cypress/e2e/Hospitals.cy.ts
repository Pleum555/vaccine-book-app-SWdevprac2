import { PromoteCard } from "@/components/PromoteCard"

describe('Hospitals', () => {
  it('Should fetch hospitals and display', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:5000/api/v1/hospitals'}, req => {
        delete req.headers['if-none-match']      
    }).as('getHospitals')

    cy.visit('/')
    cy.get('video').should('exist')
    cy.get('video').should('have.prop', 'paused', false)
    cy.wait(5000)
    cy.get('#playPauseButton').click()
    cy.get('video').should('have.prop', 'paused', true)
    cy.get('#hospital-select-button').click()
    cy.wait(10000)
    cy.get('#hospital-catalog').find('img').should('have.length.at.least', 3);

    // // Visit Homepage
    // cy.visit('/')
    // cy.get('a[href=/hospital]').should('exist')
    // cy.get('a[href=/hospital]').click()

    // // At Hospital page
    // var hospitals:string[]=[]
    // cy.wait(2000)
    // cy.wait('@getHospitals').should( ({request, response}) => {
    //   //Assert Results
    //   expect(response?.statusCode).equal(200)
    //   expect(response?.body.data).be.not.null
    //   expect(response?.body.data).to.have.length(response?.body.count)
    //   hospitals = response?.body.data
    // }).then(()=>{
    //   hospitals.forEach( hospital => {
    //     cy.contains(hospital.model).should('be.visible')
    //   })
    // })
  })
})