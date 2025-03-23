import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const NewsHighlightsComponent = () => {
  const newsItems = [
    "APEDA Flags-off of Goli Pop Soda – India's Iconic Goli...",
    "Indian Institute of Corporate Affairs (IICA) launches Samarthya...",
    "Prime Minister pays tributes to Bhagat Singh, Rajguru, and...",
    "Prime Minister pays tributes to Dr. Ram Manohar Lohia...",
    "DELHI BECOMES THE 28TH LEGISLATURE TO JOIN THE NATIONAL E...",
    "World Water Day 2025",
    "Grassroot level meetings with Political Parties at ERO, DEO...",
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white fw-bold">
        News Highlights
      </div>
      <div className="card-body">
        <ul className="list-unstyled">
          {newsItems.map((news, index) => (
            <li key={index} className="mb-2">
              &raquo; {news}
            </li>
          ))}
        </ul>
        <button className="btn btn-outline-primary btn-sm">More News...</button>
      </div>
    </div>
  );
};

const InformationFormsComponent = () => {
  const infoLinks = [
    "Website of Indian Institute of Geomagnetism",
    "Website of Meteorological Centre of Ahmedabad",
    "Micro Small and Medium Enterprises Development Institute...",
    "Website of National Research Centre for Grapes",
    "Website of Directorate of Social Welfare and Social...",
    "Science and Technology International Cooperation Division",
    "ENVIS Centre of Chhattisgarh Environment Conservation Board",
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white fw-bold">
        Most Requested Information & Forms
      </div>
      <div className="card-body">
        <ul className="list-unstyled">
          {infoLinks.map((info, index) => (
            <li key={index} className="mb-2">
              &raquo; {info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ActivitiesInitiativesComponent = () => {
  const initiatives = [
    "MANAS: Portal to raise awareness and establish a comprehensive platform for reporting and seeking assistance for drug-related issues.",
    "Health ID - Key to your Digital Healthcare Journey.",
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-warning text-dark fw-bold">
        Activities & Initiatives
      </div>
      <div className="card-body">
        <ul className="list-unstyled">
          {initiatives.map((initiative, index) => (
            <li key={index} className="mb-2">
              &raquo; {initiative}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-md-4">
          <NewsHighlightsComponent />
        </div>
        <div className="col-md-4">
          <InformationFormsComponent />
        </div>
        <div className="col-md-4">
          <ActivitiesInitiativesComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
