import { brap } from './helpers';

module.exports = function ($) {

    const RANGESLIDER_ATTRIBUTE = 'data-gds-dual-range-slider',
        CURRENT_VALUE_ATTRIBUTE = 'data-gds-current-value',
        MAXVALUE_ATTRIBUTE = 'data-gds-max-value',
        MINVALUE_ATTRIBUTE = 'data-gds-min-value',
        RANGE_THUMB_ATTRIBUTE = 'data-gds-range-thumb',
        RANGE_TRACK_ATTRIBUTE = 'data-gds-range-track',
        RANGE_WRAPPER_ATTRIBUTE = 'data-gds-range-wrapper',
        RANGE_SELECTED_ATTRIBUTE = 'data-gds-range-selected',
        RANGE_LOW_ATTRIBUTE = 'data-gds-range-low',
        RANGE_HIGH_ATTRIBUTE = 'data-gds-range-high',
        IS_SET_ATTRIBUTE = 'data-gds-is-set',
        THUMB_MOUSEMOVE_EVT = `mousemove.${RANGE_THUMB_ATTRIBUTE}`,
        THUMB_MOUSEDOWN_EVT = `mousedown.${RANGE_THUMB_ATTRIBUTE}`,
        THUMB_MOUSEUP_EVT = `mouseup.${RANGE_THUMB_ATTRIBUTE}`,
        TRACK_MOUSEMOVE_EVT = `mousemove.${RANGE_SELECTED_ATTRIBUTE}`,
        TRACK_MOUSEDOWN_EVT = `mousedown.${RANGE_SELECTED_ATTRIBUTE}`,
        TRACK_MOUSEUP_EVT = `mouseup.${RANGE_SELECTED_ATTRIBUTE}`;

    let loaded = false,
        initialSet = false,
        $document = $(document),
        defaults = {minVal: 0, maxVal: 100, initialVal: [25, 75]},
        rangeSlider = {
            load: function () {
                if (loaded === false) {
                    loaded = true;
                    $document.on(THUMB_MOUSEDOWN_EVT, brap(RANGE_THUMB_ATTRIBUTE), rangeSlider.handleDown)
                        .on(TRACK_MOUSEDOWN_EVT, brap(RANGE_SELECTED_ATTRIBUTE), rangeSlider.handleTrackDown);
                }
            },
            handleDown: function (e) {
                e.stopPropagation();
                let $currentThumb = $(e.currentTarget),
                    $target = $currentThumb.parents(brap(RANGESLIDER_ATTRIBUTE));

                if (!$target.get(0).hasAttribute(MAXVALUE_ATTRIBUTE) || !$target.get(0).hasAttribute(MINVALUE_ATTRIBUTE)) {
                    $target.attr({[MAXVALUE_ATTRIBUTE]: defaults.maxVal, [MINVALUE_ATTRIBUTE]: defaults.minVal });
                }


                let $thumbs = $target.find(brap(RANGE_THUMB_ATTRIBUTE)),
                    $track = $target.find(brap(RANGE_TRACK_ATTRIBUTE)),
                    $wrapper = $target.find(brap(RANGE_WRAPPER_ATTRIBUTE)),
                    maxValue = parseFloat($target.attr(MAXVALUE_ATTRIBUTE)),
                    minValue = parseFloat($target.attr(MINVALUE_ATTRIBUTE));

                if (!$target.get(0).hasAttribute(IS_SET_ATTRIBUTE)) {
                    let options = minValue === undefined && maxValue === undefined ? null : { minVal: minValue, maxVal: maxValue, initialVal: [minValue, maxValue] };
                    rangeSlider.set($target, options);
                }

                $document.on(THUMB_MOUSEMOVE_EVT,
                    {
                        $currentThumb: $currentThumb,
                        $thumbs: $thumbs,
                        barPos: $target.offset(),
                        maxValue: maxValue,
                        minValue: minValue,
                        $track: $track,
                        $wrapper: $wrapper

                    }, rangeSlider.handleDrag)
                    .on(THUMB_MOUSEUP_EVT, rangeSlider.handleUp);
            },
            handleDrag: function (e) {
                e.stopPropagation();
                let {$currentThumb, $thumbs, barPos, maxValue, minValue, $wrapper} = e.data,
                    thumbWidth = $currentThumb.width() + 2,
                    totalWidth = $wrapper.width(),
                    nextValue = Math.max(0, Math.min(totalWidth, e.pageX - barPos.left - thumbWidth / 2)),
                    nextPct = (nextValue / totalWidth),
                    overallValue = Math.round(((maxValue - minValue) * nextPct) + minValue);

                //$currentThumb.css('left', `${nextPct * 100}%`).attr(CURRENT_VALUE_ATTRIBUTE, overallValue);
                rangeSlider.setThumb($currentThumb, nextPct * 100, overallValue);
                rangeSlider.setRange(e.data.$thumbs, e.data.$track, minValue, maxValue);
            },
            handleUp: function (e) {
                e.stopPropagation();
                $document.off(THUMB_MOUSEMOVE_EVT);
            },
            handleTrackDown: function (e) {
                e.stopPropagation();
                let $track = $(e.currentTarget),
                    $target = $track.parents(brap(RANGESLIDER_ATTRIBUTE)),
                    $thumbs = $target.find(brap(RANGE_THUMB_ATTRIBUTE)),
                    $wrapper = $target.find(brap(RANGE_WRAPPER_ATTRIBUTE)),
                    maxValue = parseFloat($target.attr(MAXVALUE_ATTRIBUTE)),
                    minValue = parseFloat($target.attr(MINVALUE_ATTRIBUTE));

                $document.on(TRACK_MOUSEMOVE_EVT,
                    {
                        $track: $track,
                        $thumbs: $thumbs,
                        $target: $target,
                        $wrapper: $wrapper,
                        barPos: $target.offset(),
                        offset: e.pageX - $track.offset().left,
                        currentWidth: $track.attr('data-gds-range-selected') / (maxValue - minValue) * 100,
                        maxValue: maxValue,
                        minValue: minValue

                    }, rangeSlider.handleTrackDrag)
                    .on(TRACK_MOUSEUP_EVT, rangeSlider.handleTrackUp);
            },
            handleTrackDrag: function (e) {
                e.stopPropagation();
                let {$track, $thumbs, $wrapper, barPos, offset, currentWidth, maxValue, minValue} = e.data,
                    totalWidth = $wrapper.width(),
                    nextValue = e.pageX - barPos.left - offset,
                    nextPct = (nextValue / totalWidth),
                    computePct = Math.max(0, nextPct * 100),
                    computeWidth = Math.min(computePct + currentWidth, 100);

                computePct = computeWidth - currentWidth;
                computePct = Math.max(0, computePct);

                let overallValue = Math.round(((maxValue - minValue) * computePct / 100) + minValue);

                $track.css('left', `${computePct}%`)
                    .attr({
                        [RANGE_LOW_ATTRIBUTE]: overallValue,
                        [RANGE_HIGH_ATTRIBUTE]: overallValue + parseFloat($track.attr(RANGE_SELECTED_ATTRIBUTE))
                    });

                rangeSlider.setThumb($thumbs.eq(0), computePct, overallValue, $track.attr(RANGE_LOW_ATTRIBUTE));
                rangeSlider.setThumb($thumbs.eq(1), computePct + currentWidth, $track.attr(RANGE_HIGH_ATTRIBUTE));
            },
            handleTrackUp: function (e) {
                e.stopPropagation();
                $document.off(TRACK_MOUSEMOVE_EVT);
            },
            setRange: function ($thumbs, $track, minValue, maxValue) {
                let t = $thumbs.map(function (i, elm) {
                        return parseFloat(elm.getAttribute(CURRENT_VALUE_ATTRIBUTE));
                    }),
                    low = Math.min(t[0], t[1]),
                    high = Math.max(t[0], t[1]),
                    left = Math.round((low / maxValue) * 100),
                    width = Math.round(((high - low) / maxValue) * 100);
                rangeSlider.setTrack($track, minValue, maxValue, high, low);
            },
            setTrack: function ($track, minValue, maxValue, high, low) {
                let left =  (low - minValue) / (maxValue - minValue) * 100,
                    width = (high - low) / (maxValue - minValue) * 100;
                $track.find(brap(RANGE_SELECTED_ATTRIBUTE)).css({
                    'left': `${left}%`,
                    'width': `${width}%`
                }).attr({
                    [RANGE_SELECTED_ATTRIBUTE]: (high - low),
                    [RANGE_LOW_ATTRIBUTE]: low,
                    [RANGE_HIGH_ATTRIBUTE]: high
                });
            },
            setThumb: function ($thumb, position, value) {
                $thumb.css('left', `${position}%`).attr(CURRENT_VALUE_ATTRIBUTE, value);
            },
            set: function ($element, options = {minVal: 0, maxVal: 100, initialVal: [25, 75]}) {
                $element.attr({[IS_SET_ATTRIBUTE]: true, [MAXVALUE_ATTRIBUTE]: options.maxVal, [MINVALUE_ATTRIBUTE]: options.minVal});

                $element.each(function (index, el) {
                    let $elm = $(el);
                    // SET CONTAINER ATTRIBUTES
                    $elm.attr({[MAXVALUE_ATTRIBUTE]: options.maxVal, [MINVALUE_ATTRIBUTE]: options.minVal});

                    // SET THUMB POSITIONS AND ATTRIBUTES
                    $elm.find(brap(RANGE_THUMB_ATTRIBUTE)).each(function (i, v) {
                        let $thumb = $(v),
                            baseValue = options.initialVal[i],
                            pctValue = (options.initialVal[i] - options.minVal) / (options.maxVal - options.minVal) * 100;
                        rangeSlider.setThumb($thumb, pctValue, options.initialVal[i]);
                    });

                    // SET TRACK POSITIONS AND ATTRIBUTES
                    let $track = $element.find(brap(RANGE_TRACK_ATTRIBUTE)),
                        low = Math.min(options.initialVal[0], options.initialVal[1]),
                        high = Math.max(options.initialVal[0], options.initialVal[1]);
                    rangeSlider.setTrack($track, options.minVal, options.maxVal, high, low);
                });
            },
            get: function (element) {
                let ranges = [];
                $(element).each(function (index, el) {
                    let $elm = $(el).find(brap(RANGE_SELECTED_ATTRIBUTE)),
                        range = {
                            element: el,
                            high: parseFloat($elm.attr(RANGE_HIGH_ATTRIBUTE)),
                            low: parseFloat($elm.attr(RANGE_LOW_ATTRIBUTE)),
                            selected: parseFloat($elm.attr(RANGE_SELECTED_ATTRIBUTE))
                        };
                    ranges.push(range);
                });
                return ranges;
            }
        };

    $.fn.gdsRangeSlider = function (options) {
        let me = this,
            init = false,
            methods = {
                init: function (options = {minVal: 0, maxVal: 100, initialVal: [25, 75]}) {
                    init = true;
                    rangeSlider.load();
                    rangeSlider.set(me, options);
                    return me;
                },
                set: function (options) {
                    rangeSlider.set(me, options);
                    return me;
                },
                get: function () {
                    let values = rangeSlider.get(me);
                    return values;
                }
            };

        if (init === false) { methods.init(options); }
        return methods;
    };

    return rangeSlider;
};
