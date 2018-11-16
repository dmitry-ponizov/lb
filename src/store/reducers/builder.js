import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'
import uuid from 'uuid';

const initialState = {
    gridType: null,
    rows: [],
    layouts: {
        'oneColumn': 1,
        'twoColumns': 2,
        'threeColumns': 3,
        'fourColumns': 4,
        'twoUneven': 2,
        'threeUneven': 3
    },
    tools: [
        { id: uuid.v4(),
            category:'general',
            name: 'Text',
            styles:{ overflow: 'hidden', width: '100%',color: 'black'}, 
            content: 'This is a new Text block. Change the text.'
        },
        { id: uuid.v4(), name: 'Image', category:'any',  bgcolor: 'pink' },
        { id: uuid.v4(), name: 'Link', category:'any',  bgcolor: 'skyblue' }
    ],
    selectedItem: null,
    json: null,
    html: null,
    loading: false,
    error: null,
    widthWorkspace: '100%'
}

const selectedGird = (state, action) => {

    const layouts = Object.assign({}, state.layouts)

    let newRows = [...state.rows]

    let row = {};

    row[action.gridType] = [];
    
    for (let i = 0; i < layouts[action.gridType]; i++) {
        row[action.gridType].push({'items':{}, itemsIds: []})
    }

    newRows.push(Object.assign({}, row))

    return updateObject(state, { rows: newRows, gridType: action.gridType  })

}


const dropItem = (state, action) => {
 
    const tools = state.tools

    let tool = {...tools.find(tool => tool.id === action.newItem.id)}

    tool.id = uuid.v4();

    let rows = [...state.rows]

    rows[action.newItem.rowNumber][action.newItem.gridType][action.newItem.columnName]['items'][tool.id] = tool 

    rows[action.newItem.rowNumber][action.newItem.gridType][action.newItem.columnName]['itemsIds'].push(tool.id)
    
    return updateObject(state, { rows: rows })
}

const changeStyleItem = (state, action) => {
    const selectedItem = Object.assign({}, state.selectedItem)
    let rows = [...state.rows]
    let styles = Object.assign({},rows[selectedItem.rowNumber][selectedItem.gridType][selectedItem.columnName]['items'][selectedItem.id]['styles']);
    styles[action.style] = action.value
    rows[selectedItem.rowNumber][selectedItem.gridType][selectedItem.columnName]['items'][selectedItem.id]['styles'] = styles
    return updateObject(state, { rows: rows })
}

const selectItem = (state, action) => {
    return updateObject(state, { selectedItem: action.item })
}

const changeContentItem = (state, action) => {

    let rows = [...state.rows]
 
    rows[action.settings.rowNumber][action.settings.gridType][action.settings.columnName]['items'][action.settings.id] = action.item 

    return updateObject(state, { rows: rows })
}

const templateInJson = (state) => updateObject(state, { json: JSON.stringify(state.rows) })

const jsonInTemplate = (state, action) => updateObject(state, { rows: JSON.parse(action.json) })

const saveHtml = (state, action) => updateObject(state, { html: action.html })

const reorderColumnItems = (state, action) => {
    let rows = [...state.rows]
    let selectedItem = Object.assign({}, state.selectedItem)
    rows[selectedItem.rowNumber][selectedItem.gridType][selectedItem.columnName] = action.newColumn
    
    return updateObject(state, { rows })
} 

const createWebsiteStructureStart = (state) => {
    return updateObject(state, { loading: true, error: null })
}

const createWebsiteStructureSuccess = (state, action) => {
    
    return updateObject(state, { loading: false, error: null})
}

const createWebsiteStructureFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

const refreshRows = (state) => {
    return updateObject(state, { rows: [] })
}

const deleteItem = (state, action) => {
    let rows = [...state.rows];
    delete rows[action.item.rowNumber][action.item.gridType][action.item.columnName]['items'][action.item.id]
    let index = rows[action.item.rowNumber][action.item.gridType][action.item.columnName]['itemsIds'].indexOf(action.item.id)
    rows[action.item.rowNumber][action.item.gridType][action.item.columnName]['itemsIds'].splice(index,1)
    return updateObject(state, { rows: rows })
}

const deleteRow = (state, action) => {
    let rows = [...state.rows];
    let index = rows[action.rowNumber]
    rows.splice(index,1)
    return updateObject(state, { rows: rows })
}

const fetchWebsiteStructureStart = (state) => {
    return updateObject(state, { loading: true, error: null })
}

const fetchWebsiteStructureSuccess = (state, action) => {
    
    return updateObject(state, { loading: false, error: null })
}

const fetchWebsiteStructureFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

const resetRows = (state) => {
    return updateObject(state, { rows: [] } )
}
const changeWidthWorkspace = (state, action) => {
    return updateObject(state, { widthWorkspace: action.width })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_GRID_TYPE: return selectedGird(state, action);
        case actionTypes.DROP_ITEM: return dropItem(state, action);
        case actionTypes.CHANGE_STYLE_ITEM: return changeStyleItem(state, action);
        case actionTypes.SELECT_ITEM: return selectItem(state, action);
        case actionTypes.CHANGE_CONTENT_ITEM: return changeContentItem(state, action);
        case actionTypes.TEMPLATE_IN_JSON: return templateInJson(state);
        case actionTypes.JSON_IN_TEMPLATE: return jsonInTemplate(state, action);
        case actionTypes.SAVE_HTML: return saveHtml(state, action);
        case actionTypes.REORDER_COLUMN_ITEMS: return reorderColumnItems(state, action);
        case actionTypes.CREATE_WEBSITE_STRUCTURE_START: return createWebsiteStructureStart(state);
        case actionTypes.CREATE_WEBSITE_STRUCTURE_SUCCESS: return createWebsiteStructureSuccess(state, action);
        case actionTypes.CREATE_WEBSITE_STRUCTURE_FAIL: return createWebsiteStructureFail(state, action);
        case actionTypes.REFRESH_CONTAINER: return refreshRows(state);
        case actionTypes.DELETE_ITEM: return deleteItem(state, action);
        case actionTypes.DELETE_ROW: return deleteRow(state, action)
        case actionTypes.FETCH_WEBSITE_STRUCTURE_START: return fetchWebsiteStructureStart(state, action)
        case actionTypes.FETCH_WEBSITE_STRUCTURE_SUCCESS: return fetchWebsiteStructureSuccess(state, action)
        case actionTypes.FETCH_WEBSITE_STRUCTURE_FAIL: return fetchWebsiteStructureFail(state, action)
        case actionTypes.RESET_ROWS: return resetRows(state)
        case actionTypes.CHANGE_WIDTH_WORKSPACE: return changeWidthWorkspace(state, action)
        default: return state
    }
}

export default reducer;