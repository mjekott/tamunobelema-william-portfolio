import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

const AdminDashboard = () => {
  return <NextStudio config={config} />;
};

export default AdminDashboard;
