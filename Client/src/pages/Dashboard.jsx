import Navbar from "../components/Navbar";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>120</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>32</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Views</CardTitle>
          </CardHeader>
          <CardContent>410</CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
