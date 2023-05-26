import React from "react";

const FAQ = () => {
  return (
    <section className="FAQ">
      <h1 className="header1">F.A.Q</h1>
      <ul>
        <li>
          <h5 className="header2 mb-1">Apa itu NurPujiyanto.com</h5>
          <p className="text1 ">
            Website ini difungsikan mengkumpulkan fortofolio yang buat oleh Nur
            Pujiyanto{" "}
          </p>
        </li>
        <li>
          <h5 className="header2 mb-1">
            bagaimana untuk kerjasama dengan developer
          </h5>
          <p className="text1">
            anda bisa menghubungi developer melalui form contact atau bisa klik
            salah satu icon email di footer sebelah kiri, untuk mengirimkan
            email
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FAQ;
