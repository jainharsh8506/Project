import PropTypes from "prop-types";
import DataContext from "../context/useContext";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import doctor3 from "../assets/doctor3.jpeg";
import doctor4 from "../assets/doctor4.jpeg";
import legacy1 from "../assets/legacy-1.png";
import legacy2 from "../assets/legacy-2.png";
import legacy3 from "../assets/legacy-3.png";
import legacy4 from "../assets/legacy-4.png";
export default function DataProvider({ children }) {
  const doctorList = [
    {
      id: 1,
      name: "Dr. Clark Johnson",
      specialist:
        "Neurologist specializing in brain and nervous system disorders",
      url: doctor1,
      btnLink: "#",
    },
    {
      id: 2,
      name: "Dr. Innis Thompson",
      specialist:
        "Gynecologist providing comprehensive women's healthcare services",
      url: doctor2,
      btnLink: "#",
    },
    {
      id: 3,
      name: "Dr. John Smith",
      specialist:
        "Cardiologist with extensive experience in treating heart conditions",
      url: doctor3,
      btnLink: "#",
    },
    {
      id: 4,
      name: "Dr. Olivia Reynolds",
      specialist:
        "Professionals committed to providing the highest quality care to patients",
      url: doctor4,
      btnLink: "#",
    },
  ];

  const aboutCardData = [
    {
      id: 1,
      title: "Patients Beds",
      number: 155,
    },
    {
      id: 2,
      title: "Doctors",
      number: 186,
    },
    {
      id: 3,
      title: "Nurse",
      number: 121,
    },
    {
      id: 4,
      title: "Happy Patients",
      number: 1668,
    },
  ];

  const legacyCard = [

    {
      id: 1,
      name: "Mr. Mark Hannery",
      review:
        "Exceptional care and outstanding service - a hospital that truly puts patients first.",
      rating: 3,
      url: legacy1,
    },
    {
      id: 2,
      name: "Mr. Mikeal Clark",
      review:
        "Efficient, reliable, and dedicated to ensuring the well-being of their patients - a hospital you can trust.",
      rating: 4,
      url: legacy3,
    },
    {
      id: 1,
      name: "Mr. Usman Kabeer",
      review:
        "Exceptional care and outstanding service - a hospital that truly puts patients first.",
      rating: 5,
      url: legacy2,
    },
    {
      id: 1,
      name: "Mr. Mark Hannery",
      review:
        "Exceptional care and outstanding service - a hospital that truly puts patients first.",
      rating: 3,
      url: legacy4,
    },
  ];
  const appointmentSelectOptions = [
    { label: "Location Name", options: ["Location 1", "Location 2", "Location 3"] },
    { label: "Appointment Type", options: ["Type 1", "Type 2", "Type 3"] },
    { label: "Select Date", options: ["Date 1", "Date 2", "Date 3"] },
    { label: "Physician Specialty", options: ["Specialty 1", "Specialty 2", "Specialty 3"] },
    { label: "Appointment Reason", options: ["Reason 1", "Reason 2", "Reason 3"] },
    { label: "Appointment Reason", options: ["Reason 1", "Reason 2", "Reason 3"] },
  ];
  return (
    <DataContext.Provider value={{ doctorList, legacyCard, aboutCardData, appointmentSelectOptions }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node,
};
