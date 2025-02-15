import React, { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventDescription: ""
  });

  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("eventName", eventData.eventName);
      formData.append("eventDate", eventData.eventDate);
      formData.append("eventTime", eventData.eventTime);
      formData.append("eventDescription", eventData.eventDescription);
      formData.append("eventBanner", image);

      const eventRes = await axios.post(
        "http://localhost:3000/events/create-event",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      console.log(eventRes.data);
      alert(eventRes.data.msg);
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 contactUsContainer w-75">
        <br />
        <div className="contact-form">
          <h2>Welcome to EventlyApp</h2>
          <br />
          <h5>Create a New Event</h5>
          <hr />
          <form className="container" method="POST" onSubmit={handleFormSubmit}>
            <div className="container mb-3">
              <label htmlFor="eventName" className="form-label">
                <h5>Event Name</h5>
              </label>
              <input
                className="form-control"
                name="eventName"
                id="eventNameId"
                rows="5"
                placeholder="Enter Event Name here..."
                onChange={handleInputChange}
              ></input>
            </div>
            <br />
            <div className="container mb-3">
              <label htmlFor="eventTime-Date" className="form-label">
                <h5>Event Date/Time</h5>
              </label>
              <div>
                <ul>
                  <li>
                    <div className="mb-3 ps-4 pe-5">
                      <label htmlFor="eventDate" className="form-label">
                        <h5>Event Date</h5>
                      </label>
                      <input
                        type="text"
                        className="form-control w-75"
                        name="eventDate"
                        onFocus={(e) => (e.target.type = "date")}
                        id="eventDateId"
                        placeholder="Date (DD/MM/YYYY)"
                        onChange={handleInputChange}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="mb-3 ps-4 pe-5">
                      <label htmlFor="eventTime" className="form-label">
                        <h5>Event Time</h5>
                      </label>
                      <input
                        type="text"
                        className="form-control w-75"
                        name="eventTime"
                        onFocus={(e) => (e.target.type = "time")}
                        id="eventTimeId"
                        placeholder="Time (HH:MM AM/PM)"
                        onChange={handleInputChange}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <br />
            <div className="container mb-3">
              <label htmlFor="eventDescription" className="form-label">
                <h5>Event Description</h5>
              </label>
              <textarea
                className="form-control"
                name="eventDescription"
                id="eventDescriptionId"
                rows="5"
                placeholder="Write Event Description here..."
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="container mb-3">
              <label htmlFor="eventBanner" className="form-label">
                <h5 className="pt-2 pb-2">Upload Event Banner</h5>
              </label>
              <input
                type="file"
                name="eventBanner"
                className="form-control"
                id="eventBannerId"
                onChange={handleFileChange}
              />
              <input
                className="btn btn-primary mt-4 mb-3"
                type="submit"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
