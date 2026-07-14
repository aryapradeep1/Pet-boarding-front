import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewPet = () => {

    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:3000/view-pet")
            .then((response) => {
                setPet(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>

            <div className="container mt-5">

                <h2 className="text-center mb-4">View Pet Bookings</h2>

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-dark">
                        <tr>
                            <th>Sl No</th>
                            <th>Booking ID</th>
                            <th>Pet Name</th>
                            <th>Owner Name</th>
                            <th>Pet Type</th>
                            <th>Owner Phone</th>
                            <th>Owner Email</th>
                            <th>Breed</th>
                            <th>Age</th>
                            <th>Weight</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Vaccination</th>
                            <th>Kennel No</th>
                        </tr>
                    </thead>

                    <tbody>

                        {pet.map((value, index) => (

                            <tr key={value._id}>

                                <td>{index + 1}</td>
                                <td>{value.bookingId}</td>
                                <td>{value.petName}</td>
                                <td>{value.ownerName}</td>
                                <td>{value.petType}</td>
                                <td>{value.ownerPhone}</td>
                                <td>{value.ownerEmail}</td>
                                <td>{value.breed}</td>
                                <td>{value.age}</td>
                                <td>{value.weight}</td>
                                <td>{value.checkInDate}</td>
                                <td>{value.checkOutDate}</td>
                                <td>{value.vaccinationStatus}</td>
                                <td>{value.kennelNumber}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default ViewPet;