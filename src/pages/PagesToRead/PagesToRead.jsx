import { ResponsiveContainer } from "recharts";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getRead } from "../../utility/localStorage";
import { useEffect, useState } from "react";
const colors = ["#0085F6", "#00C29C", "#FBB929", "#FC8042", "#FB0100", "pink"];

export default function PagesToRead() {
  const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const value = await getRead();
    const chartData = value.map((item) => ({
      name: item.bookName,
      uv: item.totalPages
    }));
    setData(chartData);
  };

  fetchData();
}, []);

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
  return (
    <div
      className="bg-[#13131308] rounded-2xl p-5 lg:p-12 mt-11"
      style={{ width: "100%", height: 500 }}
    >
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
