import React from "react";
import Breadcrumb from "../components/BookAppointment/BookAppointment"; // Import the breadcrumb component
import AppointmentServices from "../components/BookAppointment/AppointmentServices";

const BookAppointmentPage = () => {
  return (
    <div>
      <Breadcrumb />
      <div>
        <AppointmentServices/>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
