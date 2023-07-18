import {
  TableHead,
  TableBody,
  TableHeaderCell,
  TableRow,
  Card,
  Title,
  Text,
  Grid,
  Col,
  TableCell,
  Table,
  Button,
} from "@tremor/react";

export default function AdminDashboard() {
  return (
    <main>
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Grid numItemsLg={6} className="gap-6 mt-">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-full border-4 border-gray-500 bg-gray-200">
            <Button size="md">Create</Button>
            <Button size="md">Post</Button>
            <Button size="md">Delete</Button>
            <Button size="md">Put</Button>
            <div className="h-60" />
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card className="border-4 border-gray-500 bg-gray-200">
              <Card>
                <Title>List of Users</Title>
                <Table className="mt-3">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Id</TableHeaderCell>
                      <TableHeaderCell>userStatus</TableHeaderCell>
                      <TableHeaderCell>Name</TableHeaderCell>
                      <TableHeaderCell>Surname</TableHeaderCell>
                      <TableHeaderCell>Email</TableHeaderCell>
                      <TableHeaderCell>Password</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>mapeo</TableBody>
                </Table>
              </Card>
            </Card>
            <Card className="border-4 border-gray-500 bg-gray-200">
              <Title>List of Activities</Title>
              <Table className="mt-3">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell>Imagen</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Schedule</TableHeaderCell>
                    <TableHeaderCell>Tipo de actividad</TableHeaderCell>
                    <TableHeaderCell>Rating</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>mapeo</TableBody>
              </Table>
            </Card>
            <Card className="border-4 border-gray-500 bg-gray-200">
              <Title>List of Extra Activities</Title>
              <Table className="mt-3">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell>Imagen</TableHeaderCell>
                    <TableHeaderCell>Price</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Schedule</TableHeaderCell>
                    <TableHeaderCell>Rating</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>mapeo</TableBody>
              </Table>
            </Card>
          </div>
        </Col>
      </Grid>
    </main>
  );
}
