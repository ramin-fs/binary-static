const Callputspread = (() => {
    let el_slider;
    
    const getSliderPath = (x, y, width, height) => {
        const half = height / 2;
        return [
            'M', x, y,
            'l', half, -half,
            'h', width,
            'v', height,
            'h', -width,
            'z',
        ];
    };

    const redrawHandler = (e) => {
        window.chart = e.target;
        if (!e.target) return;
        if (el_slider) el_slider.destroy();

        // TODO: vertical line can be series added with .addSeries and removed with .destroy
        // or SVG added with renderer

        const chart = e.target;
        // TODO: point slider to calculated Y point
        // pass from highcharts.js in params
        const points = chart.series[0].data;
        const last_point = points[points.length - 1];
        el_slider = chart.renderer
            .path(getSliderPath(
                last_point.plotX + chart.plotLeft + 5,
                last_point.plotY + chart.plotTop,
                40,
                15,
            ))
            .attr({
                fill: '#FF0000',
                'stroke-width': 0,
            })
            .add();
    };

    const isCallputspread = (contract_type) => (
        /^(CALLSPREAD|PUTSPREAD)$/.test(contract_type)
    );

    const augmentChartOptions = (chart_options) => {
        chart_options.marginRight = 60;
        chart_options.redrawHandler = redrawHandler;
    };

    return {
        augmentChartOptions,
        isCallputspread,
    };
})();

module.exports = Callputspread;