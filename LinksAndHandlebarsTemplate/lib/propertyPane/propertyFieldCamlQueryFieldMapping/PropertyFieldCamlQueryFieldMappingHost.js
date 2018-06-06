"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file PropertyFieldCamlQueryHost.tsx
 * Renders the controls for PropertyFieldCamlQuery component
 *
 * @copyright 2017 Shire
 * Released under MIT licence
 *
 * Uses the PropertyFieldSPListQueryHost by Olivier Carpentier
 *
 */
var React = require("react");
var PropertyFieldCamlQueryFieldMapping_1 = require("./PropertyFieldCamlQueryFieldMapping");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Slider_1 = require("office-ui-fabric-react/lib/Slider");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var PropertyFields_module_scss_1 = require("../PropertyFields.module.scss");
var strings = require("propertyFieldStrings");
var sp_pnp_js_1 = require("sp-pnp-js");
require("camljs");
var linqts_1 = require("linqts");
/**
 * @class
 * Renders the controls for PropertyFieldCamlQuery component
 */
var PropertyFieldCamlQueryFieldMappingHost = (function (_super) {
    __extends(PropertyFieldCamlQueryFieldMappingHost, _super);
    /**
     * @function
     * Constructor
     */
    function PropertyFieldCamlQueryFieldMappingHost(props) {
        var _this = _super.call(this, props) || this;
        _this.listElementId = "input-new-list";
        _this.listIsDocLib = false;
        _this.onChangedList = _this.onChangedList.bind(_this);
        _this.onChangedField = _this.onChangedField.bind(_this);
        _this.onChangedArranged = _this.onChangedArranged.bind(_this);
        _this.onChangedMax = _this.onChangedMax.bind(_this);
        _this.loadFields = _this.loadFields.bind(_this);
        _this.onClickAddFilter = _this.onClickAddFilter.bind(_this);
        _this.onClickRemoveFilter = _this.onClickRemoveFilter.bind(_this);
        _this.onChangedFilterField = _this.onChangedFilterField.bind(_this);
        _this.onChangedFilterOperator = _this.onChangedFilterOperator.bind(_this);
        _this.onChangedFilterValue = _this.onChangedFilterValue.bind(_this);
        _this.createNewList = _this.createNewList.bind(_this);
        _this.openCreateNewListDialog = _this.openCreateNewListDialog.bind(_this);
        _this.cancelListCreate = _this.cancelListCreate.bind(_this);
        _this.state = {
            loadedList: false,
            loadedFields: false,
            lists: [],
            fields: new linqts_1.List(),
            arranged: [{ key: PropertyFieldCamlQueryFieldMapping_1.SortDirection.Ascending, text: 'Ascending' }, { key: PropertyFieldCamlQueryFieldMapping_1.SortDirection.Descending, text: 'Descending' }],
            selectedList: {},
            sort: {},
            operators: [
                { key: 'Eq', text: strings.SPListQueryOperatorEq },
                { key: 'Ne', text: strings.SPListQueryOperatorNe },
                { key: 'startsWith', text: strings.SPListQueryOperatorStartsWith },
                { key: 'substringof', text: strings.SPListQueryOperatorSubstringof },
                { key: 'Lt', text: strings.SPListQueryOperatorLt },
                { key: 'Le', text: strings.SPListQueryOperatorLe },
                { key: 'Gt', text: strings.SPListQueryOperatorGt },
                { key: 'Ge', text: strings.SPListQueryOperatorGe }
            ],
            filters: [],
            filterType: strings.SPListFilterCompareAny,
            fieldMappings: [],
            max: 100,
            errorMessage: '',
            isCreateOpen: false
        };
        _this.props.fieldMappings.map(function (item, index) {
            _this.state.fieldMappings.push({
                name: item.name,
                type: item.type,
                requiredLevel: item.requiredLevel,
                enabled: item.requiredLevel === PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required,
                mappedTo: ''
            });
        });
        _this.loadDefaultData();
        _this.loadLists();
        _this.loadFields();
        _this.async = new Utilities_1.Async(_this);
        _this.validate = _this.validate.bind(_this);
        _this.notifyAfterValidate = _this.notifyAfterValidate.bind(_this);
        _this.delayedValidate = _this.async.debounce(_this.validate, _this.props.deferredValidationTime);
        return _this;
    }
    PropertyFieldCamlQueryFieldMappingHost.prototype.loadDefaultData = function () {
        if (this.props && this.props.properties[this.props.dataPropertyPath]) {
            var stateObj = JSON.parse(this.props.properties[this.props.dataPropertyPath]);
            this.setState({ max: stateObj.max });
            this.setState({ selectedList: stateObj.selectedList });
            this.setState({ sort: stateObj.sort });
            this.setState({ fieldMappings: stateObj.fieldMappings });
            this.setState({ filterType: stateObj.filterType });
            this.setState({ filters: stateObj.filters });
        }
    };
    /**
     * @function
     * Loads the list from SharePoint current web site
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.loadLists = function () {
        var _this = this;
        sp_pnp_js_1.default.sp.web.lists.select("Title", "Id", "BaseTemplate").filter("Hidden eq false").get().then(function (lists) {
            _this.setState({ lists: [] });
            lists.map(function (list) {
                _this.state.lists.push({
                    id: list.Id,
                    title: list.Title,
                    isDocLib: [101, 109, 119].indexOf(list.BaseTemplate) > -1
                });
            });
            _this.setState({ loadedList: true });
            _this.saveState();
        });
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.loadFields = function (updateView) {
        var _this = this;
        if (updateView === void 0) { updateView = false; }
        if (this.state.selectedList && this.state.selectedList.id) {
            sp_pnp_js_1.default.sp.web.lists.getById(this.state.selectedList.id).fields.select("Title", "InternalName", "TypeAsString").filter("Hidden eq false").orderBy("Title").get().then(function (response) {
                _this.setState({ fields: new linqts_1.List() });
                response.map(function (field) {
                    var option = {
                        internalName: field.InternalName,
                        name: field.Title,
                        kind: _this.getKindForType(field.TypeAsString)
                    };
                    _this.state.fields.Add(option);
                });
                //If list was just created, add all fields to the default view.
                if (updateView && _this.state.fields.Count() > 0)
                    _this.addFieldsToView(0);
                _this.setState({ loadedFields: true });
                _this.saveState();
                _this.saveQuery();
            });
        }
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.getKindForType = function (type) {
        switch (type) {
            case "URL":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL;
            case "Boolean":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Boolean;
            case "PublishingScheduleStartDateFieldType":
            case "PublishingScheduleEndDateFieldType":
            case "Date":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Date;
            case "DateTime":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.DateTime;
            case "User":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.User;
            case "Lookup":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Lookup;
            case "Integer":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Integer;
            case "Number":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Number;
            case "Counter":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Counter;
            case "Choice":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Choice;
            case "TaxonomyFieldType":
                return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Taxonomy;
            default: return PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text;
        }
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.getFieldList = function (fieldType) {
        var fields = this.state.fields.Where(function (f) { return f.kind == fieldType; }).ToArray();
        var options = [];
        fields.forEach(function (element) {
            options.push({ key: element.internalName, text: element.name });
        });
        return options;
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.getFieldByInternalName = function (fieldTypeName) {
        var fields = this.state.fields.Where(function (f) { return f.internalName == fieldTypeName; }).ToArray();
        if (fields == null || fields.length == 0)
            return null;
        return fields[0];
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.saveState = function () {
        this.setState(this.state);
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.saveQuery = function () {
        var _this = this;
        var listViewFields = [];
        if (this.state.fieldMappings.length === 0) {
            this.state.fields.ForEach(function (element) {
                listViewFields.push(element.internalName.trim().replace(' ', '_x0020_'));
            });
        }
        else {
            this.state.fieldMappings.map(function (mappedField) {
                if (typeof mappedField.mappedTo != 'undefined' && mappedField.enabled)
                    listViewFields.push(mappedField.mappedTo.trim().replace(' ', '_x0020_'));
            });
        }
        if (listViewFields.indexOf("Title") == -1) {
            listViewFields.push("Title");
        }
        if (this.state.selectedList.isDocLib) {
            listViewFields.push('EncodedAbsUrl');
        }
        var conditions = [];
        this.state.filters.forEach(function (element) {
            if (element.field == null || element.field == '' || element.operator == null || element.operator == '' || element.value == null)
                return;
            console.log('operator');
            var field = _this.getFieldByInternalName(element.field);
            console.log(field.kind);
            switch (field.kind) {
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Boolean:
                    if (element.operator === "Ne")
                        conditions.push(CamlBuilder.Expression().BooleanField(element.field).NotEqualTo(!!(element.value)));
                    else
                        conditions.push(CamlBuilder.Expression().BooleanField(element.field).EqualTo(!!(element.value)));
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Integer:
                    var integerValue = parseInt(element.value);
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().IntegerField(element.field).NotEqualTo(integerValue));
                            break;
                        case "Le":
                            conditions.push(CamlBuilder.Expression().IntegerField(element.field).LessThanOrEqualTo(integerValue));
                            break;
                        case "Lt":
                            conditions.push(CamlBuilder.Expression().IntegerField(element.field).LessThan(integerValue));
                            break;
                        case "Ge":
                            conditions.push(CamlBuilder.Expression().IntegerField(element.field).GreaterThanOrEqualTo(integerValue));
                            break;
                        case "Gt":
                            conditions.push(CamlBuilder.Expression().IntegerField(element.field).GreaterThan(integerValue));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().IntegerField(element.field).EqualTo(integerValue));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Counter:
                    var counterValue = parseInt(element.value);
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().CounterField(element.field).NotEqualTo(counterValue));
                            break;
                        case "Le":
                            conditions.push(CamlBuilder.Expression().CounterField(element.field).LessThanOrEqualTo(counterValue));
                            break;
                        case "Lt":
                            conditions.push(CamlBuilder.Expression().CounterField(element.field).LessThan(counterValue));
                            break;
                        case "Ge":
                            conditions.push(CamlBuilder.Expression().CounterField(element.field).GreaterThanOrEqualTo(counterValue));
                            break;
                        case "Gt":
                            conditions.push(CamlBuilder.Expression().CounterField(element.field).GreaterThan(counterValue));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().CounterField(element.field).EqualTo(counterValue));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Date:
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().DateField(element.field).NotEqualTo(element.value));
                            break;
                        case "Le":
                            conditions.push(CamlBuilder.Expression().DateField(element.field).LessThanOrEqualTo(element.value));
                            break;
                        case "Lt":
                            conditions.push(CamlBuilder.Expression().DateField(element.field).LessThan(element.value));
                            break;
                        case "Ge":
                            conditions.push(CamlBuilder.Expression().DateField(element.field).GreaterThanOrEqualTo(element.value));
                            break;
                        case "Gt":
                            conditions.push(CamlBuilder.Expression().DateField(element.field).GreaterThan(element.value));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().DateField(element.field).EqualTo(element.value));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.DateTime:
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().DateTimeField(element.field).NotEqualTo(element.value));
                            break;
                        case "Le":
                            conditions.push(CamlBuilder.Expression().DateTimeField(element.field).LessThanOrEqualTo(element.value));
                            break;
                        case "Lt":
                            conditions.push(CamlBuilder.Expression().DateTimeField(element.field).LessThan(element.value));
                            break;
                        case "Ge":
                            conditions.push(CamlBuilder.Expression().DateTimeField(element.field).GreaterThanOrEqualTo(element.value));
                            break;
                        case "Gt":
                            conditions.push(CamlBuilder.Expression().DateTimeField(element.field).GreaterThan(element.value));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().DateTimeField(element.field).EqualTo(element.value));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Lookup:
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().NotEqualTo(element.value));
                            break;
                        case "startsWith":
                            conditions.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().BeginsWith(element.value));
                            break;
                        case "substringOf":
                            conditions.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().Contains(element.value));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().EqualTo(element.value));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Number:
                    var numberValue = parseFloat(element.value);
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().NumberField(element.field).NotEqualTo(numberValue));
                            break;
                        case "Le":
                            conditions.push(CamlBuilder.Expression().NumberField(element.field).LessThanOrEqualTo(numberValue));
                            break;
                        case "Lt":
                            conditions.push(CamlBuilder.Expression().NumberField(element.field).LessThan(numberValue));
                            break;
                        case "Ge":
                            conditions.push(CamlBuilder.Expression().NumberField(element.field).GreaterThanOrEqualTo(numberValue));
                            break;
                        case "Gt":
                            conditions.push(CamlBuilder.Expression().NumberField(element.field).GreaterThan(numberValue));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().NumberField(element.field).EqualTo(numberValue));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL:
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().UrlField(element.field).NotEqualTo(element.value));
                            break;
                        case "startsWith":
                            conditions.push(CamlBuilder.Expression().UrlField(element.field).BeginsWith(element.value));
                            break;
                        case "substringOf":
                            conditions.push(CamlBuilder.Expression().UrlField(element.field).Contains(element.value));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().UrlField(element.field).EqualTo(element.value));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Choice:
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().TextField(element.field).NotEqualTo(element.value));
                            break;
                        case "startsWith":
                            conditions.push(CamlBuilder.Expression().TextField(element.field).BeginsWith(element.value));
                            break;
                        case "substringOf":
                            conditions.push(CamlBuilder.Expression().TextField(element.field).Contains(element.value));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().TextField(element.field).EqualTo(element.value));
                            break;
                    }
                    break;
                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.User:
                    if (element.value === "Me") {
                        conditions.push(CamlBuilder.Expression().UserField(element.field).EqualToCurrentUser());
                    }
                    else {
                        switch (element.operator) {
                            case "Ne":
                                conditions.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().NotEqualTo(element.value));
                                break;
                            case "startsWith":
                                conditions.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().BeginsWith(element.value));
                                break;
                            case "substringOf":
                                conditions.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().Contains(element.value));
                                break;
                            default:
                                conditions.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().EqualTo(element.value));
                                break;
                        }
                    }
                    break;
                default:
                    switch (element.operator) {
                        case "Ne":
                            conditions.push(CamlBuilder.Expression().TextField(element.field).NotEqualTo(element.value));
                            break;
                        case "startsWith":
                            conditions.push(CamlBuilder.Expression().TextField(element.field).BeginsWith(element.value));
                            break;
                        case "substringof":
                            conditions.push(CamlBuilder.Expression().TextField(element.field).Contains(element.value));
                            break;
                        default:
                            conditions.push(CamlBuilder.Expression().TextField(element.field).EqualTo(element.value));
                            break;
                    }
                    break;
            }
        });
        var queryXml = '';
        if (this.state.filterType === strings.SPListFilterCompareAny) {
            if (this.state.sort && this.state.sort.title) {
                if (this.state.sort.direction === PropertyFieldCamlQueryFieldMapping_1.SortDirection.Descending) {
                    queryXml = new CamlBuilder() //Any orderby at this
                        .View(listViewFields)
                        .RowLimit(this.state.max)
                        .Query()
                        .Where()
                        .Any(conditions)
                        .OrderByDesc(this.state.sort.title)
                        .ToString();
                }
                else {
                    queryXml = new CamlBuilder() //Any orderby at this
                        .View(listViewFields)
                        .RowLimit(this.state.max)
                        .Query()
                        .Where()
                        .Any(conditions)
                        .OrderBy(this.state.sort.title)
                        .ToString();
                }
            }
            else {
                queryXml = new CamlBuilder() //Any orderby at this
                    .View(listViewFields)
                    .RowLimit(this.state.max)
                    .Query()
                    .Where()
                    .Any(conditions)
                    .ToString();
            }
        }
        else {
            if (this.state.sort && this.state.sort.title) {
                if (this.state.sort.direction === PropertyFieldCamlQueryFieldMapping_1.SortDirection.Descending) {
                    queryXml = new CamlBuilder() //Any orderby at this
                        .View(listViewFields)
                        .RowLimit(this.state.max)
                        .Query()
                        .Where()
                        .All(conditions)
                        .OrderByDesc(this.state.sort.title)
                        .ToString();
                }
                else {
                    queryXml = new CamlBuilder() //Any orderby at this
                        .View(listViewFields)
                        .RowLimit(this.state.max)
                        .Query()
                        .Where()
                        .All(conditions)
                        .OrderBy(this.state.sort.title)
                        .ToString();
                }
            }
            else {
                queryXml = new CamlBuilder() //Any orderby at this
                    .View(listViewFields)
                    .RowLimit(this.state.max)
                    .Query()
                    .Where()
                    .All(conditions)
                    .ToString();
            }
        }
        //Order
        console.log(queryXml);
        this.props.properties[this.props.dataPropertyPath] = JSON.stringify({
            filters: this.state.filters,
            max: this.state.max,
            selectedList: this.state.selectedList,
            sort: this.state.sort,
            fieldMappings: this.state.fieldMappings
        });
        if (this.delayedValidate !== null && this.delayedValidate !== undefined) {
            this.delayedValidate(queryXml);
        }
    };
    /**
     * @function
     * Validates the new custom field value
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.validate = function (value) {
        var _this = this;
        if (this.props.onGetErrorMessage === null || this.props.onGetErrorMessage === undefined) {
            this.notifyAfterValidate(this.props.query, value);
            return;
        }
        if (this.latestValidateValue === value)
            return;
        this.latestValidateValue = value;
        var result = this.props.onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string') {
                if (result === undefined || result === '')
                    this.notifyAfterValidate(this.props.query, value);
                this.setState({ errorMessage: result });
                this.setState(this.state);
            }
            else {
                result.then(function (errorMessage) {
                    if (errorMessage === undefined || errorMessage === '')
                        _this.notifyAfterValidate(_this.props.query, value);
                    _this.setState({ errorMessage: errorMessage });
                    _this.setState(_this.state);
                });
            }
        }
        else {
            this.notifyAfterValidate(this.props.query, value);
        }
    };
    /**
     * @function
     * Notifies the parent Web Part of a property value change
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.notifyAfterValidate = function (oldValue, newValue) {
        if (this.props.onPropertyChange && newValue != null) {
            this.props.properties[this.props.targetProperty] = newValue;
            this.props.onPropertyChange(this.props.targetProperty, oldValue, newValue);
            if (this.props.render)
                this.props.render();
        }
    };
    /**
     * @function
     * Called when the component will unmount
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.componentWillUnmount = function () {
        this.async.dispose();
    };
    /**
     * @function
     * Raises when a list has been selected
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedList = function (option, index) {
        var _this = this;
        this.state.selectedList.id = option.key;
        this.state.selectedList.title = option.text;
        this.state.lists.forEach(function (value) {
            if (value.id == option.key)
                _this.state.selectedList.isDocLib = value.isDocLib;
        });
        this.saveQuery();
        this.saveState();
        this.loadFields();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedField = function (option, index) {
        this.state.sort.title = option.key;
        this.saveQuery();
        this.saveState();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedArranged = function (option, index) {
        this.state.sort.direction = option.key;
        this.saveQuery();
        this.saveState();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedMax = function (newValue) {
        this.setState({ max: newValue });
        this.saveQuery();
        this.saveState();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onClickAddFilter = function (elm) {
        this.state.filters.push({});
        this.saveState();
        this.saveQuery();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onClickRemoveFilter = function (index) {
        if (index > -1) {
            this.state.filters.splice(index, 1);
            this.saveState();
            this.saveQuery();
        }
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedFilterField = function (option, index, selectedIndex) {
        this.state.filters[selectedIndex].field = option.key;
        this.saveState();
        this.saveQuery();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedFilterOperator = function (option, index, selectedIndex) {
        this.state.filters[selectedIndex].operator = option.key;
        this.saveState();
        this.saveQuery();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedFilterValue = function (value, index) {
        this.state.filters[index].value = value;
        this.saveState();
        this.saveQuery();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedFieldMapping = function (option, index) {
        this.state.fieldMappings[index].mappedTo = option.key.toString();
        this.saveState();
        this.saveQuery();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedFilterType = function (option, index) {
        this.setState({ filterType: option.key.toString() });
        this.saveState();
        this.saveQuery();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.onChangedFieldMappingEnabled = function (sender, checked, index) {
        this.state.fieldMappings[index].enabled = checked;
        this.saveState();
        this.saveQuery();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.openCreateNewListDialog = function (element) {
        this.setState({ isCreateOpen: true });
        this.saveState();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.createNewList = function (element) {
        var _this = this;
        var title = document.getElementsByClassName(this.listElementId)[0]["value"];
        var desc = 'List created by an SPFX webpart';
        sp_pnp_js_1.default.sp.web.lists.add(title, desc, 100).then(function (result) {
            _this.state.selectedList.id = result.data['Id'];
            _this.state.selectedList.title = result.data['Title'];
            if (_this.props.createTitleRequired)
                _this.setTitleOptional(result.list);
            else
                _this.createField(result.list, _this.props.createFields, 0);
        });
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.setTitleOptional = function (list) {
        var _this = this;
        list.fields.getByTitle('Title').update({
            Required: false
        }).then(function (result) {
            _this.createField(list, _this.props.createFields, 0);
        });
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.createField = function (list, fieldXmls, currentIndex) {
        var _this = this;
        list.fields.createFieldAsXml(fieldXmls[currentIndex]).then(function (result) {
            currentIndex++;
            if (currentIndex < fieldXmls.length)
                _this.createField(list, fieldXmls, currentIndex);
            else
                _this.saveAndReloadData();
        });
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.addFieldsToView = function (idx) {
        var _this = this;
        //Skip adding the Title, already in view by default.
        if (this.state.fields.ElementAt(idx).internalName == 'Title' && this.state.fields.Count() > idx + 1) {
            this.addFieldsToView(idx + 1);
        }
        else {
            sp_pnp_js_1.default.sp.web.lists.getById(this.state.selectedList.id).views.getByTitle("All Items").fields.add(this.state.fields.ElementAt(idx).internalName).then(function (_) {
                if (_this.state.fields.Count() > idx + 1)
                    _this.addFieldsToView(idx + 1);
            });
        }
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.saveAndReloadData = function () {
        this.saveState();
        this.saveQuery();
        this.loadDefaultData();
        this.loadLists();
        //Added boolean to trigger updating the default view.
        this.loadFields(true);
        document.getElementsByClassName(this.listElementId)[0]["value"] = "";
        this.setState({ isCreateOpen: false });
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.cancelListCreate = function (element) {
        this.setState({ isCreateOpen: false });
        document.getElementsByClassName(this.listElementId)[0]["value"] = "";
        this.saveState();
    };
    PropertyFieldCamlQueryFieldMappingHost.prototype.openListInNewTab = function () {
        sp_pnp_js_1.default.sp.web.lists.getById(this.state.selectedList.id).defaultView.get().then(function (data) {
            window.open(data.ServerRelativeUrl);
        });
    };
    /**
     * @function
     * Renders the controls
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.render = function () {
        var _this = this;
        if (this.state.loadedList === false) {
            return (React.createElement("div", null,
                React.createElement(Label_1.Label, null, this.props.label),
                React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.normal })));
        }
        //Renders content
        return (React.createElement("div", null,
            this.props.showCreate &&
                React.createElement("div", null,
                    React.createElement(Dialog_1.Dialog, { type: Dialog_1.DialogType.close, isOpen: this.state.isCreateOpen, title: strings.SPListCreate, containerClassName: PropertyFields_module_scss_1.default.msDialogMainCustom, onDismiss: this.cancelListCreate, isDarkOverlay: true, isBlocking: false },
                        React.createElement("textarea", { placeholder: strings.SPListCreatePlaceholder, required: true, className: this.listElementId }),
                        React.createElement("div", { style: { marginTop: '30px', marginBottom: '30px' } },
                            React.createElement(Button_1.Button, { buttonType: Button_1.ButtonType.primary, onClick: this.createNewList }, strings.CreateButton),
                            React.createElement(Button_1.Button, { buttonType: Button_1.ButtonType.normal, onClick: this.cancelListCreate }, strings.CancelButton))),
                    React.createElement(Button_1.Button, { iconProps: { iconName: "Add" }, disabled: this.props.disabled, buttonType: Button_1.ButtonType.command, onClick: this.openCreateNewListDialog }, strings.SPListCreate)),
            React.createElement(Label_1.Label, { hidden: !this.props.label }, this.props.label),
            React.createElement(Dropdown_1.Dropdown, { label: strings.SPListQueryList, onChanged: this.onChangedList, options: this.state.lists.map(function (l) { return { key: l.id, text: l.title }; }), selectedKey: this.state.selectedList.id, disabled: this.props.disabled }),
            React.createElement(Button_1.CommandButton, { iconProps: { iconName: "Edit" }, disabled: this.props.disabled, buttonType: Button_1.ButtonType.command, onClick: function () { return _this.openListInNewTab(); } }, strings.SPListQueryOpenList),
            this.state.fieldMappings.map(function (mapping, index) {
                return (React.createElement(Dropdown_1.Dropdown, { label: mapping.name, disabled: _this.props.disabled === false && _this.state.selectedList != null && _this.state.selectedList != '' ? false : true, options: _this.getFieldList(mapping.type), selectedKey: mapping.mappedTo, onChanged: function (option, selectIndex) { return _this.onChangedFieldMapping(option, index); } }));
            }),
            this.props.showOrderBy != false ?
                React.createElement("div", null,
                    React.createElement(Dropdown_1.Dropdown, { label: strings.SPListQueryOrderBy, options: this.state.fields.Select(function (f) { return { key: f.internalName, text: f.name }; }).ToArray(), selectedKey: this.state.sort.title, onChanged: this.onChangedField, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true }),
                    React.createElement(Dropdown_1.Dropdown, { label: strings.SPListQueryArranged, options: this.state.arranged, selectedKey: this.state.sort.direction, onChanged: this.onChangedArranged, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true }))
                : '',
            this.props.showMax != false ?
                React.createElement(Slider_1.Slider, { label: strings.SPListQueryMax, min: 0, className: PropertyFields_module_scss_1.default["slider"], max: this.props.max == null ? 500 : this.props.max, defaultValue: this.state.max, onChange: this.onChangedMax, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true })
                : '',
            this.state.filters != null && this.state.filters.length > 1 ?
                React.createElement(Dropdown_1.Dropdown, { label: strings.SPListFilterCompareType, disabled: this.props.disabled, options: [
                        { key: strings.SPListFilterCompareAny, text: strings.SPListFilterCompareAny },
                        { key: strings.SPListFilterCompareAll, text: strings.SPListFilterCompareAll }
                    ], selectedKey: this.state.filterType, onChanged: this.onChangedFilterType.bind(this) })
                : '',
            this.state.filters != null && this.state.filters.length > 0 ?
                this.state.filters.map(function (value, index) {
                    return (React.createElement("div", null,
                        React.createElement(Label_1.Label, null, "Filter"),
                        React.createElement(Dropdown_1.Dropdown, { label: '', disabled: _this.props.disabled, options: _this.state.fields.Select(function (f) { return { key: f.internalName, text: f.name }; }).ToArray(), selectedKey: value.field, onChanged: function (option, selectIndex) { return _this.onChangedFilterField(option, selectIndex, index); } }),
                        React.createElement(Dropdown_1.Dropdown, { label: '', disabled: _this.props.disabled, options: _this.state.operators, selectedKey: value.operator, onChanged: function (option, selectIndex) { return _this.onChangedFilterOperator(option, selectIndex, index); } }),
                        React.createElement(TextField_1.TextField, { disabled: _this.props.disabled, defaultValue: value.value, onChanged: function (value2) { return _this.onChangedFilterValue(value2, index); } }),
                        React.createElement(Button_1.Button, { disabled: _this.props.disabled, buttonType: Button_1.ButtonType.command, onClick: function () { return _this.onClickRemoveFilter(index); }, iconProps: { iconName: "Delete" } }, strings.SPListQueryRemove)));
                })
                : '',
            this.props.showFilters != false ?
                React.createElement(Button_1.Button, { buttonType: Button_1.ButtonType.command, onClick: this.onClickAddFilter, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true, iconProps: { iconName: "Add" } }, strings.SPListQueryAdd)
                : '',
            this.state.errorMessage != null && this.state.errorMessage != '' && this.state.errorMessage != undefined ?
                React.createElement("div", { style: { paddingBottom: '8px' } },
                    React.createElement("div", { "aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message' }, this.state.errorMessage),
                    React.createElement("span", null,
                        React.createElement("p", { className: 'ms-TextField-errorMessage ms-u-slideDownIn20' }, this.state.errorMessage)))
                : ''));
    };
    return PropertyFieldCamlQueryFieldMappingHost;
}(React.Component));
exports.default = PropertyFieldCamlQueryFieldMappingHost;

//# sourceMappingURL=PropertyFieldCamlQueryFieldMappingHost.js.map
