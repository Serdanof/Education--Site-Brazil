import Chart from "react-google-charts";
import ChartMonth from "../../components/Student/ChartMonth";
import ChartWeek from "../../components/Student/ChartWeek";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";

export const data = [
  ["City", "Successful Rate"],
  [`Math ${59}%`, 59],
  [`Portugese ${13}%`, 13],
];

export const options = {
  title: "Correct answers",
  chartArea: { width: "70%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
    textPosition: 'none',
    viewWindow: {
      min: 0,
      max: 100
  },
  },
  vAxis: {
    title: "Subjects",
  },
  colors:['#22ff69', '#552277'],
  titleTextStyle: {
    // i.e. 'Times New Roman'
    fontSize: 18,
  },
};

const Dashboard = () => {
  return (
    <div className="md:m-20 m-4">
      <div className="md:grid grid-cols-2 md:gap-20 mb-10">
        <div>
          <div className="flex bg-white items-center px-10 py-5 gap-10 mb-5 rounded-xl">
            <div className="bg-gray-300 p-3">
              <CastConnectedOutlinedIcon className="text-sky-800" />
            </div>
            <div>
              <div>Jogos finalizados pelos alunos</div>
              <div>1 Jogos</div>
            </div>
          </div>
          <ChartWeek />
        </div>
        <div className="mt-10 md:mt-0">
          <div>
            <div className="flex bg-white items-center px-10 py-5 gap-10 mb-5 rounded-xl">
              <div className="bg-gray-300 p-3">
                <WatchOutlinedIcon className="text-sky-800" />
              </div>
              <div>
                <div>Jogos finalizados pelos alunos</div>
                <div>1 Jogos</div>
              </div>
            </div>
          </div>
          <ChartMonth />
        </div>
      </div>
      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Dashboard;
