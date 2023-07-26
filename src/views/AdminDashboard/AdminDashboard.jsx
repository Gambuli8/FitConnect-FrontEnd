import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableHead,
  TableBody,
  TableHeaderCell,
  TableRow,
  Card,
  Title,
  Grid,
  Col,
  TableCell,
  Table,
  Button,
} from "@tremor/react";
import {
  getUser,
  getActivities,
  getExtraActivities,
  postActivity,
  postExtraActivity,
  putActivity,
  // deleteUser,
  putUser,
} from "../../redux/Actions/Actions";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUser);
  const allActivities = useSelector((state) => state.allActivities);
  const allExtraActivities = useSelector((state) => state.allExtraActivities);
  const [selectedActivity, setSelectedActivity] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showExtraForm, setExtraShowForm] = useState(false);

  const nameRef = useRef();
  const scheduleRef = useRef();
  const typeRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  //                                                                          HANDLE DEL PUT
  const handleEditActivity = (activity) => {
    setSelectedActivity(activity);
    setFormData(activity);
    setShowForm(true);
    setExtraShowForm(false);
  };

  //                                              HABILITAR Y DESHABILITAR USUARIO
  const handleDisableUser = (userId, email) => {
    try {
      const updatedUserData = {
        id: userId,
        status: false,
        email: email,
      };
      console.log(updatedUserData);
      dispatch(putUser(updatedUserData));
      console.log("Usuario deshabilitado exitosamente");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleEnableUser = (userId, email) => {
    try {
      const updatedUserData = {
        id: userId,
        status: true,
        email: email,
      };
      console.log(updatedUserData);
      dispatch(putUser(updatedUserData));
      console.log("Usuario habilitado exitosamente");
    } catch (error) {
      console.log(error.message);
    }
  };

  //                                                           INPUTS DE FORM ACT y EXTRA ACT
  const [formData, setFormData] = useState({
    name: "",
    schedule: "",
    type_activity: "",
    rating: "",
    image: "",
  });
  const [extraFormData, setextraFormData] = useState({
    name: "",
    schedule: "",
    type_activity: "",
    rating: "",
    image: "",
    description: "",
    price: 0,
  });

  //                                                         mostrar los formularios
  const handleShowExtraForm = () => {
    setShowForm(false); // Asegurarse de que el formulario de actividades normales esté oculto cuando se abre el formulario de actividades extra
    setExtraShowForm(true);
  };

  //                                                    handle del form de extra activities
  const handleExtraSubmit = async (e) => {
    e.preventDefault();
    try {
      const newExtraActivity = {
        name: nameRef.current.value,
        schedule: scheduleRef.current.value,
        type_activity: typeRef.current.value,
        rating: ratingRef.current.value,
        image: imageRef.current.files[0],
        description: descRef.current.value,
        price: priceRef.current.value,
      };
      console.log(newExtraActivity);
      const imageFile = imageRef.current.files[0];
      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("file", imageFile);
        imageFormData.append("upload_preset", "Activities");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/djqwbu0my/upload",
          {
            method: "POST",
            body: imageFormData,
          }
        );
        const data = await response.json();
        console.log(data);
        newExtraActivity.image = data.secure_url;
      }
      dispatch(postExtraActivity(newExtraActivity));
      console.log(newExtraActivity);
      setExtraShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  //                                            handle del form de Activities
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedActivity.idAct) {
        console.log(selectedActivity);
        dispatch(putActivity(selectedActivity.idAct, formData));
        console.log(selectedActivity.idAct);
        console.log(formData);
      } else {
        const newActivity = {
          name: nameRef.current.value,
          schedule: scheduleRef.current.value,
          type_activity: typeRef.current.value,
          rating: ratingRef.current.value,
          image: imageRef.current.files[0],
        };

        const imageFile = imageRef.current.files[0];
        console.log(imageFile);
        if (imageFile) {
          const imageFormData = new FormData();
          imageFormData.append("file", imageFile);
          imageFormData.append("upload_preset", "Activities");
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/djqwbu0my/upload",
            {
              method: "POST",
              body: imageFormData,
            }
          );
          const data = await response.json();
          console.log(data);
          newActivity.image = data.secure_url;
        }

        dispatch(postActivity(newActivity));
        console.log(newActivity);
        setShowForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getUser());
    dispatch(getActivities());
    dispatch(getExtraActivities());
  }, [dispatch]);

  // RENDERIZACION
  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 mt-">
        {/* Main section */}
        <Col numColSpanLg={6}>
          <Card className="h-full border-4 border-gray-500 bg-gray-200 flex-1">
            <Button className="text-xl" onClick={() => setShowForm(true)}>
              PUSH ME TO CREATE AN ACTIVITY!
            </Button>
            <Button className="bg-blue" onClick={handleShowExtraForm} size="xl">
              PUSH ME TO CREATE AN EXTRA ACTIVITY!
            </Button>

            {showExtraForm && (
              <div className="flex space-x-4">
                <Card>
                  {" "}
                  {/* Nuevo formulario para actividades extra */}
                  <Title>Please complete all the fields!</Title>
                  <p className="text-3xl text-center text-red-600 font-semibold">
                    Create an extra activity!
                  </p>
                  <form onSubmit={handleExtraSubmit}>
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameRef}
                        value={extraFormData.name}
                        onChange={(e) =>
                          setextraFormData({
                            ...extraFormData,
                            name: e.target.value,
                          })
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
                        value={extraFormData.schedule}
                        onChange={(e) =>
                          setextraFormData({
                            ...extraFormData,
                            schedule: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="name">Description:</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        ref={descRef}
                        value={extraFormData.description}
                        onChange={(e) =>
                          setextraFormData({
                            ...extraFormData,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="name">Price:</label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        ref={priceRef}
                        value={extraFormData.price}
                        onChange={(e) =>
                          setextraFormData({
                            ...extraFormData,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="name">Type Activity:</label>
                      <input
                        type="text"
                        id="type_activity"
                        name="type_activity"
                        value={extraFormData.type_activity}
                        ref={typeRef}
                        onChange={(e) =>
                          setextraFormData({
                            ...extraFormData,
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
                        value={extraFormData.rating}
                        ref={ratingRef}
                        onChange={(e) =>
                          setextraFormData({
                            ...extraFormData,
                            rating: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="name">Image:</label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        ref={imageRef}
                        onChange={(e) =>
                          setextraFormData({
                            ...extraFormData,
                            image: e.target.files[0],
                          })
                        }
                      />
                    </div>
                    {/* Add more input fields for other properties of the user */}
                    <Button type="submit" className="bg-green-500" size="xl">
                      Submit
                    </Button>
                    <Button
                      className="bg-red-500"
                      onClick={() => setExtraShowForm(false)}
                      size="xl"
                    >
                      Cancel
                    </Button>
                  </form>
                </Card>
              </div>
            )}
            {showForm && (
              <Card>
                <Title>Please complete all the fields!</Title>
                <p className="text-3xl text-red-600 text-center font-semibold">
                  Create a Activity!
                </p>
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
                      type="file"
                      id="image"
                      name="image"
                      ref={imageRef}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.files[0] })
                      }
                    />
                  </div>
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
            <div className="h-60" />
          </Card>
        </Col>
        {/* KPI sidebar */}
        <Col numColSpanLg={6}>
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
                        userStatusMembership
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
                      <TableHeaderCell>
                        Habilitar o Deshabilitar
                      </TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allUsers?.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{String(user.userStatus)}</TableCell>
                        <TableCell>{String(user.status)}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.surname}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <div className="flex space-x-4">
                          <Button
                            onClick={() =>
                              handleDisableUser(user.id, user.email)
                            } // Añade la función para eliminar el usuario
                            className="bg-orange-500"
                            size="xl"
                          >
                            Deshabilitar
                          </Button>
                          <Button
                            onClick={() =>
                              handleEnableUser(user.id, user.email)
                            }
                            className="bg-green-500"
                            size="xl"
                          >
                            Habilitar
                          </Button>
                        </div>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </Card>
            <div>
              <Card className="border-4 border-gray-500 bg-gray-200">
                <Title>List of Activities</Title>
                <Table className="mt-3 text-sm">
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
                    {/* actividades normales */}
                    {allActivities?.map((act) => (
                      <TableRow key={act.idAct}>
                        <TableCell>{act.idAct}</TableCell>
                        <TableCell>{act.name}</TableCell>
                        <TableCell>{act.schedule}</TableCell>
                        <TableCell>{act.type_activity}</TableCell>
                        <TableCell>{act.rating}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => handleEditActivity(act)}
                            className="bg-yellow-500"
                            size="xl"
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
            <Card className="border-4 border-gray-500 bg-gray-200">
              <Title>List of Extra Activities</Title>
              <Table className="mt-3 text-sm">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell>Tipo de Actividad</TableHeaderCell>
                    <TableHeaderCell>Price</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Schedule</TableHeaderCell>
                    <TableHeaderCell>Rating</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* extra actividades */}
                  {allExtraActivities?.map((ext) => (
                    <TableRow key={ext.idExtraAct}>
                      <TableCell>{ext.idExtraAct}</TableCell>
                      <TableCell>{ext.type_activity}</TableCell>
                      <TableCell>{ext.price}</TableCell>
                      <TableCell>{ext.name}</TableCell>
                      <TableCell>{ext.schedule}</TableCell>
                      <TableCell>{ext.rating}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </Col>
      </Grid>
    </main>
  );
}
