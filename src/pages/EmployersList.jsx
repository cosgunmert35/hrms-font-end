import React, { useEffect, useState } from "react";

import { Card } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployersList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      {employers.map((employer) => (
        <Card fluid = {true} key = {employer.id}>
          <Card.Content>
            <Card.Header> {employer.companyName} </Card.Header>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
