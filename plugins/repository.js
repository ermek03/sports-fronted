import createRepository from '~/api/Repository'

export default ({app, $axios}, inject) => {
  const repositories = createRepository($axios, app)
  inject('repositories', repositories)
}
