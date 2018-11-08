export const getToken = state => state.auth.token
export const getUserId = state => state.dashboard.userProfile.id
export const getTemplateId = state => state.templates.selectedTemplate.id
export const getWebsiteId = state => state.templates.website.id
export const getJson = state => state.builder.json
export const getHtml = state => state.builder.html