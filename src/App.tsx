import React, { MouseEvent , ChangeEvent, useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import ApiService from "./ApiService";

import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  const [startYear, setStartYear] = useState(1900);
  const [endYear, setEndYear] = useState(2021);

  useEffect(() => {
    console.log(`End Year has changed to ${endYear}`)
  }, [endYear]);

  const onClickButton = async (event: MouseEvent) => {
    event.preventDefault();

    setCount((oldCount) => oldCount + 1);

    console.log(`Button clicked ${count} time${count === 1 ? "" : "s"}`);

    try {
      const apiResponse = await ApiService();
      const filteredMovies = apiResponse.filter((movie : any) => movie.release_date >= startYear && movie.release_date <= endYear);
      console.log(filteredMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeStartYear = (event: ChangeEvent | any) => {
    setStartYear(event.target.value);
    console.log(`Start Year now is ${startYear}`);
  };

  const onChangeEndYear = (event: ChangeEvent | any) => {
    setEndYear(event.target.value);
    console.log(`End Year now is ${endYear}`);
  };

  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formStartYear">
          <Form.Label>Start Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Start Year"
            onChange={onChangeStartYear}
            value={startYear}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEndYear">
          <Form.Label>End Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="End Year"
            onChange={onChangeEndYear}
            value={endYear}
          />
        </Form.Group>
        <Button variant="primary" onClick={onClickButton}>
          Click me!
        </Button>
      </Form>
      <p>{count}</p>
    </div>
  );
}

export default App;
