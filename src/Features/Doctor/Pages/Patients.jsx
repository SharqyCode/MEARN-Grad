import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import homeIcon from "../../../assets/homelogo.svg";
import calender from "../../../assets/calender.svg";
import patients from "../../../assets/patients.svg";
import Brain from "../../../assets/Brain.svg";

export default function Patients() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    { label: "Dashboard", icon: homeIcon, path: "/" },
    { label: "Appointments", icon: calender, path: "/appointments" },
    { label: "Patients", icon: patients, path: "/patients" },
    { label: "AI Diagnosis Tool", icon: Brain, path: "/ai-tool" },
  ];

  // Static patient data
  const patientsData = [
    {
      id: 1,
      name: "Liam Harper",
      age: 45,
      gender: "Male",
      lastVisit: "2024-11-10",
      condition: "Hypertension",
      phone: "+1 (555) 123-4567",
      status: "Active",
    },
    {
      id: 2,
      name: "Olivia Bennett",
      age: 32,
      gender: "Female",
      lastVisit: "2024-11-12",
      condition: "Diabetes Type 2",
      phone: "+1 (555) 234-5678",
      status: "Active",
    },
    {
      id: 3,
      name: "Noah Carter",
      age: 58,
      gender: "Male",
      lastVisit: "2024-11-08",
      condition: "Arthritis",
      phone: "+1 (555) 345-6789",
      status: "Active",
    },
    {
      id: 4,
      name: "Emma Wilson",
      age: 28,
      gender: "Female",
      lastVisit: "2024-11-13",
      condition: "Asthma",
      phone: "+1 (555) 456-7890",
      status: "Active",
    },
    {
      id: 5,
      name: "James Miller",
      age: 67,
      gender: "Male",
      lastVisit: "2024-10-30",
      condition: "Heart Disease",
      phone: "+1 (555) 567-8901",
      status: "Follow-up Required",
    },
    {
      id: 6,
      name: "Sophia Hayes",
      age: 41,
      gender: "Female",
      lastVisit: "2024-11-11",
      condition: "Migraine",
      phone: "+1 (555) 678-9012",
      status: "Active",
    },
    {
      id: 7,
      name: "Ethan Walker",
      age: 35,
      gender: "Male",
      lastVisit: "2024-11-09",
      condition: "Back Pain",
      phone: "+1 (555) 789-0123",
      status: "Active",
    },
    {
      id: 8,
      name: "Ava Thompson",
      age: 52,
      gender: "Female",
      lastVisit: "2024-11-07",
      condition: "Chronic Fatigue",
      phone: "+1 (555) 890-1234",
      status: "Active",
    },
  ];

  // Filter patients based on search query
  const filteredPatients = patientsData.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.phone.includes(searchQuery)
  );

  const handlePatientClick = (patientId) => {
    navigate(`/patient/${patientId}`);
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-bg-light-primary text-text-dark overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* SIDEBAR */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-bg-light-primary p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h1 className="text-text-dark text-base font-medium leading-normal">
                    HealthFirst MD
                  </h1>
                  <p className="text-[#616f89] text-sm font-normal leading-normal">
                    Dr. Emily Carter
                  </p>
                </div>

                {/* Sidebar Menu */}
                <div className="flex flex-col gap-2 mt-4">
                  {sidebarItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-2 font-medium transition-all duration-200
                        ${
                          isActive
                            ? "bg-bg-light-secondary text-black font-semibold"
                            : "hover:bg-gray-200 text-[#111318] active:font-semibold"
                        }`
                      }
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-6 h-6 object-contain opacity-90"
                      />
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center gap-3 p-4">
              <p className="text-text-dark text-[32px] font-bold leading-tight">
                Patients
              </p>
              <div className="flex gap-3">
                <button className="flex items-center justify-center h-10 px-4 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all">
                  + Add New Patient
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="px-4 pb-3">
              <div className="flex items-center gap-2 bg-bg-light-secondary rounded-lg px-4 py-2 border border-[#dbdfe6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-[#616f89]"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search patients by name, condition, or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-text-dark text-sm placeholder:text-[#616f89]"
                />
              </div>
            </div>

            {/* Patients Stats */}
            <div className="grid grid-cols-3 gap-4 px-4 pb-4">
              <div className="bg-bg-light-secondary rounded-lg p-4 border border-[#dbdfe6]">
                <p className="text-[#616f89] text-sm">Total Patients</p>
                <p className="text-text-dark text-2xl font-bold mt-1">
                  {patientsData.length}
                </p>
              </div>
              <div className="bg-bg-light-secondary rounded-lg p-4 border border-[#dbdfe6]">
                <p className="text-[#616f89] text-sm">Active</p>
                <p className="text-text-dark text-2xl font-bold mt-1">
                  {patientsData.filter((p) => p.status === "Active").length}
                </p>
              </div>
              <div className="bg-bg-light-secondary rounded-lg p-4 border border-[#dbdfe6]">
                <p className="text-[#616f89] text-sm">Follow-up</p>
                <p className="text-text-dark text-2xl font-bold mt-1">
                  {
                    patientsData.filter(
                      (p) => p.status === "Follow-up Required"
                    ).length
                  }
                </p>
              </div>
            </div>

            {/* Patients Table */}
            <h2 className="text-text-dark text-[22px] font-bold px-4 pb-3 pt-2">
              All Patients
            </h2>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-lg border border-[#dbdfe6] bg-bg-light-primary">
                <table className="flex-1 w-full">
                  <thead>
                    <tr className="bg-bg-light-secondary">
                      <th className="px-4 py-3 text-left text-text-dark text-sm font-medium">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-text-dark text-sm font-medium">
                        Age
                      </th>
                      <th className="px-4 py-3 text-left text-text-dark text-sm font-medium">
                        Gender
                      </th>
                      <th className="px-4 py-3 text-left text-text-dark text-sm font-medium">
                        Condition
                      </th>
                      <th className="px-4 py-3 text-left text-text-dark text-sm font-medium">
                        Last Visit
                      </th>
                      <th className="px-4 py-3 text-left text-text-dark text-sm font-medium">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-text-dark text-sm font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.length > 0 ? (
                      filteredPatients.map((patient) => (
                        <tr
                          key={patient.id}
                          className="border-t border-[#dbdfe6] hover:bg-bg-light-secondary transition-colors duration-200 cursor-pointer"
                          onClick={() => handlePatientClick(patient.id)}
                        >
                          <td className="px-4 py-3 text-text-dark text-sm font-medium">
                            {patient.name}
                          </td>
                          <td className="px-4 py-3 text-[#616f89] text-sm">
                            {patient.age}
                          </td>
                          <td className="px-4 py-3 text-[#616f89] text-sm">
                            {patient.gender}
                          </td>
                          <td className="px-4 py-3 text-[#616f89] text-sm">
                            {patient.condition}
                          </td>
                          <td className="px-4 py-3 text-[#616f89] text-sm">
                            {patient.lastVisit}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                patient.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {patient.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button
                              className="text-primary hover:text-opacity-80 text-sm font-medium"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePatientClick(patient.id);
                              }}
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="px-4 py-8 text-center text-[#616f89] text-sm"
                        >
                          No patients found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
