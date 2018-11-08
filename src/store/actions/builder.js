import * as actionTypes from './actionTypes';

export const selectGridType = (gridType) => {
    return {
        type: actionTypes.SELECT_GRID_TYPE,
        gridType: gridType
    }
}

export const dropItem = (newItem) => {
    return {
        type: actionTypes.DROP_ITEM,
        newItem: newItem
    }
}

export const changeStyleItem = (style, value) => {
    return {
        type: actionTypes.CHANGE_STYLE_ITEM,
        style: style,
        value: value
    }
}

export const selectItem = (item) => {
    return {
        type: actionTypes.SELECT_ITEM,
        item: item
    }
}

export const changeContentItem = (item, settings) => {
    return {
        type: actionTypes.CHANGE_CONTENT_ITEM,
        item: item,
        settings: settings
    }
}

export const templateInJson = () => {
    return {
        type: actionTypes.TEMPLATE_IN_JSON
    }
}

export const jsonInTemplate = (json) => {
    return {
        type: actionTypes.JSON_IN_TEMPLATE,
        json: json
    }
}

export const saveHtml = (html) => {
    return {
        type: actionTypes.SAVE_HTML,
        html
    }
}

export const reorderColumnItems = (newColumn, columnId, rowId) => {
    return {
        type: actionTypes.REORDER_COLUMN_ITEMS,
        newColumn,
        columnId,
        rowId
    }
} 


export const createWebsiteStructureStart = () => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE_START
    }
}

export const createWebsiteStructureSuccess = (structure) => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE_SUCCESS,
        structure
    }
}

export const createWebsiteStructureFail = (error) => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE_FAIL,
        error
    }
}

export const createWebsiteStructure = () => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE
    }
}