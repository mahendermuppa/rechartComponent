import React from 'react';
import { PieChart, Pie, Sector, Cell, } from 'recharts';
import './Style.css';


const dataGreen = [{ name: 'name', value: 100 }, { name: 'other', value: 0 }];
const COLORSGreen = ['#90ee90', '#ffffff'];

const dataRed = [{ name: 'name', value: 20 }, { name: 'other', value: 80 }];
const COLORSRed = ['#f92f2f', '#ffffff'];

const dataOrange = [{ name: 'name', value: 75 }, { name: 'other', value: 25 }];
const COLORSOrange = ['#ffa500', '#ffffff'];

const dataWhite = [{ name: 'name', value: 0 }, { name: 'other', value: 100 }];
const COLORSWhite = ['#ffffff', '#ffffff'];


class TwoSimplePieChart extends React.Component {
    render() {
        return (
            <div>
                {/* red */}
                <div className="mainCls">
                    <PieChart width={80} height={80}>
                        <Pie
                            stroke="none"
                            data={dataGreen}
                            cx={35}
                            cy={35}
                            labelLine={false}
                            innerRadius={30}
                            outerRadius={33}
                            fill="#ffffff"
                            textAnchor='end'
                            paddingAngle={0}
                            margin={0}
                        >
                            {
                                dataGreen.map((entry, index) => <Cell fill={COLORSGreen[index % COLORSGreen.length]} />)
                            }
                        </Pie>

                    </PieChart>
                    <div class="label">
                        <div class="icon green">
                            <div class="valueText">
                                <div class="value">24</div>
                                <div class="name">hrs</div>
                            </div>
                        </div>
                    </div>
                    <div class="pieTitle">
                        Excellent
                    </div>
            </div>

                {/* Orange */}
            <div className="mainCls">
                    <PieChart width={80} height={80}>
                        <Pie
                            stroke="none"
                            data={dataOrange}
                            cx={35}
                            cy={35}
                            labelLine={false}
                            innerRadius={30}
                            outerRadius={33}
                            fill="#ffffff"
                            textAnchor='end'
                            paddingAngle={0}
                            margin={0}
                        >
                            {
                                dataOrange.map((entry, index) => <Cell fill={COLORSOrange[index % COLORSOrange.length]} />)
                            }
                        </Pie>

                    </PieChart>
                    <div class="label">
                        <div class="icon orange">
                            <div class="valueText">
                                <div class="value">18</div>
                                <div class="name">hrs</div>
                            </div>
                        </div>
                    </div>
                    <div class="pieTitle">
                        Good
                    </div>
            </div>
                {/* red */}
            <div className="mainCls">
                    <PieChart width={80} height={80}>
                        <Pie
                            stroke="none"
                            data={dataRed}
                            cx={35}
                            cy={35}
                            labelLine={false}
                            innerRadius={30}
                            outerRadius={33}
                            fill="#ffffff"
                            textAnchor='end'
                            paddingAngle={0}
                            margin={0}
                        >
                            {
                                dataRed.map((entry, index) => <Cell fill={COLORSRed[index % COLORSRed.length]} />)
                            }
                        </Pie>

                    </PieChart>
                    <div class="label">
                        <div class="icon red">
                            <div class="valueText">
                                <div class="value">6</div>
                                <div class="name">hrs</div>
                            </div>
                        </div>
                    </div>
                    <div class="pieTitle">
                        Poor
                    </div>
            </div>
                {/* White */}
            <div className="mainCls">
                    <PieChart width={80} height={80}>
                        <Pie
                            stroke="none"
                            data={dataWhite}
                            cx={35}
                            cy={35}
                            labelLine={false}
                            innerRadius={30}
                            outerRadius={33}
                            fill="#ffffff"
                            textAnchor='end'
                            paddingAngle={0}
                            margin={0}
                        >
                            {
                                dataWhite.map((entry, index) => <Cell fill={COLORSWhite[index % COLORSWhite.length]} />)
                            }
                        </Pie>

                    </PieChart>
                    <div class="label">
                        <div class="icon white">
                            <div class="valueText">
                                <div class="value fontBlack">0</div>
                                <div class="name fontBlack">hrs</div>
                            </div>
                        </div>
                    </div>
                    <div class="pieTitle">
                        N/A
                    </div>
            </div>
        </div>);
    }
}
export default TwoSimplePieChart;