import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { putActivity } from "../../redux/Actions/Actions";
import { Button } from "@tremor/react";

const ActivityEditForm = ({ selectedActivity, setShowForm }) => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(selectedActivity.image);
  const nameRef = useRef();
  const scheduleRef = useRef();
  const typeRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedActivity = {
      idAct: selectedActivity.idAct,
      name: nameRef.current.value,
      schedule: scheduleRef.current.value,
      type_activity: typeRef.current.value,
      rating: ratingRef.current.value,
      image: selectedActivity.image, // We will update the image below
    };

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
      updatedActivity.image = data.secure_url;
      setImagePreview(data.secure_url); // Update the image preview in the form
    }

    try {
      dispatch(putActivity(updatedActivity, selectedActivity.idAct));
      console.log(updatedActivity);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex space-x-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            defaultValue={selectedActivity.name}
          />
        </div>
        <div>
          <label htmlFor="name">Schedule:</label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            ref={scheduleRef}
            defaultValue={selectedActivity.schedule}
          />
        </div>
        <div>
          <label htmlFor="name">Type Activity:</label>
          <input
            type="text"
            id="type_activity"
            name="type_activity"
            ref={typeRef}
            defaultValue={selectedActivity.type_activity}
          />
        </div>
        <div>
          <label htmlFor="name">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            ref={ratingRef}
            defaultValue={selectedActivity.rating}
          />
        </div>
        <div>
          <label htmlFor="name">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            ref={imageRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImagePreview(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>
        {imagePreview && (
          <div>
            <img src={imagePreview} alt="Preview" style={{ width: "200px" }} />
          </div>
        )}
        {/* Add more input fields for other properties of the activity */}
        <Button type="submit" className="bg-green-500" size="xl">
          Save Changes
        </Button>
        <Button
          className="bg-red-500"
          onClick={() => setShowForm(false)}
          size="xl"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default ActivityEditForm;
