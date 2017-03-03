//Loading Actions
export const LOADING_RESOURCE = 'LOADING_RESOURCE'
export const DONE_LOADING = 'DONE_LOADING'
export const loadResource = () => ({ type: LOADING_RESOURCE })
export const doneLoading = () => ({ type: DONE_LOADING })