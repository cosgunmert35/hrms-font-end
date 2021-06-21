import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementsList() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setjobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
     

      {jobAdvertisements.map((jobAdvertisement) => (
        <Card key={jobAdvertisement.id} fluid={true} color = {"teal"}>
          <Card.Content>
            <Card.Header>
              {jobAdvertisement.jobPosition.positionName}
            </Card.Header>
            <Card.Description textAlign = {'left'}>
              {`${jobAdvertisement.description}`}
            </Card.Description>
            <Card.Meta textAlign = {'right'}>
              <span className = 'date'> {`Expire Date : ${jobAdvertisement.expireDate}`}</span>
            </Card.Meta>
            
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}


/*

 <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Quota</Table.HeaderCell>
            <Table.HeaderCell>Create Date</Table.HeaderCell>
            <Table.HeaderCell>Expire Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>
              <Table.Cell>
                {jobAdvertisement.jobPosition.positionName}
              </Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.quota}</Table.Cell>
              <Table.Cell>{jobAdvertisement.createDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.expireDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
*/