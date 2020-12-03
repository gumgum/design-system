module.exports = function ($) {
    let loaded = false;
    let table = {
        load: function () {
            $(document).on('click', '[gds-table-header]', function (e) {
                //
            });
        },
        sort: function (element) {
            /*
            if($(element)hasClass('gds-table__header--sort-desc')) {
                $(element).addClass('gds-table__header--sort-asc')
            }
            else {
                $(element).addClass('gds-table__header--sort-desc')
            }
            */
        }
    };

    /**
     * This function adds an event listener to a table.
     * @param {Array} options
     * @version 1.1.3
     * @namespace gdsTable
     */
    $.fn.gdsTable = function (options) {
        let me = this,
            init = false,
            methods = {
                /**
                 * Initialize a table.
                 * @param {Array} options
                 * @memberof gdsTable
                 * @method init
                 */
                init: function (options) {
                    init = true;
                    table.load();
                    return me;
                },
                sort: function (key, direction) {
                    table.sort(key, direction);
                    return me;
                }
            };

        if (init === false) { methods.init(options); }
        return methods;
    };

    return table;
};
