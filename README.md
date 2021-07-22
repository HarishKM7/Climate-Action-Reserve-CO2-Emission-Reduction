# Climate Action Reserve — CO2 Emission Reduction

This project is also available as [a GitHub project](https://github.com/HarishKM7/Climate-Action-Reserve-CO2-Emission-Reduction).

The Climate Action Reserve (CAR) has [a list of projects](https://thereserve2.apx.com/myModule/rpt/myrpt.asp?r=111) that perform carbon dioxide (CO2) emission reduction.

This microservice returns the details for a given project.

For example, a GET request to `MICROSERVICE_ENDPOINT/project/1458` returns:

```json
{
  "project_id": "CAR1458",
  "arb_id": "CAOD6458",
  "cooperative_aggregate_id": "",
  "project_developer": "Reclamation Technologies Inc.",
  "project Owner": "Reclamation Technologies Inc.",
  "project_name": "A-Gas 1-2021",
  "offset_project_operator": "Reclamation Technologies, Inc., dba A-Gas",
  "authorized_project_designee": "None",
  "verification_body": "",
  "project_type": "Ozone Depleting Substances - U.S. - ARB Compliance",
  "status": "Registered",
  "arb_project_status": "Proposed Project",
  "project_site_location": "Wood County, Bowling Green, Ohio",
  "project_site_state": "OHIO",
  "project_site_country": "US",
  "additional_certification": "",
  "sdg_impact": "",
  "project_notes": "",
  "total_number_of_offset_credits_registered": 84267,
  "project_listed_date": "11/20/2020",
  "project_registered_date": "01/28/2021",
  "documents": "View",
  "data": "View",
  "project_website": "www.agasamericas.com"
}
```

## How it Works

The `microservice.js` file first loads the CSV of all projects from disk, converts its contents to JSON & keeps this in memory. Whenever an incoming request is received, details of the requested project are returned from this in-memory JSON.

The GitHub actions workflow builds the microservice & runs unit tests (if any).
