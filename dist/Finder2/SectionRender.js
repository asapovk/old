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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SectionRender = /** @class */ (function (_super) {
    __extends(SectionRender, _super);
    function SectionRender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionRender.prototype.finderContent = function (childs) {
        // if (this.state.csk === null) return null;
        // try {
        //     const { children, filter, filterPlaceholder } = this.getAllSections(childs)
        //         .filter(child => this.isNav(child))
        //         .find(child => this.state.csk === child.props.csk)
        //         .props;
        //     if (this.isNav(children)) {
        //         return (
        //             <MenuRender children={children} filter={filter} filterPlaceholder={filterPlaceholder} />
        //         )
        //     }
        //     return (
        //         <FinderContent children={children} filter={filter} filterPlaceholder={filterPlaceholder} />
        //     )
        // } catch (error) {
        //     return null;
        // }
    };
    SectionRender.prototype.render = function () {
        console.log(this.props.filter);
        return (this.props.children);
    };
    return SectionRender;
}(react_1.default.Component));
exports.default = SectionRender;
