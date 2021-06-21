import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";

import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekersList() {
  const [jobSeekers, setjobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeeker()
      .then((result) => setjobSeekers(result.data.data));
  });

  return (
    <div>
      <Card.Group>
        {/* Profil fotoğraları cartların üst kısmına eklenecek */}
        {jobSeekers.map((jobSeeker) => (
          <Card key={jobSeeker.id}  color = {'teal'}>
            <Card.Content>
              <Card.Header>
                {" "}
                {`${jobSeeker.firstName} ${jobSeeker.lastName}`}{" "}
              </Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
