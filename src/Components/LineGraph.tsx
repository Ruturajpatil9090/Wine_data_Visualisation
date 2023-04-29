import React from 'react'
import data from "../Wine-Data.json"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const LineGraph = () => {
  return (
    <div className="container" style={{marginTop:"50px"}}>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Flavanoids" />
      <YAxis dataKey="Ash" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Ash"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Flavanoids" stroke="#82ca9d" />
    </LineChart>
    </div>
  )

}

export default LineGraph

