import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', sales: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', sales: 300, pv: 1398, amt: 2210 },
    { name: 'Mar', sales: 200, pv: 9800, amt: 2290 },
    { name: 'April', sales: 278, pv: 3908, amt: 2000 },
    { name: 'May', sales: 189, pv: 4800, amt: 2181 },
    { name: 'June', sales: 239, pv: 3800, amt: 2500 },
    { name: 'July', sales: 349, pv: 4300, amt: 2100 },
    { name: 'Aug', sales: 400, pv: 2400, amt: 2400 },
    { name: 'Sept', sales: 300, pv: 1398, amt: 2210 },
    { name: 'Oct', sales: 200, pv: 9800, amt: 2290 },
    { name: 'Nov', sales: 278, pv: 3908, amt: 2000 },
    { name: 'Dec', sales: 189, pv: 4800, amt: 2181 },

];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Sales in ${label} month : $${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};


function SalesChart() {
    return (
        <ResponsiveContainer width="100%" height={300} style={{ color: "#000000" }}>
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="natural" dataKey="sales" stroke="#44A8F1" strokeWidth={5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke='#121F43' fontSize={"12px"} fontWeight={400} />
                <YAxis stroke='#121F43' axisLine={false} tickLine={false} fontSize={"12px"} fontWeight={400} />
                <Tooltip content={<CustomTooltip />} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SalesChart