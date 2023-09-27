import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetApexApi = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<string>();
  const getApexApiFetch = async (id: string) => {
    const apexKey = process.env.REACT_APP_APEX_API_KEY;
    const url = `https://api.mozambiquehe.re/bridge?auth=${apexKey}&player=${id}&platform=PS4`;
    const res = await fetch(url, {
      mode: "cors",
      method: "GET",
    });
    if (res.status !== 200) {
      alert("不正なIDです。");
    } else {
      const data = await res.json();
      const basicData: any = await Object.values(data)[0];
      navigate("result");
      console.log(data);
      setData(basicData.level);
    }
  };

  return { getApexApiFetch, data };
};
