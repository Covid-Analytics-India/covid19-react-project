import React, {useEffect} from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import * as d3 from 'd3';
import IndiaJson from './India.topo.json';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const ChoroplethMap = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const stateData = props.data;
  const stateCodes = stateData.y.map((state) => {
    switch (state) {
      case 'West Bengal':
        return 'WB';
      case 'Odisha':
        return 'OD';
      case 'Andhra Pradesh':
        return 'AP';
      case 'Jammu and Kashmir':
        return 'JK';
      case 'Ladakh':
        return 'LD';
      case 'Uttarakhand':
        return 'UK';
      case 'Uttar Pradesh':
        return 'UP';
      case 'Tripura':
        return 'TR';
      case 'Telangana':
        return 'TG';
      case 'Tamil Nadu':
        return 'TN';
      case 'Sikkim':
        return 'SK';
      case 'Rajasthan':
        return 'RJ';
      case 'Punjab':
        return 'PB';
      case 'Puducherry':
        return 'PD';
      case 'Delhi':
        return 'DL';
      case 'Nagaland':
        return 'NL';
      case 'Mizoram':
        return 'MZ';
      case 'Meghalaya':
        return 'MG';
      case 'Manipur':
        return 'MN';
      case 'Maharashtra':
        return 'MH';
      case 'Madhya Pradesh':
        return 'MP';
      case 'Lakshadweep':
        return 'LD';
      case 'Kerala':
        return 'KL';
      case 'Karnataka':
        return 'KR';
      case 'Jharkhand':
        return 'JK';
      case 'Himachal Pradesh':
        return 'HP';
      case 'Haryana':
        return 'HR';
      case 'Gujarat':
        return 'GJ';
      case 'Goa':
        return 'GA';
      case 'Daman and Diu':
        return 'DD';
      case 'Dadra and Nagar Haveli':
        return 'DN';
      case 'Chhattisgarh':
        return 'CT';
      case 'Chandigarh':
        return 'CH';
      case 'Bihar':
        return 'BR';
      case 'Assam':
        return 'AS';
      case 'Arunachal Pradesh':
        return 'AR';
      case 'Andaman and Nicobar Islands':
        return 'AN';
      default:
        return '';
    }
  });
  useEffect(() => {
    const dataset = {};
    const data = stateData.x.map((e, i) => [stateCodes[i], e]);
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
      .range(['#F0DFF1', '#67116E']);

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
        borderColor: '#44444442',
        highlightBorderWidth: 1,
        borderWidth: 0.5,
        dataJson: IndiaJson,
        popupTemplate: function (geo, data) {
          // don't show tooltip if country don't present in dataset
          if (!data) {
            return;
          }
          // tooltip content
          return [
            '<div class="hoverinfo" style={position: relative;}>',
            '<strong>',
            geo.properties.name,
            '</strong>',
            '<br>Count: <strong>',
            data.numberOfThings,
            '</strong>',
            '</div>',
          ].join('');
        },
      },
      fills: {},
      data: dataset,
      setProjection: function (element) {
        const projection = d3
          .geoMercator()
          .center([81.486328125, 22.983801417384697]) // always in [East Latitude, North Longitude]
          .scale(matches ? 570 : 870)
          .translate(
            matches
              ? [element.offsetWidth / 2 - 10, element.offsetHeight / 2]
              : [element.offsetWidth / 2 + 120, element.offsetHeight / 2 + 100]
          );

        const path = d3.geoPath().projection(projection);
        return {path: path, projection: projection};
      },
    });
  }, []);
  return (
    <div
      id="cloropleth_map"
      style={{
        height: matches ? 300 : 177,
        width: matches ? 600 : 330,
      }}
    ></div>
  );
};

export default ChoroplethMap;
