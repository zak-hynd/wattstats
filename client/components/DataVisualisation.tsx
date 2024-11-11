import { DataFrame } from 'danfojs/dist/danfojs-base';
import Plot from 'react-plotly.js';
import { Data } from 'plotly.js'

interface Props {
  df: DataFrame;
}

function DataVisualisation({ df }: Props) {
  const data: Data[] = [{
    x: df['date'].values,
    y: df['usage'].values,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Usage'
  }];

  return (
    <Plot
      data={data}
      layout={{
        width: 800,
        height: 400,
        title: 'Electricity Usage Over Time',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Usage' }
       }}
    />
  );
}

export default DataVisualisation;