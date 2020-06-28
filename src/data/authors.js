/* eslint-env node */
const PropTypes = require('prop-types')

module.exports = {
  propType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  data: [
    {
      id: 1,
      name: 'COVID Translate Team',
      link: '/about',
    },
    {
      id: 2,
      name: 'AUPL Team',
      link: 'mailto:seungcheol.ohk@sciencespo.fr',
    },
    {
      id: 3,
      name:
        'African Future Foundation (AFF) & Korean Global Health Forum (KGHF)',
      link: 'https://sites.google.com/view/kghf-covid19',
    },
  ],
}
