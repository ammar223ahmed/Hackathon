// import React from "react";
// import Header from "../components/header";
// import Footer from "../components/footer";

// export default function Home() {

//     const loanCategories = [
//         {
//           title: "Wedding Loans",
//           description: "Financial support for wedding-related expenses.",
//           subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
//           maxLoan: "PKR 5 Lakh",
//           period: "3 years",
//         },
//         {
//           title: "Home Construction Loans",
//           description: "Build or renovate your dream home.",
//           subcategories: ["Structure", "Finishing", "Loan"],
//           maxLoan: "PKR 10 Lakh",
//           period: "5 years",
//         },
//         {
//           title: "Business Startup Loans",
//           description: "Kickstart your entrepreneurial journey.",
//           subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
//           maxLoan: "PKR 10 Lakh",
//           period: "5 years",
//         },
//         {
//           title: "Education Loans",
//           description: "Secure a brighter future through education.",
//           subcategories: ["University Fees", "Child Fees Loan"],
//           maxLoan: "Based on requirement",
//           period: "4 years",
//         },
//       ];
      

//   return (
//     <>
    
//     <Header/>
//     <div className="container">
//       <header className="hero">
//         <h1>Saylani Microfinance</h1>
//         <p>Empowering Dreams with Easy Loans</p>
//       </header>

//       <div className="loan-categories">
//         {loanCategories.map((category, index) => (
//           <div key={index} className="card">
//             <h2>{category.title}</h2>
//             <p>{category.description}</p>
//             <ul>
//               {category.subcategories.map((sub, idx) => (
//                 <li key={idx}>{sub}</li>
//               ))}
//             </ul>
//             <p className="loan-details">Max Loan: {category.maxLoan}</p>
//             <p className="loan-details">Loan Period: {category.period}</p>
//             <button className="apply-btn">Detail </button>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }


import React from "react"; 
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const navigate = useNavigate();

  const loanCategories = [
    {
      title: "Wedding Loans",
      description: "Financial support for wedding-related expenses.",
      maxLoan: "PKR 5 Lakh",
      period: "3 years",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    },
    {
      title: "Home Construction Loans",
      description: "Build or renovate your dream home.",
      maxLoan: "PKR 10 Lakh",
      period: "5 years",
      subcategories: ["Structure", "Finishing", "Loan"],
    },
    {
      title: "Business Startup Loans",
      description: "Kickstart your entrepreneurial journey.",
      maxLoan: "PKR 10 Lakh",
      period: "5 years",
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    },
    {
      title: "Education Loans",
      description: "Secure a brighter future through education.",
      maxLoan: "Based on requirement",
      period: "4 years",
      subcategories: ["University Fees", "Child Fees Loan"],
    },
  ];

  const handleDetailClick = (category) => {
    navigate("/loandetailpage", { state: { category } });
  };

  return (
    <>
      <Header />
      <div className="container">
        <header className="hero">
          <h1>Saylani Microfinance</h1>
          <p>Empowering Dreams with Easy Loans</p>
        </header>
    <br /><br />
        <div className="loan-categories">
          {loanCategories.map((category, index) => (
            <div key={index} className="card">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <br />
              <p className="loan-details">Max Loan: {category.maxLoan}</p>
              <p className="loan-details">Loan Period: {category.period}</p>
               <br></br>
              <button className="apply-btn" onClick={() => handleDetailClick(category)}>Detail</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

