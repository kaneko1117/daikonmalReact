import React, { useState } from "react";
import { Button } from "../component/atoms/Button";
import { Input } from "../component/atoms/Input";
import { useGetApexApi } from "../component/hooks/useGetApexApi";

export const Main = () => {
  const [apexId, setApexId] = useState<string>("");
  const { getApexApiFetch } = useGetApexApi();
  const onChangeApexId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApexId(e.target.value);
  };
  const fetchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("成功");
    getApexApiFetch(apexId);
  };
  return (
    <>
      <Input value={apexId} onChange={(e) => onChangeApexId(e)} />
      <Button onClick={(e) => fetchHandler(e)}>検索</Button>
    </>
  );
};
