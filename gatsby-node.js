/* eslint-env node */

exports.createPages = async ({ actions: { createPage } }) => {
  const { data: UPDATES } = require('./src/data/updates')

  UPDATES.forEach((update) => {
    createPage({
      path: `/updates/${update.slug}`,
      component: require.resolve('./src/templates/UpdateTemplate.js'),
      context: { id: update.id },
    })
  })
}
