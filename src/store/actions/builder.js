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