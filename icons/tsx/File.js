"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFile = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid transparent;border-right:0;border-top:0;box-shadow:0 0 0 2px;border-radius:1px;border-top-right-radius:4px;overflow:hidden}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;border-bottom:2px solid;right:-1px;top:-1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid transparent;border-right:0;border-top:0;box-shadow:0 0 0 2px;border-radius:1px;border-top-right-radius:4px;overflow:hidden}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;border-bottom:2px solid;right:-1px;top:-1px}\n"])));
exports.File = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFile, tslib_1.__assign({}, props, { ref: ref, "icon-role": "file" }))));
});
var templateObject_1;
//# sourceMappingURL=File.js.map