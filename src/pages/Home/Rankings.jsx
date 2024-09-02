import { useEffect } from "react";
import { FunnelChart, Tooltip, Funnel, LabelList } from "recharts";
import useFetch from "../../hooks/useFetch";

const API_KEY = import.meta.env.VITE_API_KEY;

function Rankings() {
  const { data, fetchPending, error, setHeaders } = useFetch(
    "https://d2h6rsg43otiqk.cloudfront.net/prod/rankings"
  );

  useEffect(() => {
    setHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    });
  }, [setHeaders]);

  if (fetchPending) {
    console.log("loading");
  }

  if (error) {
    console.log(error);
  }

  console.log(data);

  return (
    <div>
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList
            position="right"
            fill="#000"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </div>
  );
}

export default Rankings;
