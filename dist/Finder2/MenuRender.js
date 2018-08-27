"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Flexbox_1 = require("../Flexbox");
var FinderNav_1 = __importDefault(require("./FinderNav"));
var FinderContent_1 = __importDefault(require("./FinderContent"));
var FinderFilter_1 = __importDefault(require("./FinderFilter"));
var FinderGroup_1 = __importDefault(require("./FinderGroup"));
var MenuRender = /** @class */ (function (_super) {
    __extends(MenuRender, _super);
    function MenuRender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            filter: "",
            csk: null,
            cgk: null,
        };
        return _this;
    }
    MenuRender.prototype.isValid = function (child, cls) {
        try {
            if (Array.isArray(child)) {
                child = child[0];
            }
            return (child.type.name === cls.name);
        }
        catch (error) {
            return false;
        }
    };
    MenuRender.prototype.isNav = function (child) {
        return this.isValid(child, FinderNav_1.default);
    };
    MenuRender.prototype.isGroup = function (child) {
        return this.isValid(child, FinderGroup_1.default);
    };
    MenuRender.prototype.getAllSections = function (childs, sections) {
        if (sections === void 0) { sections = []; }
        if (!Array.isArray(childs))
            childs = [childs];
        var i = 0;
        while (i < childs.length) {
            if (childs[i].key && childs[i].key.match('group')) {
                if (childs[i].props.children[1]) {
                    this.getAllSections(childs[i].props.children[1], sections);
                }
            }
            if (this.isNav(childs[i])) {
                sections.push(childs[i]);
            }
            i++;
        }
        return sections;
    };
    MenuRender.prototype.FinderNavs = function (childs, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        if (!childs)
            return null;
        if (!Array.isArray(childs))
            childs = [childs];
        return childs.map(function (child, index) {
            if (_this.isNav(child)) {
                var key_1 = "section" + level + "" + index;
                return react_1.default.cloneElement(child, {
                    csk: key_1,
                    key: key_1,
                    active: (key_1 === _this.state.csk),
                    onClick: function () {
                        console.log(key_1);
                        _this.setState({ csk: key_1 });
                    }
                });
            }
            if (_this.isGroup(child)) {
                var key_2 = "group" + level + "" + index;
                var group = react_1.default.cloneElement(child, {
                    cgk: key_2,
                    key: key_2,
                    active: (key_2 === _this.state.cgk),
                    onClick: function () {
                        _this.setState({ cgk: _this.state.cgk === key_2 ? null : key_2 });
                    }
                });
                return (react_1.default.createElement(react_1.Fragment, { key: key_2 },
                    group,
                    _this.state.cgk === key_2 && _this.FinderNavs(group.props.children, level + 1)));
            }
            return child;
        });
    };
    MenuRender.prototype.finderContent = function (childs) {
        var _this = this;
        if (this.state.csk === null)
            return null;
        try {
            var _a = this.getAllSections(childs)
                .filter(function (child) { return _this.isNav(child); })
                .find(function (child) { return _this.state.csk === child.props.csk; })
                .props, children = _a.children, filter = _a.filter, filterPlaceholder = _a.filterPlaceholder;
            if (this.isNav(children)) {
                return (react_1.default.createElement(MenuRender, { children: children, filter: filter, filterPlaceholder: filterPlaceholder }));
            }
            return (react_1.default.createElement(FinderContent_1.default, { children: children, filter: filter, filterPlaceholder: filterPlaceholder }));
        }
        catch (error) {
            return null;
        }
    };
    MenuRender.prototype.filterSection = function (sections) {
        var _this = this;
        return sections.filter(function (section) {
            if (section.key && section.key.match('group')) {
                if (section.props.children[0].props.label) {
                    return section.props.children[0].props.label.toUpperCase().match(_this.state.filter);
                }
            }
            if (section.props.label) {
                return section.props.label.toUpperCase().match(_this.state.filter);
            }
            return true;
        });
    };
    MenuRender.prototype.render = function () {
        var _this = this;
        var sections = this.FinderNavs(this.props.children);
        var content = this.finderContent(sections);
        if (this.state.filter) {
            sections = this.filterSection(sections);
        }
        return (react_1.default.createElement(Flexbox_1.Flexbox, null,
            react_1.default.createElement(Flexbox_1.Flexbox, { column: true, className: "ui-finder-menu" },
                this.props.filter && react_1.default.createElement(FinderFilter_1.default, { placeholder: this.props.filterPlaceholder, clearable: true, onChange: function (value) {
                        _this.setState({ filter: value.toUpperCase() });
                    } }),
                sections),
            content));
    };
    return MenuRender;
}(react_1.default.Component));
exports.default = MenuRender;
