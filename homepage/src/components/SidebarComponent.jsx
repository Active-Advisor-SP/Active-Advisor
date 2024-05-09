import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [
  { title: 'Racquetball', year: 1994 },
  { title: 'Yoga', year: 1972 },
  { title: 'Volleyball', year: 1974 },
  { title: 'Tennis', year: 2008 },
  { title: 'Basketball', year: 1957 },
  { title: "Archery", year: 1993 },
  { title: 'Pilates', year: 1994 },
  { title: 'Zumba', year: 1994 },
  { title: 'Fitness', year: 1994 },
  { title: 'Running', year: 1994 },
  { title: 'Jogging', year: 1994 },

  ];

function SidebarComponent() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <div>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
      />
<br /><br />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="indoor" title="Indoor Activities">
          <Card style={{ width: "18rem", margin: "10px" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Racquetball</ListGroup.Item>
              <ListGroup.Item>Yoga</ListGroup.Item>
              <ListGroup.Item>Volleyball</ListGroup.Item>
              <ListGroup.Item>Tennis</ListGroup.Item>
              <ListGroup.Item>Basketball</ListGroup.Item>
            </ListGroup>
          </Card>
        </Tab>
        <Tab eventKey="outdoor" title="Outdoor Activities">
          <Card style={{ width: "18rem", margin: "10px" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Archery</ListGroup.Item>
              <ListGroup.Item>Yoga</ListGroup.Item>
              <ListGroup.Item>Football</ListGroup.Item>
              <ListGroup.Item>Volleyball</ListGroup.Item>
              <ListGroup.Item>Tennis</ListGroup.Item>
              <ListGroup.Item>Golf</ListGroup.Item>
              <ListGroup.Item>Basketball</ListGroup.Item>
            </ListGroup>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default SidebarComponent;
