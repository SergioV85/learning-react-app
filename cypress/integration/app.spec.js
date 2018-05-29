describe('React Learning App', () => {
  context('Starting page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
    it('should have <title>', () => {
      cy.title().should('include', 'React Learning App')
    });
    it('should have logo', () => {
      cy.get('.c-header__logo').should('contain', 'netflixroulette')
    });
    it('should show search input', () => {
      cy.get('.c-search-panel__input').should('have.attr', 'placeholder', 'Find your movie')
    });
    it('should show search type toggler', () => {
      cy.get('.c-toggle-switcher-buttons')
        .contains('Title').should('have.class', 'active')
    });
    it('should show Search button', () => {
      cy.get('.c-search-panel__search-button').should('contain', 'Search')
    });
    it('should not status bar', () => {
      cy.get('.c-page__status-bar').should('be.empty')
    });
    it('should show empty list', () => {
      cy.get('.c-movies-list').should('have.class', 'c-movies-list--empty')
    });
    it('should show footer', () => {
      cy.get('.c-footer__logo').should('contain', 'netflixroulette')
    });
  });
  context('Search', () => {
    it('should allow to enter value in input', () => {
      cy.get('.c-search-panel__input').type('Comedy');
    });
    it('should allow to change type', () => {
      cy.get('.c-search-panel__search-type-button--title.genres').click();
      cy.get('.c-toggle-switcher-buttons')
        .contains('Title').should('not.have.class', 'active')
      cy.get('.c-toggle-switcher-buttons')
        .contains('Genres').should('have.class', 'active')
    });
  });
  context('Request and view List', () => {
    beforeEach(() => {
      cy.server();
      cy.route('GET', 'http://react-cdp-api.herokuapp.com/movies*')
        .as('getMovies');
    });

    it('should send request to server after pressing button', () => {
      cy.get('.c-search-panel__search-button').click();
      cy.wait('@getMovies').its('status').should('eq', 200);
    });
    it('should show status bar after getting response with data', () => {
      cy.get('.c-status-bar__movies-quantity').should('contain', '10 movies found');
    });
    it('should show a list with movies', () => {
      cy.get('.c-movies-list__collection').children().should('have.length', 10);
    });
    it('should remove empty class from a list with movies', () => {
      cy.get('.c-movies-list').should('not.have.class', 'c-movies-list--empty');
    });
    it('movie card should have a proper class', () => {
      cy.get('.c-movies-list__collection > div').first().should('not.have.class', 'c-movie-details-details');
    });
    it('should send new request after changing sort type', () => {
      cy.get('.c-toggle-switcher-button.release_date').click();
      cy.wait('@getMovies').its('status').should('eq', 200);
    });
    it('should send new request after changing sort order', () => {
      cy.get('.c-toggle-switcher-button.asc').click();
      cy.wait('@getMovies').its('status').should('eq', 200);
    });
  });
  context('Open movie details', () => {
    it('should open movie details in header', () => {
      cy.get('.c-movie-details-card').first().click();
      cy.get('.c-header').next().should('have.class', 'c-movie-details-full');
    });
    it('movie details should have a proper class', () => {
      cy.get('.c-movie-details-full').should('not.have.class', 'c-movie-details-card');
    });
    it('should not show search panel', () => {
      cy.get('.c-header').siblings().should('not.have.class', 'c-search-panel');
    });
    it('should return to list on pressing button', () => {
      cy.get('.c-header__back-button').first().click();
      cy.get('.c-header').siblings().should('not.have.class', 'c-movie-details-full');
      cy.get('.c-header').siblings().should('have.class', 'c-search-panel');
    });
  });
})