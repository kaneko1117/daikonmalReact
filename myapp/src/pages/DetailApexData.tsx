import { useGetApexApi } from "../component/hooks/useGetApexApi";

export const DetailApexData = () => {
  const { data } = useGetApexApi();
  return <>{data}</>;
};
