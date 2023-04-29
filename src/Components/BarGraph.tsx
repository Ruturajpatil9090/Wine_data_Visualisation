import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";
import data from "../Wine-Data.json";

interface WineData {
  Alcohol: number;
  Magnesium: number;
}

const groupedData: WineData[] = data.reduce((acc: WineData[], curr: WineData) => {
  const alcohol = curr.Alcohol;
  const magnesium = curr.Magnesium;
  const existingGroup = acc.find((group) => group.Alcohol === alcohol);
  if (!existingGroup) {
    acc.push({ Alcohol: alcohol, Magnesium: magnesium });
  } else {
    existingGroup.Magnesium = Math.min(existingGroup.Magnesium, magnesium);
  }
  return acc;
}, []);

const BarChartExample: React.FC = () => {
  return (
    <BarChart width={600} height={300} data={groupedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Alcohol">
        <Label value="Alcohol" position="insideBottom" style={{marginTop:"10px"}} />
      </XAxis>
      <YAxis>
        <Label
          value="Magnesium"
          angle={-90}
          position="insideLeft"
          style={{ textAnchor: "middle" }}
        />
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="Magnesium" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartExample;