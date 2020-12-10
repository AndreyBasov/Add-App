import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Modal, Form } from "react-bootstrap";

const CreateArea = (props) => {
  let [isExpanded, setExpanded] = useState(false);
  const handleClose = () => setExpanded(false);
  const handleShow = () => {
    setBanner({
      title: "",
      content: "",
      url: "",
      color: "#000",
    });
    setExpanded(true);
  };

  let [banner, setBanner] = useState({
    title: "",
    content: "",
    phone: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBanner((prevBanner) => {
      return {
        ...prevBanner,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(banner);
    handleClose();
    event.preventDefault();
  };

  const chooseCity = (event) => {
    let newCity = event.target.value;
    setBanner((prevBanner) => {
      return {
        ...prevBanner,
        city: newCity,
      };
    });
  };

  return (
    <div>
      <button onClick={handleShow} class="btn btn-danger">
        <AddIcon />
      </button>
      <Modal centered={true} show={isExpanded} onHide={handleClose}>
        <Modal.Body>
          <p className="form-title">Please, fill out the form</p>

          <form className="create-note" onSubmit={submitNote}>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={banner.title}
              placeholder="Title"
              autoComplete="off"
              required
            />
            <hr />
            <textarea
              name="content"
              onChange={handleChange}
              value={banner.content}
              placeholder="Content"
              rows="3"
            />
            <hr />
            <input
              name="phone"
              onChange={handleChange}
              value={banner.phone}
              placeholder="Phone"
              autoComplete="off"
              required
            />
            <hr />
            <p>City: </p>
            <Form.Control onChange={chooseCity} as="select">
              <option></option>
              <option>Moscow</option>
              <option>Saint Petersburg</option>
              <option>Kazan</option>
              <option>Nizhny Novgorod</option>
            </Form.Control>
            <button class="add-button" type="submit">
              <AddIcon />
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateArea;
