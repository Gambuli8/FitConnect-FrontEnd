import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  getUser,
  getActivities,
  postActivity,
} from "../../redux/Actions/Actions";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUser);
  const allActivities = useSelector((state) => state.allActivities);

  const [formData, setFormData] = useState({
    name: "",
    schedule: "",
    type_activity: "",
    rating: "",
    image: "",
  });

  const nameRef = useRef();
  const scheduleRef = useRef();
  const typeRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      name: nameRef.current.value,
      schedule: scheduleRef.current.value,
      type_activity: typeRef.current.value,
      rating: ratingRef.current.value,
      image: imageRef.current.value,
    };
    dispatch(postActivity(newActivity));
    console.log(newActivity);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    dispatch(getUser());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 mt-">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-full border-4 border-gray-500 bg-gray-200 flex-1">
            <Button
              className="bg-blue"
              onClick={() => setShowForm(true)}
              size="xl"
            >
              Create
            </Button>
            {showForm && (
              <Card>
                <Title>Create Actividad</Title>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      ref={nameRef}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Schedule:</label>
                    <input
                      type="text"
                      id="schedule"
                      name="schedule"
                      ref={scheduleRef}
                      value={formData.schedule}
                      onChange={(e) =>
                        setFormData({ ...formData, schedule: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Type Activity:</label>
                    <input
                      type="text"
                      id="type_activity"
                      name="type_activity"
                      value={formData.type_activity}
                      ref={typeRef}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          type_activity: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Rating:</label>
                    <input
                      type="text"
                      id="rating"
                      name="rating"
                      value={formData.rating}
                      ref={ratingRef}
                      onChange={(e) =>
                        setFormData({ ...formData, rating: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Image:</label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={formData.image}
                      ref={imageRef}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                    />
                  </div>
                  {/* Add more input fields for other properties of the user */}
                  <Button type="submit" className="bg-green-500" size="xl">
                    Submit
                  </Button>
                  <Button
                    className="bg-red-500"
                    onClick={() => setShowForm(false)}
                    size="xl"
                  >
                    Cancel
                  </Button>
                </form>
              </Card>
            )}
            <Button size="xl">Delete</Button>
            <Button size="xl">Put</Button>
            <div className="h-60" />
          </Card>
        </Col>
        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card className="border-4 border-gray-500 bg-gray-200">
              <Card>
                <Title>List of Users</Title>
                <Table className="mt-3 text-sm">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell className="w-1/6 px-3 py-1">
                        Id
                      </TableHeaderCell>
                      <TableHeaderCell className="w-1/6 px-3 py-1">
                        userStatus
                      </TableHeaderCell>
                      <TableHeaderCell className="w-1/6 px-3 py-1">
                        Name
                      </TableHeaderCell>
                      <TableHeaderCell className="w-1/6 px-3 py-1">
                        Surname
                      </TableHeaderCell>
                      <TableHeaderCell className="w-1/6 px-3 py-1">
                        Email
                      </TableHeaderCell>
                      <TableHeaderCell className="w-1/6 px-3 py-1">
                        Password
                      </TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allUsers?.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.userStatus}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.surname}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.password}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </Card>
            <Card className="border-4 border-gray-500 bg-gray-200">
              <Title>List of Activities</Title>
              <Table className="mt-3">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Schedule</TableHeaderCell>
                    <TableHeaderCell>Tipo de actividad</TableHeaderCell>
                    <TableHeaderCell>Rating</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allActivities?.map((act) => (
                    <TableRow key={act.idAct}>
                      <TableCell>{act.idAct}</TableCell>
                      <TableCell>{act.name}</TableCell>
                      <TableCell>{act.schedule}</TableCell>
                      <TableCell>{act.type_activity}</TableCell>
                      <TableCell>{act.rating}</TableCell>
                      <TableCell>{act.true}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
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
