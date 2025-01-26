// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "../components/header";
// import Footer from "../components/footer";

// export default function LoanDetailPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { category } = location.state || {};
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);
//   const [totalLoan, setTotalLoan] = useState(0);
//   const [initialDeposit, setInitialDeposit] = useState(0);
//   const [installmentMonths, setInstallmentMonths] = useState(0);
//   const [monthlyInstallment, setMonthlyInstallment] = useState(null);
//   const [error, setError] = useState(null);

//   // Handle the subcategory click
//   const handleSubcategoryClick = (sub) => {
//     setSelectedSubcategory(sub);
//   };

//   // Calculate loan amount and monthly installment
//   const handleCalculateLoan = () => {
//     const maxLoan = 500000; // PKR 5 Lakh Max Loan Amount

//     if (totalLoan > maxLoan) {
//       setError(`Loan amount cannot exceed PKR ${maxLoan}`);
//       return;
//     }

//     if (totalLoan <= 0) {
//       setError("Total loan amount must be greater than 0");
//       return;
//     }

//     if (initialDeposit < 0 || initialDeposit > totalLoan) {
//       setError("Initial deposit should be between 0 and total loan amount");
//       return;
//     }

//     if (installmentMonths <= 0) {
//       setError("Installment months must be greater than 0");
//       return;
//     }

//     const loanAmount = totalLoan - initialDeposit;
//     const monthlyInstallmentAmount = loanAmount / installmentMonths;

//     setError(null);
//     setMonthlyInstallment(monthlyInstallmentAmount);
//   };

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <header className="hero">
//           <h1>{category.title} - Details</h1>
//           <p>{category.description}</p>
//         </header>

//         <div className="loan-detail-info">
//           <h2>Loan Details</h2>
//           <p>
//             You are eligible for a loan of up to <strong>PKR 5 Lakh</strong> for a period of <strong>3 years</strong>.
//           </p>
//         </div>

//         <div className="subcategories">
//           <h2>Choose Subcategory</h2>
//           <br />
//           <div className="subcategory-cards">
//             {category.subcategories.map((sub, index) => (
//               <div key={index} className="subcategory-card" onClick={() => handleSubcategoryClick(sub)}>
//                 <h3>{sub}</h3>
//               </div>
//             ))}
//           </div>
//         </div>

//         {selectedSubcategory && (
//           <div className="loan-calculator">
//             <h2>Loan Calculator</h2>
//             <div className="calculator-form">
//               <label>Total Loan Amount (PKR)</label>
//               <input type="number" value={totalLoan} onChange={(e) => setTotalLoan(Number(e.target.value))} placeholder="Enter total loan amount" />

//               <label>Initial Deposit (PKR)</label>
//               <input type="number" value={initialDeposit} onChange={(e) => setInitialDeposit(Number(e.target.value))} placeholder="Enter initial deposit amount" />

//               <label>Installment Months</label>
//               <input type="number" value={installmentMonths} onChange={(e) => setInstallmentMonths(Number(e.target.value))} placeholder="Enter installment months" />

//               <button onClick={handleCalculateLoan} className="calculate">Calculate</button>

//               {error && <p className="error-message">{error}</p>}

//               {monthlyInstallment !== null && !error && (
//                 <div className="calculated-details">
//                   <p>Monthly Installment: PKR {monthlyInstallment.toFixed(2)}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         <br />
//         <button>Proceed</button>
//       </div>
//       <Footer />
//     </>
//   );
// }


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function LoanDetailPage() {
  const location = useLocation();
  const { category } = location.state || {};
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [totalLoan, setTotalLoan] = useState(0);
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [installmentMonths, setInstallmentMonths] = useState(0);
  const [monthlyInstallment, setMonthlyInstallment] = useState(null);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubcategoryClick = (sub) => {
    setSelectedSubcategory(sub);
  };

  const handleCalculateLoan = () => {
    const maxLoan = 500000; // PKR 5 Lakh Max Loan Amount

    if (totalLoan > maxLoan) {
      setError(`Loan amount cannot exceed PKR ${maxLoan}`);
      return;
    }

    if (totalLoan <= 0) {
      setError("Total loan amount must be greater than 0");
      return;
    }

    if (initialDeposit < 0 || initialDeposit > totalLoan) {
      setError("Initial deposit should be between 0 and total loan amount");
      return;
    }

    if (installmentMonths <= 0) {
      setError("Installment months must be greater than 0");
      return;
    }

    const loanAmount = totalLoan - initialDeposit;
    const monthlyInstallmentAmount = loanAmount / installmentMonths;

    setError(null);
    setMonthlyInstallment(monthlyInstallmentAmount);
  };

  const handleProceed = () => {
    setShowPopup(true);
  };

  return (
    <>
      <Header />
      <div className="container">
        <header className="hero">
          <h1>{category.title} - Details</h1>
          <p>{category.description}</p>
        </header>

        <div className="loan-detail-info">
          <h2>Loan Details</h2>
          <p>
            You are eligible for a loan of up to <strong>PKR 5 Lakh</strong> for a period of <strong>3 years</strong>.
          </p>
        </div>

        <div className="subcategories">
          <h2>Choose Subcategory</h2>
          <br />
          <div className="subcategory-cards">
            {category.subcategories.map((sub, index) => (
              <div key={index} className="subcategory-card" onClick={() => handleSubcategoryClick(sub)}>
                <h3>{sub}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* git branch -M main */}
        {selectedSubcategory && (
          <div className="loan-calculator">
            <h2>Loan Calculator</h2>
            <div className="calculator-form">
              <label>Total Loan Amount (PKR)</label>
              <input type="number" value={totalLoan} onChange={(e) => setTotalLoan(Number(e.target.value))} placeholder="Enter total loan amount" />

              <label>Initial Deposit (PKR)</label>
              <input type="number" value={initialDeposit} onChange={(e) => setInitialDeposit(Number(e.target.value))} placeholder="Enter initial deposit amount" />

              <label>Installment Months</label>
              <input type="number" value={installmentMonths} onChange={(e) => setInstallmentMonths(Number(e.target.value))} placeholder="Enter installment months" />

              <button onClick={handleCalculateLoan} className="calculate">Calculate</button>

              {error && <p className="error-message">{error}</p>}

              {monthlyInstallment !== null && !error && (
                <div className="calculated-details">
                  <p>Monthly Installment: PKR {monthlyInstallment.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        )}

        <button onClick={handleProceed} className="proceed-btn">Proceed Your Application</button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="popup-heading">Application Form</h2>
            <div className="first-popup">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            </div>
            <br />
            <div className="first-popup">
            <label>CNIC:</label>
            <input type="text" value={cnic} onChange={(e) => setCnic(e.target.value)} placeholder="Enter your CNIC" />
            </div>
            <br />
            <div className="first-popup">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </div>
            <button onClick={() => setShowPopup(false)} className="submit-btn">Submit</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
