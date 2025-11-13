
import React, { useState } from "react";
import "./Branch.css";
import { fontSize } from "@mui/system";

const branches = [
  { name: "KEBBI", address: "Plot 20, Emir, Haruna Road, Birnin - Kebbi, Kebbi", email: "Sunday.bamayi@fcmb.com", phone: "08145990289" },
  { name: "LAGOS", address: "Old ojo road, olui worlbank lll avenue newar roaad", email: "godwin.ogidi@fcmb.com", phone: "08145990289" },
  { name: "KANO", address: "145 Muritala Mohammed Way, Kano, Kano State", email: "Sunday.bamayi@fcmb.com", phone: "08145990289" },
  { name: "KOGI", address: "16 Aliyu Oba ji Road FCMB hohii kogioo, oooo", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "ENUGU", address: "Fcmb 181 Mbiama Road, Building Firs Bayelsa.", email: "musa.abdullahi@fcmb.com", phone: "0988288272" },
  { name: "ENUGU", address: "Fcmb 41 Garden Avenue, FCMB Building First Floor,", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "KATSINA", address: "1, No 132 Ibb Way Kano Road By Yantumaki Junction", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "EKITI", address: " Building Along Secretariat Road, Ado-Ekiti, Ekiti State.", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "NIGER", address: "Fist City Monument Bank, Opposite CBN Minna Branch,", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "FCT", address: "Plot 252 Herbert Macaulay,Central Business District Firstcity Plaza", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "ANAMBRA", address: "Anambra Nnewi Oraifite Branchangelaonwukafcmbcom", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "GOMBE", address: "FCMB commercial road Opposite Airtel office, Gombe", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "Plateau", address: "FCMB Building, No4, Beach Road Jos", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "KADUNA", address: "Fcmb Beside Cbn office, Yakubu Gowon Way Kaduna.", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
  { name: "SOKOTO", address: "27, Fcmb, Sanni Abacha Way, Sokoto South, Sokoto.", email: "musa.abdullahi@fcmb.com", phone: "08145990289" },
];

const Branch = () => {
  const [visible, setVisible] = useState(3);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  const loadMore = () => setVisible((prev) => prev + 3);

  const filteredBranches = branches.filter((b) =>
    b.name.toLowerCase().includes(search)
  );

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 12px grey",
        padding: "16px",
        maxWidth: "1200px",
        width: "85%",
        margin: "55px auto",
         borderBottom: '7px black solid'
      }}
    >
      <p
        style={{
          textAlign: "center",
          padding: "2%",
          fontSize: "20px",
          fontFamily: "arial",
          color: "rgb(66, 65, 65)",
        }}
      >
        Our Branches
      </p>

      <h1 className="bra-h1">Where To Find Us</h1>

      <p
        style={{
          textAlign: "center",
          padding: "2%",
          fontSize: "16px",
          color: "rgb(66, 65, 65)",
        }}
      >
        See the list of our office branches below and feel free to visit the
        closest one to you.
      </p>

      <input
        className="bran-input"
        type="text"
        placeholder="Search Branch"
        value={search}
        onChange={handleSearch}
      />

      
      <div className="branch">
        {filteredBranches.slice(0, visible).map((branch, index) => (
          <div key={index} className="branch1">
            <ion-icon
              name="location"
              style={{
                transform: "scale(1.8)",
                color: "#e63946",
                marginBottom: "20px",
                marginTop: "20px",
                fontSize:'25px'
              }}
            ></ion-icon>
            <h2
              style={{
                fontFamily: "arial",
                color: "rgb(66, 65, 65)",
                padding: "4%",
              }}
            >
              {branch.name}
            </h2>
            <p
              style={{
                textAlign: "center",
                padding: "4%",
                fontSize: "16px",
                color: "rgb(66, 65, 65)",
              }}
            >
              {branch.address}
            </p>
            <p
              style={{
textAlign: "center",
                padding: "3%",
                fontSize: "16px",
                color: "rgb(66, 65, 65)",
              }}
            >
              {branch.email}
            </p>
            <h3 className="bra-h3">
              <a href={`tel:${branch.phone}`} >
                {branch.phone}
              </a>
            </h3>
          </div>
        ))}
      </div>


      {visible < filteredBranches.length && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button
            onClick={loadMore}
            className="bu"
            // style={{
            //   background: "#f9f9f9",
            //   color: "black",
            //   padding: "18px 40px",
            //   borderRadius: "20px",
            //   cursor: "pointer",
            //   border: "none",
            //   marginTop:'23px',
            //  border: '1px solid #ddd',
            //  fontWeight:'bold'


            // }}

            
          >
            Load More
          </button>
        </div>
      )}

      
      {filteredBranches.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>No Branches Found</p>
      )}
    </div>
  );
};

export default Branch;