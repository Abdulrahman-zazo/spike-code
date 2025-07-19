import { Spin } from "antd";

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        height: "100vh",
      }}
    >
      <Spin />
    </div>
  </>
);

export default Loader;
