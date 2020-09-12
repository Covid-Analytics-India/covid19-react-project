import React from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import * as d3 from 'd3';
import IndiaJson from './India.topo.json';
import withTheme from '@material-ui/core/styles/withTheme';

class ChoroplethMap extends React.Component {
  componentDidMount() {
    const {geodata, theme} = this.props;
    const stateDataConfirmed = geodata.state_wise_confirmed;
    const stateDataRecovered = geodata.state_wise_recovered;
    const stateDataDeaths = geodata.state_wise_deaths;
    const stateCodes = geodata.state_codes;
    const dataset = {};
    const data = stateDataConfirmed.x.map((e, i) => [stateCodes[i], e]);
    // We need to colorize every country based on "numberOfWhatever"
    // colors should be uniq for every value.
    // For this purpose we create palette(using min/max data-value)
    const onlyValues = data.map(function (obj) {
      return obj[1];
    });
    const minValue = Math.min.apply(null, onlyValues);
    const maxValue = Math.max.apply(null, onlyValues);

    // create color palette function
    // color can be whatever you wish
    const paletteScale = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      // .range(['#F0DFF1', '#67116E']);
      .range([theme.palette.heatmap.low, theme.palette.heatmap.high]);

    // fill dataset in appropriate format
    data.forEach(function (item) {
      const iso = item[0];
      const value = item[1];
      dataset[iso] = {numberOfThings: value, fillColor: paletteScale(value)};
    });

    new Datamap({
      element: document.getElementById('cloropleth_map'),
      scope: 'india',
      responsive: true,
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: theme.palette.heatmap.low,
        highlightBorderWidth: 1,
        borderWidth: 0.5,
        dataJson: IndiaJson,
        popupTemplate: function (geo, data) {
          // don't show tooltip if country don't present in dataset
          if (!data) {
            return [
              `<div class="hoverinfo" style="
                position: relative; 
                background-color: ${theme.palette.background.default + '52'};
                backdrop-filter: blur(5px);
                border-radius: 8px;
                padding: 10px;
                border: none;
                box-shadow: none;
              ">`,
              '<div style="font-size: 20px; border-bottom: 1px solid gray; "><strong>',
              geo.properties.name,
              '</strong></div>',
              '<br>Confirmed: <span style="color: green;"><strong>',
              '0',
              '</strong></span>',
              '<br>Recovered: <span style="color: blue;"><strong>',
              '0',
              '</strong></span>',
              '<br>Deceased: <span style="color: red;"><strong>',
              '0',
              '</strong></span>',
              '</div>',
            ].join('');
          }
          // find data
          const RIndex = stateDataRecovered.y.findIndex(
            (r) => r === geo.properties.name
          );
          const DIndex = stateDataDeaths.y.findIndex(
            (d) => d === geo.properties.name
          );
          // tooltip content
          return [
            `<div class="hoverinfo" style="
              position: relative; 
              background-color: ${theme.palette.background.default + '52'};
              backdrop-filter: blur(5px);
              border-radius: 8px;
              padding: 10px;
              border: none;
              box-shadow: none;
            ">`,
            '<div style="font-size: 20px; border-bottom: 1px solid gray; "><strong>',
            geo.properties.name,
            '</strong></div>',
            '<br>Confirmed: <span style="color: green;"><strong>',
            data.numberOfThings,
            '</strong></span>',
            '<br>Recovered: <span style="color: blue;"><strong>',
            stateDataRecovered.x[RIndex],
            '</strong></span>',
            '<br>Deceased: <span style="color: red;"><strong>',
            stateDataDeaths.x[DIndex],
            '</strong></span>',
            '</div>',
          ].join('');
        },
      },
      arcConfig: {
        animationSpeed: 600,
      },
      fills: {defaultFill: 'white'},
      data: dataset,
      setProjection: function (element) {
        const projection = d3
          .geoMercator()
          .center([81.486328125, 22.983801417384697]) // always in [East Latitude, North Longitude]
          .scale(window.innerWidth > 600 ? 870 : 570)
          .translate(
            window.innerWidth > 600
              ? [element.offsetWidth / 2, element.offsetHeight / 2 - 50]
              : [element.offsetWidth / 2 - 10, element.offsetHeight / 2]
          );

        const path = d3.geoPath().projection(projection);
        return {path: path, projection: projection};
      },
    });
  }
  render() {
    return (
      <div
        id="cloropleth_map"
        style={{
          height: window.innerWidth > 600 ? 300 : 177,
          width: window.innerWidth > 600 ? 600 : 330,
        }}
      ></div>
    );
  }
}

export default withTheme(ChoroplethMap);
