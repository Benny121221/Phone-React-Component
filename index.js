"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./phone.css");
var Phone = function (props) {
    if (!props.small) {
        return (React.createElement("div", { style: { width: "100%" } },
            React.createElement("div", { className: "phone-container" },
                React.createElement("div", { className: "phone-top" }),
                React.createElement("div", { className: "speaker" }),
                React.createElement("div", { className: "screen-content" }, props.children),
                React.createElement("div", { className: "home-button" }),
                React.createElement("div", { className: "phone-bottom" }))));
    }
    else {
        return (React.createElement("div", { style: { width: "100%" } },
            React.createElement("div", { className: "phone-container", style: { height: "500px", width: "300px" } },
                React.createElement("div", { className: "phone-top" }),
                React.createElement("div", { className: "speaker", style: { width: "210px" } }),
                React.createElement("div", { className: "screen-content", style: { height: "342px" } }, props.children),
                React.createElement("div", { className: "home-button", style: { top: "432px", left: "140px" } }),
                React.createElement("div", { className: "phone-bottom" }))));
    }
};
exports.default = Phone;
//# sourceMappingURL=index.js.map