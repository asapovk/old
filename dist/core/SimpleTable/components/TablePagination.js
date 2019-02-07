"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
exports.default = (function (props) {
    var dataLength = props.dataLength, pagination = props.pagination, currentPage = props.currentPage, setCurrentPage = props.setCurrentPage, styles = props.styles;
    var totalPages = Math.ceil(dataLength / pagination.pageSize);
    if (totalPages <= 1) {
        return null;
    }
    var pages = fetchPageNumbers(pagination.pageNeighbours, totalPages, currentPage);
    function setPage(page) {
        if (page < 1) {
            page = 1;
        }
        if (page > totalPages) {
            page = 40;
        }
        setCurrentPage(page);
    }
    return (core_1.jsx(__1.Flexbox, { css: styles.paginationContainer }, pages.map(function (page, index) {
        if (page === LEFT_PAGE) {
            return (core_1.jsx("div", { key: "pagination-" + index, onClick: function () { return setPage(currentPage - (pagination.pageNeighbours * 2) - 1); }, children: core_1.jsx(__1.Icon, { type: 'left' }), css: styles.paginationButton(false) }));
        }
        ;
        if (page === RIGHT_PAGE) {
            return (core_1.jsx("div", { key: "pagination-" + index, onClick: function () { return setPage(currentPage + (pagination.pageNeighbours * 2) + 1); }, children: core_1.jsx(__1.Icon, { type: 'right' }), css: styles.paginationButton(false) }));
        }
        ;
        return (core_1.jsx("div", { key: "pagination-" + index, onClick: function () { return setPage(page); }, children: page, css: styles.paginationButton(currentPage === page) }));
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
var LEFT_PAGE = 'LEFT';
var RIGHT_PAGE = 'RIGHT';
