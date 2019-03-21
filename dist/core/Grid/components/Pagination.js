"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
var styles_1 = require("../styles");
exports.default = (function (props) {
    var dataLength = props.dataLength, pagination = props.pagination, currentPage = props.currentPage, setCurrentPage = props.setCurrentPage;
    var totalPages = Math.ceil(dataLength / pagination.pageSize);
    var ps = styles_1.paginationStyles();
    if (totalPages <= 1) {
        return null;
    }
    var pages = fetchPageNumbers(pagination.pageNeighbours, totalPages, currentPage);
    var setPage = function (page) {
        var currentPage = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(currentPage);
    };
    var onPageButtonClick = function (event, page) {
        event.preventDefault();
        typeof page === 'number'
            ? setPage(page)
            : page === LEFT_PAGE
                ? setPage(currentPage - (pagination.pageNeighbours * 2) - 1)
                : setPage(currentPage + (pagination.pageNeighbours * 2) + 1);
    };
    return (core_1.jsx("div", { css: ps.paginationContainer }, pages.map(function (page, index) {
        var css = ps.paginationButton(typeof page === 'number' ? (currentPage === page) : false);
        var children = typeof page === 'number'
            ? page
            : core_1.jsx(__1.Icon, { type: page });
        return (core_1.jsx("div", { key: "pagination-" + index, css: css, onClick: function (event) { return onPageButtonClick(event, page); }, children: children }));
    })));
});
var range = function (from, to, step) {
    if (step === void 0) { step = 1; }
    var i = from;
    var range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
};
var fetchPageNumbers = function (pageNeighbours, totalPages, currentPage) {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    var totalNumbers = (pageNeighbours * 2) + 3;
    var totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
        var startPage = Math.max(2, currentPage - pageNeighbours);
        var endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
        var pages = range(startPage, endPage);
        /**
         * hasLeftSpill: has hidden pages to the left
         * hasRightSpill: has hidden pages to the right
         * spillOffset: number of hidden pages either to the left or to the right
         */
        var hasLeftSpill = startPage > 2;
        var hasRightSpill = (totalPages - endPage) > 1;
        var spillOffset = totalNumbers - (pages.length + 1);
        switch (true) {
            // handle: (1) < {5 6} [7] {8 9} (10)
            case (hasLeftSpill && !hasRightSpill): {
                var extraPages = range(startPage - spillOffset, startPage - 1);
                pages = [LEFT_PAGE].concat(extraPages, pages);
                break;
            }
            // handle: (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
                var extraPages = range(endPage + 1, endPage + spillOffset);
                pages = pages.concat(extraPages, [RIGHT_PAGE]);
                break;
            }
            // handle: (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
                pages = [LEFT_PAGE].concat(pages, [RIGHT_PAGE]);
                break;
            }
        }
        return [1].concat(pages, [totalPages]);
    }
    return range(1, totalPages);
};
var LEFT_PAGE = 'left';
var RIGHT_PAGE = 'right';
