// HighchartsGraph.js

import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const HighchartsGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      Highcharts.chart(chartRef.current, {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Sample Chart'
        },
        series: [{
          data: [1, 2, 3, 4, 5]
        }]
      });
    }
  }, []);

  return <div ref={chartRef} />;
};

export default HighchartsGraph;
